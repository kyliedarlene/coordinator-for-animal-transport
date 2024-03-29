import { useState, useEffect } from "react";

import TransportOrganizations from "./TranportOrganizations";
import TransportPets from "./TransportPets";
import TransportHeader from "./TransportHeader";

function Transport({ id }) {
    const [transport, setTransport] = useState({})
    const [organizations, setOrganizations] = useState([])
    const [pets, setPets] = useState([])

    useEffect(() => {
        fetch(`/transports/${id}`)
            .then(r => r.json())
            .then(transport => setTransport(transport))
    }, []);

    useEffect(() => {
        fetch(`/transports/${id}/organizations`)
            .then(r => r.json())
            .then(orgs => setOrganizations(orgs))
    }, []);

    useEffect(() => {
        fetch(`/transports/${id}/pets`)
            .then(r => r.json())
            .then(pets => setPets(pets))
    }, []);
    
    return (
        <>
        <TransportHeader transport={transport} sendingOrgs={organizations} />
        <TransportPets pets={pets} />
        <TransportOrganizations />
        </>
    )
}

export default Transport;