import Pet from "./Pet";

function TransportPets({ pets }) {
    console.log(pets)
    
    return (
        <>
        <h3>Dogs</h3>
        {pets.map((pet) => (
            <Pet key={pet.id} pet={pet} />
        ))}
        </>
    )
}

export default TransportPets;