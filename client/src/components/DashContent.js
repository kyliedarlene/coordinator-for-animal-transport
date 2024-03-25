import { Segment } from 'semantic-ui-react'

import TransportList from "../components/TransportList";
import ManageAccount from "../components/ManageAccount";
import PetsSaved from "../components/PetsSaved";

function DashContent( {content} ) {    
    const display = {
        'My Account': <ManageAccount />,
        'Transports': <TransportList />,
        'Pets Saved': <PetsSaved />
    }
    
    return (
        <Segment>
        {display[content]}
        </Segment>
    )
}

export default DashContent;