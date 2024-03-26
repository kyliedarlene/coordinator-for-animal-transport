import React, { useState } from "react";
import {
    FormTextArea,
    FormSelect,
    FormRadio,
    FormInput,
    FormGroup,
    FormButton,
    Form,
    FormField,
    Message
  } from 'semantic-ui-react'

function PetForm({ 
    pet = {
        name: '',
        species: '',
        size: '',
        breed: 'unspecified',
        color: 'unspecified',
        sex: 'unspecified',
        flight_risk: 'unknown',
        notes: ''
    }, 
    handleUpdatePet 
}) {
    const [name, setName] = useState(pet.name)
    const [species, setSpecies] = useState(pet.species)
    const [size, setSize] = useState(pet.size)
    const [sex, setSex] = useState(pet.sex)
    const [breed, setBreed] = useState(pet.breed)
    const [color, setColor] = useState(pet.color)
    const [flightRisk, setFlightRisk] = useState(pet.flight_risk)
    const [notes, setNotes] = useState(pet.notes)

    // const [error, setError] = useState('')
    
    function handleSubmit(e) {
        e.preventDefault();
        if (name && species && size) {
            const formData = {
                name: name,
                species: species,
                size: size,
                breed: breed,
                color: color,
                sex: sex,
                // flight_risk: flightRisk,
                notes: notes
            }
            handleUpdatePet(pet.id, formData)
        }
        else {
            console.log("error")
            // setError('error')
        }
    }
    
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
        { text: 'unknown', value: 'unknown' },
        { text: 'high', value: 'high' },
        { text: 'medium', value: 'medium' },
        { text: 'low', value: 'low' },
      ]

    return (
        <Form onSubmit={handleSubmit} >

            {/* name */}
            <FormField id='name' required>
                <label>Name</label>
                <input 
                    placeholder='Name'
                    value={name} 
                    onChange={(e) => {setName(e.target.value)}}
                />
            </FormField>

            {/* species */}
            <FormSelect 
                id='species' 
                required
                fluid
                label='Species'
                options={speciesOptions}
                placeholder={species ? species : 'Select Species'}
                onChange={(e, {value}) => {setSpecies(value)}} 
            />

            {/* size */}
            <FormGroup id='size' inline placeholder={pet.size} >
                <label>Size</label>
                <FormRadio
                    label='tiny'
                    value='tiny'
                    checked={size === 'tiny'}
                    onChange={(e, {value}) => setSize(value)}
                />
                <FormRadio
                    label='small'
                    value='small'
                    checked={size === 'small'}
                    onChange={(e, {value}) => setSize(value)}
                />
                <FormRadio
                    label='medium'
                    value='medium'
                    checked={size === 'medium'}
                    onChange={(e, {value}) => setSize(value)}
                />
                <FormRadio
                    label='large'
                    value='large'
                    checked={size === 'large'}
                    onChange={(e, {value}) => setSize(value)}
                />
                <FormRadio
                    label='huge'
                    value='huge'
                    checked={size === 'huge'}
                    onChange={(e, {value}) => setSize(value)}
                />
            </FormGroup>

            {/* sex */}
            <FormGroup id='sex' inline placeholder={pet.sex} >
            <label>Sex</label>
            <FormRadio
                label='male'
                value='M'
                checked={sex === 'M'}
                onChange={(e, {value}) => setSex(value)}
            />
            <FormRadio
                label='female'
                value='F'
                checked={sex === 'F'}
                onChange={(e, {value}) => setSex(value)}
            />
            <FormRadio
                label='unknown'
                value='unspecified'
                checked={sex === 'unspecified'}
                onChange={(e, {value}) => setSex(value)}
            />
            </FormGroup>

            {/* breed and color */}
            <FormGroup widths='equal'>
                {/* breed */}
                <FormInput 
                    id='breed' 
                    fluid 
                    label='Breed' 
                    value={breed}
                    placeholder={breed ? breed : 'Add Breed'} 
                    onChange={(e) => {setBreed(e.target.value)}}
                />
                {/* color */}
                <FormInput 
                    id='color' 
                    fluid 
                    label='Color'
                    value={color}
                    placeholder={color ? color : 'Add Color'}
                    onChange={(e) => {setColor(e.target.value)}}
                />
            </FormGroup>

            {/* flight risk */}
            <FormSelect 
                id='flight-risk'
                fluid
                label='Flight Risk'
                options={flightRiskOptions}
                placeholder={flightRisk === 'unspecified' ? 'Select Flight Risk' : flightRisk}
                onChange={(e, {value}) => {setFlightRisk(value)}}
            />
            
            {/* notes */}
            <FormTextArea 
                id='notes' 
                label='Notes'
                value={notes} 
                placeholder={notes ? notes : 'Add Notes'} 
                onChange={(e) => {setNotes(e.target.value)}}
            />

            {/* <Message
                error
                header='Error'
                content='Please complete required fields.'
            /> */}
            <FormButton>Submit</FormButton>
      </Form>
    )
}

export default PetForm;