import { useState, useContext } from "react";

import { UserContext } from "../context/user";

import Header from "../components/Header"
import Dashboard from "./Dashboard";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import LoginPage from "./LoginPage";

function Home() {
    const { user, setUser } = useContext(UserContext)

    return (
        <>
            <Header/>
            <h1>Home</h1>
            {user ? user : <LoginForm /> }
        </>
    )
}

export default Home;