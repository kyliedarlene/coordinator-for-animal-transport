from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property

from config import db, bcrypt

### User ###

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    _password_hash = db.Column(db.String)

    @hybrid_property
    def password_hash(self):
        raise Exception('Password hashes may not be viewed.')
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')
    
    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))
    
    serialize_rules = ('-_password_hash', )

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

    ## foreign key
    receiving_org_id = db.Column(db.Integer, 
                             db.ForeignKey('organizations.id'), 
                             nullable=True)

    ## relationships
    receiving_org = db.relationship('Organization', back_populates='pets')
    transport_pets = db.relationship('TransportPet', back_populates='pet', cascade='all')

    ## serialization rules
    serialize_rules = ('-receiving_org.pets', '-transport_pets.pet',)

    ## association proxy
    transports = association_proxy('transport_pets', 'transport',
                                   creator=lambda transport_obj: TransportPet(transport=transport_obj))

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
    def validate_size(self, key, value):
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
            type: {self.species}
            size: {self.size}
            breed: {self.breed}
            color: {self.color}
            sex: {self.sex}
            flight risk: {self.flight_risk}
            notes: {self.notes}
            receiving organization: {self.receiving_org}
        """

### Organization ###

class Organization(db.Model, SerializerMixin):

    __tablename__ = 'organizations'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    city = db.Column(db.String)
    # add later: additional address fields

    ## relationships
    pets = db.relationship('Pet', back_populates='receiving_org')
    transport_organizations = db.relationship('TransportOrganization', 
                                   back_populates='organization')

    ## serialization rules
    serialize_rules = ('-pets', '-transport_organizations',)

    ## association proxy
    transports = association_proxy('transport_organizations', 'transport',
                                   creator=lambda transport_obj: TransportOrganization(transport=transport_obj))

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
    transport_organizations = db.relationship('TransportOrganization', 
                                              back_populates='transport')

    ## association proxies
    pets = association_proxy('transport_pets', 'pet',
                             creator=lambda pet_obj: TransportPet(pet=pet_obj))
    organizations = association_proxy('transport_organizations', 'organization',
                             creator=lambda org_obj: TransportPet(organization=org_obj))

    ## serialization rules
    serialize_rules = ('-transport_pets.transport', 
                       '-transport_organizations.transport',
                       'organizations',
                       '-organizations.transport_organizations',
                       'pets',
                       '-pets.transport_pets',)
    
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

    ## foreign keys
    transport_id = db.Column(db.Integer, 
                             db.ForeignKey('transports.id'), 
                             nullable=False)
    pet_id = db.Column(db.Integer, 
                             db.ForeignKey('pets.id'), 
                             nullable=False)
 
    ## relationships
    transport = db.relationship('Transport', back_populates='transport_pets')
    pet = db.relationship('Pet', back_populates='transport_pets')
    # receiving_org = db.relationship('Organization', back_populates='transport_pets')

    ## serialization rules
    # serialize_rules = ('-transport.transport_pets',
    #                    '-pet.transport_pets',
    #                    '-receiving_org.transport_pets',)
    serialize_rules = ('-transport.transport_pets',
                       '-pet.transport_pets',)

    ## validations

### TransportOrganization ###

class TransportOrganization(db.Model, SerializerMixin):

    __tablename__ = 'transport_organizations'

    id = db.Column(db.Integer, primary_key=True)
    is_receiving = db.Column(db.Boolean, default=True)
    
    ## foreign keys
    transport_id = db.Column(db.Integer, 
                             db.ForeignKey('transports.id'), 
                             nullable=False)
    organization_id = db.Column(db.Integer, 
                             db.ForeignKey('organizations.id'), 
                             nullable=False)

    ## relationships
    transport = db.relationship('Transport', 
                                back_populates='transport_organizations')
    organization = db.relationship('Organization', 
                                   back_populates='transport_organizations')

    ## serialization rules
    serialize_rules = ('-transport.transport_organizations',
                       '-organization.transport_organizations',)

    ## validations