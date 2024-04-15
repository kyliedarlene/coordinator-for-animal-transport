import { useState } from "react";
import { Segment } from 'semantic-ui-react'

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Authentication() {
    const [displayLogin, setDisplayLogin] = useState(true)

    const message = (displayLogin ? "Need to make an account? Sign up " : "Already have an account? Sign in ")

    return (
        <>
            <Segment padded >
                {displayLogin ? <LoginForm/> : <SignupForm/> }
            </Segment>
            {<p>{message} <a onClick={() => setDisplayLogin(!displayLogin)} >here</a>.</p>}
        </>
    )
}

export default Authentication;