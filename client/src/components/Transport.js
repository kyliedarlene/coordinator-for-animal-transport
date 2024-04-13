import { useState, useEffect } from "react";

import TransportOrganizations from "./TransportOrganizations";
import TransportPets from "./TransportPets";
import TransportHeader from "./TransportHeader";

function Transport({ id }) {
    const [transport, setTransport] = useState({})
    const [organizations, setOrganizations] = useState([])
    const [pets, setPets] = useState([])

    useEffect(() => {
        fetch(`/transports/${id}`)
            .then(r => r.json())
            .then(transport => {
                setTransport(transport)
                setPets(transport.pets)
                setOrganizations(transport.organizations)
            })
    }, []);

    function handleAddPet(transport, formData) {
        fetch('/pets', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then((newPet) => {
                // update state
                console.log(newPet)
                const newPets = [...pets, newPet]
                setPets(newPets)

                // add TransportPet
                console.log(transport)
                fetch('/transport_pets', {
                    method: 'POST', 
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        'pet_id': newPet.id,
                        'transport_id': transport.id
                    })
                })
            })
    }

    function handleDeletePet(id) {
        fetch(`/pets/${id}`, {
            method: 'DELETE',
        })
            .then((r) => r.json())
            .then((r) => {
                const deletedPet = pets.find((pet) => pet.id === id)
                const index = pets.indexOf(deletedPet)
                const newPets = pets.toSpliced(index, 1)
                setPets(newPets)
            })
    }

    function handleAssignReceiving(petId, orgId) {
        fetch(`/pets/${petId}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                receiving_org_id: orgId
            })
        })
            .then((r) => r.json())
            .then((updatedPet) => {
                const pet = pets.find((pet) => pet.id === updatedPet.id)
                const index = pets.indexOf(pet)
                const newPets = pets.toSpliced(index, 1, updatedPet)
                setPets(newPets)
            })
      }
    
    return (
        <>
        <TransportHeader transport={transport} sendingOrgs={organizations} />
        <TransportPets 
            transport={transport}
            pets={pets} 
            handleAddPet={handleAddPet} 
            handleDeletePet={handleDeletePet} 
            handleAssignReceiving={handleAssignReceiving}
        />
        <TransportOrganizations organizations={organizations} pets={pets} />
        </>
    )
}

export default Transport;