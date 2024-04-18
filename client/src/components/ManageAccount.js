import { Button } from 'semantic-ui-react'
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";

function ManageAccount() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext)

    const [loggedIn, setLoggedIn] = useState(true)

    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE',
        })
            .then(() => setUser({}))
            .then(() => console.log(user))
    }
    
    return (
        <>
        <h3>Manage Account</h3>
        <Button onClick={handleLogout} > Log Out </Button>
        </>
    )
}

export default ManageAccount;