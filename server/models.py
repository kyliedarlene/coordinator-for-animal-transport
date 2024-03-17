from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates

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

    # ## validations
    # @validates('name')
    # def validate_name(self, key, value):
    #     # if value == None:
    #     #     raise ValueError("Name cannot be empty")
    #     if not 1 <= len(value) <= 30:
    #         raise ValueError("Name must be between 1 and 30 characters inclusive")
    #     return value
    
    # @validates('size')
    # def validate_sex(self, key, value):
    #     if value.lower() not in {'tiny', 'small', 'medium', 'large', 'huge'}:
    #         raise ValueError("Size must be one of the following: 'tiny', 'small', 'medium', 'large', 'huge'")
    #     return value
    
    # @validates('sex')
    # def validate_sex(self, key, value):
    #     if value.upper() not in {'M', 'F', 'unknown'}:
    #         raise ValueError("Sex must be 'M' or 'F'")
    #     return value
    
    # @validates('flight_risk')
    # def validate_flight_risk(self, key, value):
    #     if value.lower() not in {'low', 'medium', 'high', 'unknown'}:
    #         raise ValueError("Flight risk must be one of the following: 'low', 'medium', 'high', 'unknown")
    #     return value
    
    ## __repr__
    
    def __repr__(self): 
        return f"""
        Pet 
            id: {self.id}
            name: {self.name}
            type: {self.type}
            size: {self.size}
            breed: {self.breed}
            color: {self.color}
            sex: {self.sex}
            flight risk: {self.flight_risk}
            notes: {self.notes}
        """


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

    ## relationships

    ## validations

class TransportPets(db.Model, SerializerMixin):

    __tablename__ = 'transport_pets'

    id = db.Column(db.Integer, primary_key=True)

    ## relationships

    ## validations


class TransportOrganizations(db.Model, SerializerMixin):

    __tablename__ = 'transport_organizations'

    id = db.Column(db.Integer, primary_key=True)
    is_sending = db.Column(db.Boolean)

    ## relationships

    ## validations