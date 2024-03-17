from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!

class Pet(db.Model, SerializerMixin):
    __tablename__ = 'pets'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    type = db.Column(db.String)
    size = db.Column(db.String)
    breed = db.Column(db.String)
    color = db.Column(db.String)
    sex = db.Column(db.String)
    flight_risk = db.Column(db.String)
    notes = db.Column(db.String)

    ## relationships

    ## validations

class Organization(db.Model, SerializerMixin):

    __tablename__ = 'organizations'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    city = db.Column(db.String)
    # add additional address fields

    ##relationships

    ## validations

class Transport(db.Model, SerializerMixin):

    __tablename__ = 'transports'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    date = db.Column(db.String) # change to datetime ?

    ##relationships

    ## validations