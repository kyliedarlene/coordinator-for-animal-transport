import { FormField, Button, Checkbox, Form } from 'semantic-ui-react'

function LoginForm() {
    return (
        <>
        <h2>LoginForm</h2>
        <Form>
            <FormField>
            <label>Email</label>
            <input placeholder='Email' />
            </FormField>
            <FormField>
            <label>Password</label>
            <input placeholder='Password' />
            </FormField>
            {/* <FormField>
            <Checkbox label='I agree to the Terms and Conditions' />
            </FormField> */}
            <Button type='submit'>Submit</Button>
        </Form>
        </>
    )
}

export default LoginForm;