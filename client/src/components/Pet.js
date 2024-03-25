import { useState, useEffect } from "react";

import {
    AccordionTitle,
    AccordionContent,
    Icon,
    Dropdown
  } from 'semantic-ui-react'
import PetInfo from "./PetInfo";
import PetForm from "./PetForm";

function Pet({ id }) {
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
          {/* improvement (stretch): add symbols for flight risk, assignment status, sex, etc. */}
        </AccordionTitle>
        <AccordionContent active={isActive} >
            {editMode ? 
                <PetForm pet={pet} handleUpdatePet={handleUpdatePet}/> : 
                <PetInfo pet={pet} handleEditClick={()=> setEditMode(!editMode)} /> 
            }
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