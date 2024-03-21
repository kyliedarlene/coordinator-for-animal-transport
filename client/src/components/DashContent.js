import TransportList from "../components/TransportList";
import ManageAccount from "../components/ManageAccount";
import PetsSaved from "../components/PetsSaved";

function DashContent( {content} ) {    
    const display = {
        "TransportList": <TransportList />,
        "ManageAccount": <ManageAccount />,
        "PetsSaved": <PetsSaved />
    }
    
    return (
        <>
        <h2>DashContent</h2>
        {display[content]}
        </>
    )
}

export default DashContent;