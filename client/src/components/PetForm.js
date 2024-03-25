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
    const speciesOptions = [
        { text: 'dog', value: 'dog' },
        { text: 'cat', value: 'cat' },
        { text: 'bunny', value: 'bunny' },
        { text: 'bird', value: 'bird' },
        { text: 'snake', value: 'snake' },
        { text: 'lizard', value: 'lizard' },
        { text: 'other', value: 'other' },
      ]

    return (
        <Form>
            <FormField id='name' required >
                <label>Name</label>
                <input placeholder={pet.name} />
            </FormField>
            <FormSelect required
                fluid
                label='Species'
                options={speciesOptions}
                placeholder={pet.species}
            />
            <FormGroup inline placeholder={pet.size} >
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
            <FormGroup inline placeholder={pet.sex} >
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
          <FormInput fluid label='Breed' placeholder={pet.breed} />
          <FormInput fluid label='Color' placeholder={pet.color} />
        </FormGroup>
        <FormTextArea label='Notes' placeholder={pet.notes} />
        <FormButton>Submit</FormButton>
      </Form>
    )
}

export default PetForm;