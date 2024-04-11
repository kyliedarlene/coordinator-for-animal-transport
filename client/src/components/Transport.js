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
                setOrganizations(transport.organizations)
                console.log(transport)
            })
    }, [id]);

    // useEffect(() => {
    //     fetch(`/transports/${id}/organizations`)
    //         .then(r => r.json())
    //         .then(orgs => setOrganizations(orgs))
    // }, []);

    useEffect(() => {
        fetch(`/transports/${id}/pets`)
            .then(r => r.json())
            .then(pets => setPets(pets))
    }, []);

    function handleAddPet(id, formData) {
        fetch('/pets', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then((newPet) => {
                console.log(newPet)
                const newPets = [...pets, newPet]
                setPets(newPets)
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
    
    return (
        <>
        <TransportHeader transport={transport} sendingOrgs={organizations} />
        <TransportPets 
            pets={pets} 
            handleAddPet={handleAddPet} 
            handleDeletePet={handleDeletePet} 
        />
        <TransportOrganizations organizations={organizations} />
        </>
    )
}

export default Transport;