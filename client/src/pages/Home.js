import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { UserContext } from "../context/user";

import Header from "../components/Header"
import Dashboard from "./Dashboard"
import Authentication from "../components/Authentication";

function Home() {
    const { user } = useContext(UserContext)

    if(!user) {
        return (
            <>
            <Header/>
            <Authentication/>
            </>
        )
    }
    else {
        return(<Navigate to="/dashboard/account"/>)
    }
}

export default Home;