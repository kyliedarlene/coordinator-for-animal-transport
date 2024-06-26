import { useContext } from "react";
import { Navigate } from "react-router-dom";

import Header from "../components/Header";
import DashContent from "../components/DashContent";
import SideMenu from "../components/SideMenu";

import { UserContext } from "../context/user";

function Dashboard({ content }) {    
    const { user } = useContext(UserContext)

    if(user) {
        return (
            <>
                <Header/>
                <SideMenu activeItem={content}/>
                <DashContent content={content}/>
            </>
        )
    }
    else {
        return(<Navigate to='/' />)
    }
    
}

export default Dashboard;