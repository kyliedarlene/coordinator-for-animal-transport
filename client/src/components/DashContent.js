import TransportList from "../components/TransportList";
import ManageAccount from "../components/ManageAccount";
import PetsSaved from "../components/PetsSaved";

function DashContent( {content} ) {    
    const displayContent = {
        "TransportList": <TransportList />,
        "ManageAccount": <ManageAccount />,
        "PetsSaved": <PetsSaved />
    }
    
    return (
        <>
        <h2>DashContent</h2>
        {displayContent[content]}
        </>
    )
}

export default DashContent;