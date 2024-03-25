import React, { useState } from "react";
import {
    FormTextArea,
    FormSelect,
    FormRadio,
    FormInput,
    FormGroup,
    FormButton,
    Form,
    FormField
  } from 'semantic-ui-react'

function PetForm({ pet }) {
    const [name, setName] = useState('')
    const [species, setSpecies] = useState('')
    const [size, setSize] = useState('')
    const [breed, setBreed] = useState('')
    const [color, setColor] = useState('')
    const [sex, setSex] = useState('')
    const [flightRisk, setFlightRisk] = useState('')

    // function handleUpdatePet(id){
    //     fetch(`pets/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             color: color,
    //         })
    //     })
    //         .then(r => r.json())
    //         .then((updatedPet) => console.log(updatedPet))
    // }
    
    // function handleSubmit(e){
    //     e.preventDefault();
    //     console.log(color);
    //     handleUpdatePet(pet.id)
    //     setColor('')
    // }
    
    const speciesOptions = [
        { text: 'dog', value: 'dog' },
        { text: 'cat', value: 'cat' },
        { text: 'bunny', value: 'bunny' },
        { text: 'bird', value: 'bird' },
        { text: 'snake', value: 'snake' },
        { text: 'lizard', value: 'lizard' },
        { text: 'other', value: 'other' },
      ]

      const flightRiskOptions = [
        { text: 'unknown', value: 'unspecified' },
        { text: 'high', value: 'high' },
        { text: 'medium', value: 'medium' },
        { text: 'low', value: 'low' },
      ]

    return (
        <Form >
            <FormField id='name' required >
                <label>Name</label>
                <input placeholder={pet.name} />
            </FormField>
            <FormSelect id='species' required
                fluid
                label='Species'
                options={speciesOptions}
                placeholder={pet.species}
            />
            <FormGroup id='size' inline placeholder={pet.size} >
                <label>Size</label>
                <FormRadio
                    label='tiny'
                    value='tiny'
                    checked={pet.size === 'tiny'}
                    // onChange={this.handleChange}
                />
                <FormRadio
                    label='small'
                    value='small'
                    checked={pet.size === 'small'}
                    // onChange={this.handleChange}
                />
                <FormRadio
                    label='medium'
                    value='medium'
                    checked={pet.size === 'medium'}
                    // onChange={this.handleChange}
                />
                <FormRadio
                    label='large'
                    value='large'
                    checked={pet.size === 'large'}
                    // onChange={this.handleChange}
                />
                <FormRadio
                    label='huge'
                    value='huge'
                    checked={pet.size === 'huge'}
                    // onChange={this.handleChange}
                />
            </FormGroup>
            <FormGroup id='sex' inline placeholder={pet.sex} >
            <label>Sex</label>
            <FormRadio
                label='male'
                value='M'
                checked={pet.sex === 'M'}
                // onChange={this.handleChange}
            />
            <FormRadio
                label='female'
                value='F'
                checked={pet.sex === 'F'}
                // onChange={this.handleChange}
            />
            <FormRadio
                label='unknown'
                value='unspecified'
                checked={pet.sex === 'unspecified'}
                // onChange={this.handleChange}
            />
            </FormGroup>
        <FormGroup widths='equal'>
          <FormInput id='breed' fluid label='Breed' placeholder={pet.breed} />
          <FormInput 
            id='color' 
            fluid 
            label='Color'
            value={color}
            placeholder={pet.color}
            onChange={(e) => {setColor(e.target.value)}}
          />
        </FormGroup>
        <FormSelect id='flight-risk'
                fluid
                label='Flight Risk'
                options={flightRiskOptions}
                placeholder={pet.flight_risk === 'unspecified' ? 'unknown' : pet.flight_risk}
            />
        <FormTextArea id='notes' label='Notes' placeholder={pet.notes} />
        <FormButton>Submit</FormButton>
      </Form>
    )
}

export default PetForm;