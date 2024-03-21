import TransportOrganizations from "./TranportOrganizations";
import TransportDogs from "./TransportDogs";
import TransportHeader from "./TransportHeader";

function Transport() {
    return (
        <>
        <h2>Transport</h2>
        <TransportHeader />
        <TransportDogs />
        <TransportOrganizations />
        </>
    )
}

export default Transport;