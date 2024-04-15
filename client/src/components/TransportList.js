import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";

import { List, ListItem } from 'semantic-ui-react'


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
        <List>
            {transports.map((transport) => (
                <ListItem key={transport.id} >
                    <Link to={`/transport/${transport.id}`}>
                        {transport.title}
                    </Link>
                </ListItem>
            ))}
        </List>
        </>
    )
}

export default TransportList;