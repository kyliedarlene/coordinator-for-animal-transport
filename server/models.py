from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates

from config import db

### Pet ###

class Pet(db.Model, SerializerMixin):
    __tablename__ = 'pets'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    species = db.Column(db.String, nullable=False)
    size = db.Column(db.String, nullable=False)
    breed = db.Column(db.String, nullable=True, default="unspecified")
    color = db.Column(db.String, nullable=True, default="unspecified")
    sex = db.Column(db.String, nullable=True, default="unspecified")
    flight_risk = db.Column(db.String, nullable=True, default="unspecified")
    notes = db.Column(db.String, nullable=True)

    ## relationships

    ## validations

    # improvement (low priority): combine checker for required fields

    @validates('name')
    def validate_name(self, key, value):
        if not value:
            raise ValueError("Name is required.")
        elif not 1 <= len(value) <= 30:
            raise ValueError("Name must be between 1 and 30 characters.")
        return value
    
    @validates('species')
    def validate_species(self, key, value):
        if not value:
            raise ValueError("Species is required.")
        return value
    
    @validates('size')
    def validate_sex(self, key, value):
        if value.lower() not in {'tiny', 'small', 'medium', 'large', 'huge'}:
            raise ValueError("Size must be one of the following: 'tiny', 'small', 'medium', 'large', 'huge'")
        return value
    
    @validates('sex')
    def validate_sex(self, key, value):
        if value not in {'M', 'F', 'unspecified'}:  # improvement (low-priority): make 'm' and 'f' case-insensitive
            raise ValueError("Sex must be one of the following: 'M', 'F', 'unspecified'")
        return value
    
    @validates('flight_risk')
    def validate_flight_risk(self, key, value):
        if value.lower() not in {'low', 'medium', 'high', 'unknown'}:
            raise ValueError("Flight risk must be one of the following: 'low', 'medium', 'high', 'unknown', 'unspecified'")
        return value
    
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

### Organization ###

class Organization(db.Model, SerializerMixin):

    __tablename__ = 'organizations'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    city = db.Column(db.String)
    # add later: additional address fields

    ## relationships

    ## validations

    ## __repr__

    def __repr__(self): 
        return f"""
        Organization 
            id: {self.id}
            name: {self.name}
            city: {self.city}
        """

### Transport ###

class Transport(db.Model, SerializerMixin):

    __tablename__ = 'transports'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    date = db.Column(db.String) # add later: change to datetime ?

    ## relationships

    ## validations

    ## __repr__

    def __repr__(self): 
        return f"""
        Transport 
            id: {self.id}
            title: {self.title}
            date: {self.date}
        """

### TransportPets ###

class TransportPets(db.Model, SerializerMixin):

    __tablename__ = 'transport_pets'

    id = db.Column(db.Integer, primary_key=True)
    transport_id = db.Column(db.Integer, 
                             db.ForeignKey('transports.id'), 
                             nullable=False)
    pet_id = db.Column(db.Integer, 
                             db.ForeignKey('pets.id'), 
                             nullable=False)
    sending_org_id = db.Column(db.Integer, 
                             db.ForeignKey('organizations.id'), 
                             nullable=False)
    receiving_org_id = db.Column(db.Integer, 
                             db.ForeignKey('organizations.id'), 
                             nullable=True)
 
    ## relationships

    ## validations
    

class TransportOrganizations(db.Model, SerializerMixin):

    __tablename__ = 'transport_organizations'

    id = db.Column(db.Integer, primary_key=True)
    is_sending = db.Column(db.Boolean)

    ## relationships

    ## validations