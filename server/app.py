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

##### PETS #####

@app.route('/pets')
def pets():
    pets = [pet.to_dict() for pet in Pet.query.all()]
    response = make_response(
        pets,
        200
    )
    return response

@app.route('/pets/<int:id>', methods = ['GET', 'DELETE'])
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
        elif request.method == 'DELETE':
            db.session.delete(pet)
            db.session.commit()
            response = make_response(
                { 
                    "delete_successful": True, 
                    "message": "Review deleted." 
                },
                200
            )

    return response

if __name__ == '__main__':
    app.run(port=5555, debug=True)