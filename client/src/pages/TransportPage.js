import { useParams } from "react-router-dom";

import Transport from "../components/Transport";
import Header from "../components/Header";

function TransportPage() {
    const params = useParams();
    const id = parseInt(params.id)
    
    return (
        <>
        <Header/>
        <Transport id={id} />
        </>
    )
}

export default TransportPage;