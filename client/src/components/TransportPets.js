import { useState } from "react";

import { Accordion, AccordionTitle, AccordionContent, Icon } from 'semantic-ui-react'

import Pet from "./Pet";
import PetForm from './PetForm';

function TransportPets({ pets }) {
    const [isActive, setIsActive] = useState(false);
    
    function handleAddPet(id, formData) {
        fetch('/pets', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then((newPet) => console.log(newPet))
    }
    
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