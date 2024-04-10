import { useState, useEffect } from "react";

import {
    AccordionTitle,
    AccordionContent,
    Icon,
    Dropdown,
    Button
  } from 'semantic-ui-react'

function Organization({ organization }) {
    const [isActive, setIsActive] = useState(false);

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
                
            </AccordionContent>
        </>
    )
}

export default Organization;