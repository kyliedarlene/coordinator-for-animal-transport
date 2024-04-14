import { useState, useEffect } from "react";

import { FormField, Button, Checkbox, Form } from 'semantic-ui-react'

function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    console.log(email)

    return (
        <>
        <h2>LoginForm</h2>
        <Form>
            {/* <FormField>
            <label>Name</label>
            <input placeholder='Name' />
            </FormField> */}
            <FormField>
            <label>Email</label>
            <input 
                placeholder='Email' 
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
            />
            </FormField>
            <FormField>
            <label>Password</label>
            <input 
                placeholder='Password' 
                type='password'
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
            />
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