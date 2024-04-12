import { Accordion } from 'semantic-ui-react'

import Pet from "./Pet";
import NewPet from './NewPet';

function TransportPets({ transport, pets, handleAddPet, handleDeletePet }) {
    return (
        <>
        <h3>Pets</h3>
        <Accordion styled >

            {/* TransportPets */}
            {pets.map((pet) => (
                <Pet 
                    key={pet.id} 
                    id={pet.id} 
                    handleDeletePet={handleDeletePet} 
                    transport={transport}
                />
            ))}

            {/* New Pet */}
            <NewPet handleAddPet={handleAddPet} transport={transport} />

        </Accordion>
        </>
    )
}

export default TransportPets;