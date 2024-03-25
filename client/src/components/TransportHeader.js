import { Header } from 'semantic-ui-react'

function TransportHeader({ transport, organizations }) {
    return (
        <>
        <Header as='h2'>{transport.title}</Header>
        <p>Date: {transport.date}</p>
        <p>Relocating from: </p>
        {/* add fetch for sending orgs */}
        {/* stretch: make it possible to add sending orgs */}
        </>
    )
}

export default TransportHeader;