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

function Pet({ id, handleDeletePet, handleAssignReceiving, transport }) {
    const [pet, setPet] = useState({});
    const [receivingOrg, setReceivingOrg] = useState({})

    const [isActive, setIsActive] = useState(false);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
      fetch(`/pets/${id}`)
        .then(r => r.json())
        .then(pet => {
          setPet(pet)
          setReceivingOrg(pet.receiving_org)
        })
    }, []);
    
    function handleUpdatePet(id, formData, transport) {
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
    
    // set options for Receiving Organization dropdown
    const assignmentOptions = transport.organizations.map((org) => (
      {
        key: org.name,
        text: org.name,
        value: org.id
      }
    ))

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
                  <PetForm 
                    pet={pet} 
                    handleUpdatePet={handleUpdatePet} 
                    transport={transport} 
                  />
                </>
                : 
                <PetInfo pet={pet} handleEditClick={()=> setEditMode(!editMode)} /> 
            }
            {/* Receiving Organization */}
            <span>
                Destined for: {' '}
                <Dropdown
                  placeholder={receivingOrg ? receivingOrg.name : "Choose Organization"}
                  selection
                  options={assignmentOptions}
                  onChange={(e, { value }) => handleAssignReceiving(pet.id, value)}
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