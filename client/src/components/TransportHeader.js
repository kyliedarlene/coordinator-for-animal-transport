import { Header } from 'semantic-ui-react'

function TransportHeader({ transport, organizations }) {
    return (
        <>
        <Header as='h2'>{transport.title}</Header>
        <p>Date: {transport.date}</p>
        <p>Relocating from: </p>
        </>
    )
}

export default TransportHeader;