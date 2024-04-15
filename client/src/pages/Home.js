import { useContext } from "react";

import { UserContext } from "../context/user";

import Header from "../components/Header"
import Authentication from "../components/Authentication";

function Home() {
    const { user } = useContext(UserContext)

    return (
        <>
            <Header/>
            {user ? 
                `Welcome, ${user.name}!` : 
                <Authentication/>
            }
        </>
    )
}

export default Home;