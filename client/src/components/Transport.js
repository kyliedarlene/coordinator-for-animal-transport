import { useState, useEffect } from "react";

import TransportOrganizations from "./TranportOrganizations";
import TransportDogs from "./TransportDogs";
import TransportHeader from "./TransportHeader";

function Transport({ id }) {
    const [transport, setTransport] = useState({})

    // useEffect(() => {
    //     fetch(`/transports/${id}`)
    //         .then(r => r.json())
    //         .then(transport => console.log(transport))
    // }, []);
    
    return (
        <>
        <h2>Transport {id}</h2>
        <TransportHeader />
        <TransportDogs />
        <TransportOrganizations />
        </>
    )
}

export default Transport;