import { useState, useContext } from "react";

import { FormField, Button, Checkbox, Form } from 'semantic-ui-react'

import { UserProvider, UserContext } from "../context/user";

function SignupForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setUser } = useContext(UserContext)

    function handleLogin() {
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then((r) => r.json())
        .then((user) => setUser(user))
    }

    function handleSubmit(e) {
        e.preventDefault()
        handleLogin()
    }

    return (
        <>
        <h2>SignupForm</h2>
        <UserProvider>
            <Form onSubmit={handleSubmit} >
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
        </UserProvider>
        
        </>
    )
}

export default SignupForm;