import { useState, useEffect } from "react";

import {
    AccordionTitle,
    AccordionContent,
    Icon,
    Segment,
    List,
    ListItem
  } from 'semantic-ui-react'

function Organization({ organization, pets }) {
    const [isActive, setIsActive] = useState(false);

    const assignedPets = pets.filter((pet) => pet.receiving_org_id === organization.id)
    
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
                    <List>
                        {assignedPets.map((pet) => <ListItem key={pet.id}>{pet.name}</ListItem>)}
                    </List>
                </Segment>
            </AccordionContent>
        </>
    )
}

export default Organization;