import { useContext } from "react";
import { useParams, Navigate } from "react-router-dom";

import { UserContext } from "../context/user";

import Transport from "../components/Transport";
import Header from "../components/Header";

function TransportPage() {
    const params = useParams();
    const id = parseInt(params.id)

    const { user } = useContext(UserContext)

    if(user) {
        return (
            <>
            <Header/>
            <Transport id={id} />
            </>
        )
    }
    else {
        return(<Navigate to='/' />)
    }
}

export default TransportPage;