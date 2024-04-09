import { Accordion, AccordionTitle, AccordionContent, Icon } from 'semantic-ui-react'

import Pet from "./Pet";
import PetForm from './PetForm';
import NewPet from './NewPet';

function TransportPets({ pets, handleAddPet }) {
    return (
        <>
        <h3>Pets</h3>
        <Accordion styled >
            {/* TransportPets */}
            {pets.map((pet) => (
                <Pet key={pet.id} id={pet.id} />
            ))}

            {/* New Pet */}
            <NewPet handleAddPet={handleAddPet} />

        </Accordion>
        </>
    )
}

export default TransportPets;