import { useParams } from "react-router-dom";

import Transport from "../components/Transport";

function TransportPage() {
    const params = useParams();
    const id = parseInt(params.id)
    
    return (
        <>
        <h1>TransportPage</h1>
        <Transport id={id} />
        </>
    )
}

export default TransportPage;