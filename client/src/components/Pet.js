import { useState, useEffect } from "react";

import {
    AccordionTitle,
    AccordionContent,
    Icon,
    Dropdown,
    Button
  } from 'semantic-ui-react'
import PetInfo from "./PetInfo";
import PetForm from "./PetForm";

function Pet({ id, handleDeletePet }) {
    const [pet, setPet] = useState({});

    const [isActive, setIsActive] = useState(false);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
      fetch(`/pets/${id}`)
        .then(r => r.json())
        .then(pet => setPet(pet))
    }, []);
    
    function handleUpdatePet(id, formData) {
      fetch(`/pets/${id}`, {
          method: 'PATCH',
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(formData)
      })
          .then(r => r.json())
          .then((updatedPet) => {
            console.log(updatedPet)
            setEditMode(!editMode)
            setPet(updatedPet)
          })
  }
    
    const assignmentOptions = [
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
          onClick={() => {
            setIsActive(!isActive)
            setEditMode(false)
          }}
        >
          <Icon name='dropdown' />
          {pet.name}
          {/* improvement (stretch): add symbols for flight risk, assignment status, sex, etc. */}
        </AccordionTitle>
        <AccordionContent active={isActive} >
            {editMode ? 
                <>
                  {/* <Button negative>Delete Pet</Button> */}
                  <PetForm pet={pet} handleUpdatePet={handleUpdatePet}/>
                </>
                : 
                <PetInfo pet={pet} handleEditClick={()=> setEditMode(!editMode)} /> 
            }
            <span>
                Receiving organization: {' '}
                <Dropdown
                inline
                options={assignmentOptions}
                defaultValue={assignmentOptions[0].value}
                />
            </span>
            {/* Delete Pet */}
            <Button 
              floated='right' 
              size='small'
              onClick={() => handleDeletePet(id)}
            >
                Remove {pet.name} from Transport
            </Button>
        </AccordionContent>
        </>
    )
}

export default Pet;