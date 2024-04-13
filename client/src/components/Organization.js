import { useState, useEffect } from "react";

import {
    AccordionTitle,
    AccordionContent,
    Icon,
    Segment,
    Dropdown,
    Button
  } from 'semantic-ui-react'

function Organization({ organization, pets }) {
    const [isActive, setIsActive] = useState(false);


    console.log(organization)
    console.log(pets)
    const assignedPets = pets.filter((pet) => pet.receiving_org_id === organization.id)
    console.log(assignedPets)
    
    return (
        <>
            <AccordionTitle 
                active={isActive} 
                onClick={() => setIsActive(!isActive)}
            >
                <Icon name='dropdown' />
                {organization.name}
            </AccordionTitle>  
            <AccordionContent active={isActive}>
                <Segment>
                    {assignedPets.map((pet) => pet.name)}
                </Segment>
            </AccordionContent>
        </>
    )
}

export default Organization;