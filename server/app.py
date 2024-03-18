#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import Flask, request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import *

# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

######## PETS ########

@app.route('/pets', methods = ['GET', 'POST'])
def pets():
    pets = [pet.to_dict() for pet in Pet.query.all()]

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
                new_pet.to_dict(),
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
def pets_by_id(id):
    pet = Pet.query.filter(Pet.id == id).first()

    if not pet:
        response = make_response(
            {"error": "Pet not found"}, 
            404
        )
    else:
        if request.method == 'GET':
            response = make_response (
                pet.to_dict(),
                200
            )
        elif request.method == 'PATCH':
            try:
                form_data = request.get_json()

                for attr in form_data:
                    setattr(pet, attr, form_data[attr])

                db.session.commit()
                response = make_response(
                    pet.to_dict(), 
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

if __name__ == '__main__':
    app.run(port=5555, debug=True)