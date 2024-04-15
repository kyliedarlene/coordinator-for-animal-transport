import { Button } from 'semantic-ui-react'
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";

function ManageAccount() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext)

    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE',
        })
    }
    
    return (
        <>
        <h3>ManageAccount</h3>
        <Button onClick={handleLogout} > Log Out </Button>
        </>
    )
}

export default ManageAccount;