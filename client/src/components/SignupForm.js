import { useState, useContext } from "react";
import emailjs from '@emailjs/browser';
import { UserContext } from "../context/user";
import { FormField, Button, Checkbox, Form } from 'semantic-ui-react'

function SignupForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { user, setUser } = useContext(UserContext)

    function sendEmail(user) {
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "service_id": "service_s7jxmci",
                "template_id": "template_ylh5m0e",
                "user_id": "TPqWSXz9jbHJT55JW",
                "template_params": {
                    "user": user.name,
                    "to_email": user.email
                }
            })
        })
    }

    function handleSignup() {
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
        .then((r) => r.json())
        .then((newUser) => {
            setUser(newUser)
            sendEmail(newUser)
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        handleSignup()
    }

    return (
        <>
            <Form as='form' onSubmit={handleSubmit} >
                <FormField>
                <label>Name</label>
                <input 
                    placeholder='Name' 
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                />
                </FormField>
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
                <Button type='submit'>Submit</Button>
            </Form>        
        </>
    )
}

export default SignupForm;