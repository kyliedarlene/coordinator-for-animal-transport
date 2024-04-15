import { Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function TransportHeader({ transport, organizations }) {
    return (
        <>
        <Header as='h2'>{transport.title}</Header>
        <p>Date: {transport.date}</p>
        <p>Relocating from: Mexico City Animal Shelter </p>
        <p><Link to={'/dashboard/transports'}>{'<<Back to Dashboard'}</Link></p>
        {/* add fetch for sending orgs */}
        </>
    )
}

export default TransportHeader;