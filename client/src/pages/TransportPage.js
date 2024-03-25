import { useParams } from "react-router-dom";

import Transport from "../components/Transport";

function TransportPage() {
    const params = useParams();
    const id = parseInt(params.id)
    
    return (
        <>
        <Transport id={id} />
        </>
    )
}

export default TransportPage;