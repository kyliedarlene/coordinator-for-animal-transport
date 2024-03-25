import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";

function TransportList() {
    const [transports, setTransports] = useState([])
    
    useEffect(() => {
        fetch('/transports')
            .then(r => r.json())
            .then(transports => setTransports(transports))
    }, []);

    return (
        <>
        <h3>Transports</h3>
        {transports.map((transport) => (
            <Link key={transport.id} to={`/transport/${transport.id}`}>
                {transport.title}
            </Link>
        ))}
        </>
    )
}

export default TransportList;