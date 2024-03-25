import {
    AccordionTitle,
    AccordionContent,
    Icon,
    Segment,
    Dropdown
  } from 'semantic-ui-react'

function PetInfo({ pet }) {
    return (
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
    )
}

export default PetInfo;