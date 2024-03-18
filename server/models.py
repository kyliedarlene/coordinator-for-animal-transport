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
    transport_pets = db.relationship('TransportPet', back_populates='pet')

    ## serialization rules
    serialize_rules = ('-transport_pets.pet',)

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
    transport_pets = db.relationship('TransportPet', back_populates='receiving_org')

    ## serialization rules
    serialize_rules = ('-transport_pets.receiving_org',)

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
    transport_pets = db.relationship('TransportPet', back_populates='transport')

    ## serialization rules
    serialize_rules = ('-transport_pets.transport',)

    ## association proxies
    pets = association_proxy('transport_pets', 'pet',
                             creator=lambda pet_obj: TransportPet(pet=pet_obj))
    # organizations = association_proxy('transport_organizations', 'organization',
    #                          creator=lambda org_obj: TransportPet(organization=org_obj))

    ## validations

    ## __repr__

    def __repr__(self): 
        return f"""
        Transport 
            id: {self.id}
            title: {self.title}
            date: {self.date}
        """

### TransportPet ###

class TransportPet(db.Model, SerializerMixin):

    __tablename__ = 'transport_pets'

    id = db.Column(db.Integer, primary_key=True)
    transport_id = db.Column(db.Integer, 
                             db.ForeignKey('transports.id'), 
                             nullable=False)
    pet_id = db.Column(db.Integer, 
                             db.ForeignKey('pets.id'), 
                             nullable=False)
    receiving_org_id = db.Column(db.Integer, 
                             db.ForeignKey('organizations.id'), 
                             nullable=True)
 
    # relationships
    transport = db.relationship('Transport', back_populates='transport_pets')
    pet = db.relationship('Pet', back_populates='transport_pets')
    receiving_org = db.relationship('Organization', back_populates='transport_pets')

    ## serialization rules
    serialize_rules = ('-transport.transport_pets',
                       '-pet.transport_pets',
                       '-receiving_org.transport_pets',)

    ## validations

### TransportOrganization ###

class TransportOrganization(db.Model, SerializerMixin):

    __tablename__ = 'transport_organizations'

    id = db.Column(db.Integer, primary_key=True)
    is_receiving = db.Column(db.Boolean, default=True)
    transport_id = db.Column(db.Integer, 
                             db.ForeignKey('transports.id'), 
                             nullable=False)
    organization_id = db.Column(db.Integer, 
                             db.ForeignKey('organizations.id'), 
                             nullable=False)

    ## relationships

    ## validations