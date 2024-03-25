import { useState, useEffect } from "react";

import TransportOrganizations from "./TranportOrganizations";
import TransportDogs from "./TransportDogs";
import TransportHeader from "./TransportHeader";

function Transport({ id }) {
    const [transport, setTransport] = useState({})
    const [organizations, setOrganizations] = useState([])

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
    
    return (
        <>
        <TransportHeader transport={transport} sendingOrgs={organizations} />
        <TransportDogs />
        <TransportOrganizations />
        </>
    )
}

export default Transport;