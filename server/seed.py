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
        # Seed code goes here!
        Transport.query.delete()
        Pet.query.delete()
        Organization.query.delete()

        print("db data deleted")

        new_pets = [
            Pet(
                name = "Panda",
                type = "dog",
                size = "medium",
                breed = "heeler",
                color = "tri",
                sex = "F",
                flight_risk = "low",
                notes = "seems to have a paw injury"
            ),
            Pet(
                name = "Scout",
                type = "dog",
                size = "medium",
                breed = "heeler",
                color = "red",
                sex = "F",
                flight_risk = "low",
            ),
            Pet(
                name = "Ruby",
                type = "dog",
                size = "small",
                breed = "pittie mix",
                color = "red & white",
                sex = "F",
                flight_risk = "medium",
                notes = "extremely agile, escape artist"
            ),
            Pet(
                name = "Bats",
                type = "dog",
                size = "tiny",
                breed = "chihuahua",
                color = "black",
                sex = "F",
            ),
            Pet(
                name = "Montana",
                type = "dog",
                size = "medium",
                breed = "heeler",
                color = "tri",
                sex = "M",
                notes = "anxious"
            ),
            Pet(
                name = "Willow",
                type = "dog",
                size = "large",
                breed = "border collie",
                color = "b&w",
                sex = "F"
            ),
            Pet(
                name = "Indy",
                type = "dog",
                size = "small",
                breed = "heeler",
                color = "red",
                sex = "F"
            ),
            Pet(
                name = "Sen",
                type = "dog",
                size = "medium",
                breed = "husky x",
                color = "grey",
                sex = "F",
                flight_risk = "high",
                notes = "very scared"
            ),
            Pet(
                name = "Beck",
                type = "dog",
                size = "medium",
                breed = "heeler",
                color = "tri",
                sex = "M",
            ),
            Pet(
                name = "Bowie",
                type = "dog",
                size = "medium",
                breed = "heeler",
                color = "black & white",
                sex = "F"
            ),
            Pet(
                name = "Nova",
                type = "dog",
                size = "small",
                breed = "kelpie x",
                color = "tri",
                sex = "F"
            ),
            Pet(
                name = "Shae",
                type = "dog",
                size = "small",
                breed = "lab x whippet",
                color = "blonde",
                sex = "F",
                flight_risk = "medium",
                notes = "timid"
            ),
            Pet(
                name = "Rocket",
                type = "dog",
                size = "medium",
                breed = "heeler",
                color = "tri",
                sex = "M",
            ),
            Pet(
                name = "Dexter",
                type = "dog",
                size = "large",
                breed = "pitbull x",
                color = "grey",
                sex = "M",
                notes = "iffy with other dogs, escape artist",
                flight_risk = "medium"
            ),
            Pet(
                name = "Toast",
                type = "cat",
                size = "tiny",
                breed = "siamese x",
                sex = "M",
                flight_risk = "high",
                notes = "easily spooked"
            ),
            Pet(
                name = "Maverick",
                type = "cat",
                size = "tiny",
                sex = "M"
            ),
            Pet(
                name = "Bruce",
                type = "cat",
                size = "small",
                color = "black",
                sex = "M"
            ),
            Pet(
                name = "Beansie",
                type = "cat",
                size = "tiny",
                color = "grey & white",
                sex = "F",
                flight_risk = "high",
                notes = "easily spooked"
            ),
            Pet(
                name = "Ziggy",
                type = "iguana",
                size = "small",
                sex = "M",
                flight_risk = "low"
            ),
            Pet(
                name = "Lanny",
                type = "bunny",
                size = "tiny",
                sex = "F"            
            ),
            Pet(
                name = "Owlbear Cub",
                type = "dog",
                size = "XL",
                breed = "Saint Bernard",
                sex = "F",
                flight_risk = "low"
            ),
            Pet(
                name = "Kiskar",
                type = "dog",
                size = "large",
                breed = "border collie",
                color = "blue merle",
                sex = "F",
                notes = "bonded with Twig"
            ),
            Pet(
                name = "Twig",
                type = "dog",
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