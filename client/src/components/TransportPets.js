import { Accordion } from 'semantic-ui-react'

import Pet from "./Pet";

function TransportPets({ pets }) {
    console.log(pets)
    
    return (
        <>
        <h3>Dogs</h3>
        <Accordion styled >
            {pets.map((pet) => (
                <Pet key={pet.id} pet={pet} />
            ))}
        </Accordion>
        </>
    )
}

export default TransportPets;