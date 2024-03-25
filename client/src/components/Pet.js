import { useState, useEffect } from "react";

import {
    AccordionTitle,
    AccordionContent,
    Icon
  } from 'semantic-ui-react'

function Pet({ pet }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
        <AccordionTitle
          active={isActive}
          onClick={() => setIsActive(!isActive)}
        >
          <Icon name='dropdown' />
          {pet.name}
        </AccordionTitle>
        <AccordionContent active={isActive} >
          <p>species: {pet.species}</p>
          <p>size: {pet.size}</p>
          <p>sex: {pet.sex}</p>
          <p>breed: {pet.breed}</p>
          <p>color: {pet.color}</p>
          <p>flight risk: {pet.flight_risk}</p>
          <p>notes: {pet.notes}</p>
        </AccordionContent>
        </>
    )
}

export default Pet;