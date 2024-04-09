import { useState } from "react";

import { AccordionTitle, AccordionContent, Icon } from 'semantic-ui-react'

import PetForm from "./PetForm";

function NewPet({ handleAddPet }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <AccordionTitle
               onClick={() => setIsActive(!isActive)}
            >
                <Icon name='add' />
                {"Add Pet"}
            </AccordionTitle>
            <AccordionContent active={isActive} >
                <PetForm handleUpdatePet={handleAddPet} />
            </AccordionContent>
        </>
    )
}

export default NewPet;