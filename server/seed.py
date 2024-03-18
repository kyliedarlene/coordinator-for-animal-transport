#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
# from faker import Faker

# Local imports
from app import app
from models import *

if __name__ == '__main__':
    # fake = Faker()
    with app.app_context():
        print("Starting seed...")

        # delete db data
        Transport.query.delete()
        Pet.query.delete()
        Organization.query.delete()
        Transport.query.delete()
        TransportPet.query.delete()
        TransportOrganization.query.delete()

        print("db data deleted")

        ### pets ###

        new_pets = [
            Pet(
                name = "Panda",
                species = "dog",
                size = "medium",
                breed = "heeler",
                color = "tri",
                sex = "F",
                flight_risk = "low",
                notes = "seems to have a paw injury"
            ),
            Pet(
                name = "Scout",
                species = "dog",
                size = "medium",
                breed = "heeler",
                color = "red",
                sex = "F",
                flight_risk = "low",
            ),
            Pet(
                name = "Ruby",
                species = "dog",
                size = "small",
                breed = "pittie mix",
                color = "red & white",
                sex = "F",
                flight_risk = "medium",
                notes = "extremely agile, escape artist"
            ),
            Pet(
                name = "Bats",
                species = "dog",
                size = "tiny",
                breed = "chihuahua",
                color = "black",
                sex = "F",
            ),
            Pet(
                name = "Montana",
                species = "dog",
                size = "medium",
                breed = "heeler",
                color = "tri",
                sex = "M",
                notes = "anxious"
            ),
            Pet(
                name = "Willow",
                species = "dog",
                size = "large",
                breed = "border collie",
                color = "b&w",
                sex = "F"
            ),
            Pet(
                name = "Indy",
                species = "dog",
                size = "small",
                breed = "heeler",
                color = "red",
                sex = "F"
            ),
            Pet(
                name = "Sen",
                species = "dog",
                size = "medium",
                breed = "husky x",
                color = "grey",
                sex = "F",
                flight_risk = "high",
                notes = "very scared"
            ),
            Pet(
                name = "Beck",
                species = "dog",
                size = "medium",
                breed = "heeler",
                color = "tri",
                sex = "M",
            ),
            Pet(
                name = "Bowie",
                species = "dog",
                size = "medium",
                breed = "heeler",
                color = "black & white",
                sex = "F"
            ),
            Pet(
                name = "Nova",
                species = "dog",
                size = "small",
                breed = "kelpie x",
                color = "tri",
                sex = "F"
            ),
            Pet(
                name = "Shae",
                species = "dog",
                size = "small",
                breed = "lab x whippet",
                color = "blonde",
                sex = "F",
                flight_risk = "medium",
                notes = "timid"
            ),
            Pet(
                name = "Rocket",
                species = "dog",
                size = "medium",
                breed = "heeler",
                color = "tri",
                sex = "M",
            ),
            Pet(
                name = "Dexter",
                species = "dog",
                size = "large",
                breed = "pitbull x",
                color = "grey",
                sex = "M",
                notes = "iffy with other dogs, escape artist",
                flight_risk = "medium"
            ),
            Pet(
                name = "Toast",
                species = "cat",
                size = "tiny",
                breed = "siamese x",
                sex = "M",
                flight_risk = "high",
                notes = "easily spooked"
            ),
            Pet(
                name = "Maverick",
                species = "cat",
                size = "tiny",
                sex = "M"
            ),
            Pet(
                name = "Bruce",
                species = "cat",
                size = "small",
                color = "black",
                sex = "M"
            ),
            Pet(
                name = "Beansie",
                species = "cat",
                size = "tiny",
                color = "grey & white",
                sex = "F",
                flight_risk = "high",
                notes = "easily spooked"
            ),
            Pet(
                name = "Ziggy",
                species = "iguana",
                size = "small",
                sex = "M",
                flight_risk = "low"
            ),
            Pet(
                name = "Lanny",
                species = "bunny",
                size = "tiny",
                sex = "F"            
            ),
            Pet(
                name = "Owlbear Cub",
                species = "dog",
                size = "XL",
                breed = "Saint Bernard",
                sex = "F",
                flight_risk = "low"
            ),
            Pet(
                name = "Kiskar",
                species = "dog",
                size = "large",
                breed = "border collie",
                color = "blue merle",
                sex = "F",
                notes = "bonded with Twig"
            ),
            Pet(
                name = "Twig",
                species = "dog",
                size = "tiny",
                breed = "chihuahua",
                color = "brown",
                sex = "F",
                notes = "bonded with Kiskar"
            )
        ]

        db.session.add_all(new_pets)
        db.session.commit()
        print("seeded pets")

        ### organizations ###

        new_orgs = [
            Organization(
                name = "CAWS",
                city = "Salt Lake City"
            ),
            Organization(
                name = "Rescue Rovers",
                city = "Salt Lake City"
            ),
            Organization(
                name = "C.A.R.E.",
                city = "Provo"
            )
        ]

        db.session.add_all(new_orgs)
        db.session.commit()
        print("seeded organizations")

        ### transports ###

        new_transports = [
            Transport(
                title = "Nov UT Transport",
                date = "11/02/23"
            ),
            Transport(
                title = "April UT Transport",
                date = "04/10/24"
            )
        ]

        db.session.add_all(new_transports)
        db.session.commit()
        print("seeded transports")

        ### transport_pets ###

        new_transport_pets = [
            TransportPet(
                transport_id = 1,
                pet_id = 22,
                receiving_org_id = 1
            ),
            TransportPet(
                transport_id = 1,
                pet_id = 23,
                receiving_org_id = 1
            ),
            TransportPet(
                transport_id = 2,
                pet_id = 1,
                receiving_org_id = 2
            ),
            TransportPet(
                transport_id = 2,
                pet_id = 2,
                receiving_org_id = 3
            )
        ]

        db.session.add_all(new_transport_pets)
        db.session.commit()
        print("seeded transport pets")

        ### transport_organizations ###

        new_transport_organizations = [
            TransportOrganization(
                transport_id = 1,
                organization_id = 1,
            ),
            TransportOrganization(
                transport_id = 1,
                organization_id = 2,
            ),
            TransportOrganization(
                transport_id = 2,
                organization_id = 2,
            ),
            TransportOrganization(
                transport_id = 2,
                organization_id = 3,
            )
        ]

        db.session.add_all(new_transport_organizations)
        db.session.commit()
        print("seeded transport organizations")