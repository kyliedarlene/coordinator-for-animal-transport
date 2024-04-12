import { useState } from "react";

import { AccordionTitle, AccordionContent, Icon } from 'semantic-ui-react'

import PetForm from "./PetForm";

function NewPet({ handleAddPet, transport }) {
    const [isActive, setIsActive] = useState(false);

    function handleUpdatePet(id, formData, transport) {
        handleAddPet(id, formData, transport)
        setIsActive(!isActive)
    }

    return (
        <>
            <AccordionTitle
               onClick={() => setIsActive(!isActive)}
            >
                <Icon name='add' />
                {"Add Pet"}
            </AccordionTitle>
            <AccordionContent active={isActive} >
                <PetForm handleUpdatePet={handleUpdatePet} transport={transport} />
            </AccordionContent>
        </>
    )
}

export default NewPet;