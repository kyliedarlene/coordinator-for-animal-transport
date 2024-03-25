import Pet from "./Pet";

function TransportPets({ pets }) {
    console.log(pets)
    
    return (
        <>
        <h3>Dogs</h3>
        <Pet />
        </>
    )
}

export default TransportPets;