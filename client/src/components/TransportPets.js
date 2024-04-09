import { useState } from "react";

import { Accordion, AccordionTitle, AccordionContent, Icon } from 'semantic-ui-react'

import Pet from "./Pet";
import PetForm from './PetForm';

function TransportPets({ pets, handleAddPet }) {
    const [isActive, setIsActive] = useState(false);
    
    return (
        <>
        <h3>Pets</h3>
        <Accordion styled >
            {/* TransportPets */}
            {pets.map((pet) => (
                <Pet key={pet.id} id={pet.id} />
            ))}

            {/* Add Pet */}
            <AccordionTitle
               onClick={() => setIsActive(!isActive)}
            >
            <Icon name='add' />
            {"Add Pet"}
            </AccordionTitle>
            <AccordionContent active={isActive} >
                <PetForm handleUpdatePet={handleAddPet} />
            </AccordionContent>

        </Accordion>
        </>
    )
}

export default TransportPets;