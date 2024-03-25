import { useState, useEffect } from "react";

import {
    AccordionTitle,
    AccordionContent,
    Icon,
    Segment,
    Dropdown
  } from 'semantic-ui-react'
import PetInfo from "./PetInfo";
import PetForm from "./PetForm";

function Pet({ pet }) {
    const [isActive, setIsActive] = useState(false);
    const [editMode, setEditMode] = useState(false)

    const assigmentOptions = [
        {
            key: 'unassigned',
            text: 'unassigned',
            value: 'unassigned',
        },
        {
            key: 'CAWS',
            text: 'CAWS',
            value: 'CAWS',
        },
      ]

    return (
        <>
        <AccordionTitle
          active={isActive}
          onClick={() => setIsActive(!isActive)}
        >
          <Icon name='dropdown' />
          {pet.name}
          {/* improvement (stretch): add symbols for flight risk, assignment status, sex */}
        </AccordionTitle>
        <AccordionContent active={isActive} >
            {/* <PetInfo pet={pet} />  */}
            {/* <PetForm pet={pet} /> */}
            {editMode ? <PetForm pet={pet}/> : <PetInfo pet={pet}/> }
            <span>
                Receiving organization: {' '}
                <Dropdown
                inline
                options={assigmentOptions}
                defaultValue={assigmentOptions[0].value}
                />
            </span>
        </AccordionContent>
        </>
    )
}

export default Pet;