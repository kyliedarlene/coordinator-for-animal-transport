import { useState, useEffect } from "react";

import {
    AccordionTitle,
    AccordionContent,
    Icon,
    Segment,
    Dropdown
  } from 'semantic-ui-react'

function Pet({ pet }) {
    const [isActive, setIsActive] = useState(false);

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
            <Segment>
                <h5>Pet Info</h5>
                <p>species: {pet.species}</p>
                <p>size: {pet.size}</p>
                <p>sex: {pet.sex}</p>
                <p>breed: {pet.breed}</p>
                <p>color: {pet.color}</p>
                <p>flight risk: {pet.flight_risk}</p>
                <p>notes: {pet.notes}</p>
            </Segment>
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