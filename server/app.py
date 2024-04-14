#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import Flask, request, make_response, session
from flask_restful import Resource

# Local imports
from config import app, db, api
from models import *

# Views

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

### authentication ###

class CheckSession(Resource):
    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if not user:
            return make_response({'error': "Unauthorized: Please log in."}, 401)
        else:
            return make_response(user.to_dict(), 200)

api.add_resource(CheckSession, '/check_session', endpoint='check_session')

class Signup(Resource):
    
    def post(self):
        json = request.get_json()
        try:
            user = User(
                name=json['name'],
                email=json['email']
            )
            user.password_hash = json['password']
            db.session.add(user)
            db.session.commit()
            session['user_id'] = user.id

            return make_response(user.to_dict(), 201)

        except Exception as e:
            return make_response({'errors': str(e)}, 422)
    
api.add_resource(Signup, '/signup', endpoint='signup')

class Login(Resource):

    def post(self):
        email = request.get_json()['email']

        user = User.query.filter(User.email == email).first()
        password = request.get_json()['password']

        if not user:
            response_body = {'error': 'User not found'}
            status = 404
        else:
            if user.authenticate(password):
                session['user_id'] = user.id
                response_body = user.to_dict()
                status = 200
            else:
                response_body = {'error': 'Invalid username or password'}
                status = 401
        return make_response(response_body, status)

api.add_resource(Login, '/login', endpoint='login')

class Logout(Resource):
    
    def delete(self):
        session['user_id'] = None
        return {}, 204
    
api.add_resource(Logout, '/logout', endpoint='logout')

### authorization ###

allowed_endpoints = ['signup', 'login', 'check_session']
@app.before_request
def check_if_logged_in():
    if not session.get('user_id') and request.endpoint not in allowed_endpoints:
        return {'error': 'Unauthorized'}, 401

### pets ###

@app.route('/pets', methods = ['GET', 'POST'])
def pets():
    pets = [pet.to_dict(rules=('-transport_pets',)) for pet in Pet.query.all()]

    if request.method == 'GET':
        response = make_response(
            pets,
            200
        )
    elif request.method == 'POST':
        try: 
            form_data = request.get_json()

            new_pet = Pet()
            for attr in dir(Pet):
                if attr in form_data:
                    setattr(new_pet, attr, form_data[attr])

            db.session.add(new_pet)
            db.session.commit()

            response = make_response(
                new_pet.to_dict(rules=('-transport_pets',)),
                201
            )
        except ValueError as e:
            response = make_response(
                { "errors": [str(e)] }, 
                400
            )
        except: ## improvement (low-priority): make non-Value error messages more informative 
                    # How to catch IntegrityError for NULL constraint violation?
            response = make_response(
                { "errors": ['Please try again.'] }, 
                400
            )
    return response

@app.route('/pets/<int:id>', methods = ['GET', 'PATCH', 'DELETE'])
def pet_by_id(id):
    pet = Pet.query.filter(Pet.id == id).first()

    if not pet:
        response = make_response(
            {"error": "Pet not found"}, 
            404
        )
    else:
        if request.method == 'GET':
            response = make_response (
                pet.to_dict(rules=('-transport_pets',)),
                200
            )
        elif request.method == 'PATCH':
            try:
                form_data = request.get_json()

                for attr in form_data:
                    setattr(pet, attr, form_data[attr])

                db.session.commit()
                response = make_response(
                    pet.to_dict(rules=('-transport_pets',)), 
                    202
                )
            except ValueError:
                response = make_response(
                    { "errors": ["validation errors"] }, 
                    400
                )
        elif request.method == 'DELETE':
            db.session.delete(pet)
            db.session.commit()
            response = make_response(
                { 
                    "delete_successful": True, 
                    "message": f"{pet.name} deleted." 
                },
                200
            )
    return response

### organizations ###

@app.route('/organizations', methods = ['GET', 'POST'])
def organizations():
    organizations = [organization.to_dict(rules=('-transport_pets', '-transport_organizations')) 
                     for organization 
                     in Organization.query.all()]

    if request.method == 'GET':
        response = make_response(
            organizations,
            200
        )
    elif request.method == 'POST':
        try: 
            form_data = request.get_json()

            new_organization = Organization()
            for attr in dir(Organization):
                if attr in form_data:
                    setattr(new_organization, attr, form_data[attr])

            db.session.add(new_organization)
            db.session.commit()

            response = make_response(
                new_organization.to_dict(),
                201
            )
        except ValueError as e:
            response = make_response(
                { "errors": [str(e)] }, 
                400
            )
        except: ## improvement (low-priority): make non-Value error messages more informative 
                    # How to catch IntegrityError for NULL constraint violation?
            response = make_response(
                { "errors": ['Please try again.'] }, 
                400
            )
    return response

### transports ###

@app.route('/transports', methods = ['GET', 'POST']) ## add later: POST
def transports():
    transports = [transport.to_dict(rules=('-transport_pets', '-transport_organizations',)) 
                  for transport in Transport.query.all()]

    if request.method == 'GET':
        response = make_response(
            transports,
            200
        )
    elif request.method == 'POST':
        pass
    return response

@app.route('/transports/<int:id>', methods = ['GET', 'PATCH', 'DELETE'])
def transport_by_id(id):
    transport = Transport.query.filter(Transport.id == id).first()

    if not transport:
        response = make_response(
            {"error": "Transport not found"}, 
            404
        )
    else:
        if request.method == 'GET':
            response = make_response (
                transport.to_dict(rules=('-transport_pets', '-transport_organizations')),
                200
            )
        # elif request.method == 'PATCH':
        #     try:
        #         form_data = request.get_json()

        #         for attr in form_data:
        #             setattr(pet, attr, form_data[attr])

        #         db.session.commit()
        #         response = make_response(
        #             pet.to_dict(), 
        #             202
        #         )
        #     except ValueError:
        #         response = make_response(
        #             { "errors": ["validation errors"] }, 
        #             400
        #         )
        # elif request.method == 'DELETE':
        #     db.session.delete(pet)
        #     db.session.commit()
        #     response = make_response(
        #         { 
        #             "delete_successful": True, 
        #             "message": f"{pet.name} deleted." 
        #         },
        #         200
        #     )
    return response

@app.route('/transports/<int:id>/pets')
def pets_in_transport(id):
    transport = Transport.query.filter(Transport.id == id).first()

    if not transport:
        response = make_response(
            {"error": "Transport not found"}, 
            404
        )
    else:
        pets = []
        for transport_pet in transport.transport_pets:
            pet = transport_pet.pet
            pet_dict = pet.to_dict(rules=('-transport_pets',))
            pets.append(pet_dict)
        
        response = make_response (
            pets,
            200
        )
        
    return response

@app.route('/transports/<int:id>/organizations')
def organizations_in_transport(id):
    transport = Transport.query.filter(Transport.id == id).first()

    if not transport:
        response = make_response(
            {"error": "Transport not found"}, 
            404
        )
    else:
        organizations = []
        for transport_organization in transport.transport_organizations:
            organization = transport_organization.organization
            organization_dict = organization.to_dict(rules=('-transport_pets', 
                                                            '-transport_organizations',))
            organizations.append(organization_dict)
        
        response = make_response (
            organizations,
            200
        )
        
    return response

### transport_pets ###

@app.route('/transport_pets', methods = ['GET', 'POST']) ## add later: POST
def transport_pets():
    transport_pets = [transport_pet.to_dict(rules=('-transport', '-pet',)) 
                      for transport_pet 
                      in TransportPet.query.all()]

    if request.method == 'GET':
        response = make_response(
            transport_pets,
            200
        )
    elif request.method == 'POST':
        try: 
            form_data = request.get_json()

            new_tp = TransportPet()
            for attr in dir(TransportPet):
                if attr in form_data:
                    setattr(new_tp, attr, form_data[attr])

            db.session.add(new_tp)
            db.session.commit()

            response = make_response(
                new_tp.to_dict(rules=('-transport', '-pet',)),
                201
            )
        except ValueError as e:
            response = make_response(
                { "errors": [str(e)] }, 
                400
            )
        except: ## improvement (low-priority): make non-Value error messages more informative 
                    # How to catch IntegrityError for NULL constraint violation?
            response = make_response(
                { "errors": ['Please try again.'] }, 
                400
            )
    return response

### transport_organizations ###

@app.route('/transport_organizations', methods = ['GET', 'POST']) ## add later: POST
def transport_organizations():
    transport_organizations = [transport_organization.to_dict(rules=('-transport', '-organization',)) 
                               for transport_organization 
                               in TransportOrganization.query.all()]

    if request.method == 'GET':
        response = make_response(
            transport_organizations,
            200
        )
    elif request.method == 'POST':
        pass
    return response

if __name__ == '__main__':
    app.run(port=5555, debug=True)