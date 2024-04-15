import { useState, useContext } from "react";
import { UserContext } from "../context/user";
import { FormField, Button, Checkbox, Form } from 'semantic-ui-react'

function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { user, setUser } = useContext(UserContext)

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
        .then((newUser) => setUser(newUser))
    }

    function handleSubmit(e) {
        e.preventDefault()
        handleLogin()
    }

    return (
        <>
            <Form onSubmit={handleSubmit} >
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