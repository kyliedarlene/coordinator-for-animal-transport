import { Accordion, AccordionTitle, Icon } from 'semantic-ui-react'

import Pet from "./Pet";

function TransportPets({ pets }) {
    console.log(pets)
    
    return (
        <>
        <h3>Dogs</h3>
        <Accordion styled >
            {pets.map((pet) => (
                <Pet key={pet.id} pet={pet} />
            ))}
            <AccordionTitle
            //   onClick={() => setIsActive(!isActive)}
            >
            <Icon name='add' />
            {"Add Pet"}
            </AccordionTitle>
        </Accordion>
        </>
    )
}

export default TransportPets;