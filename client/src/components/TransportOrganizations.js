import Organization from "./Organization";

import { Accordion } from 'semantic-ui-react'

function TransportOrganizations({ organizations, pets }) {
    
    // console.log(organizations)
    
    return (
        <>
            <h3>Organizations Receiving Pets</h3>
            <Accordion styled >
                {organizations.map((organization) => (
                    <Organization 
                        key={organization.id} 
                        organization={organization} 
                        pets={pets}
                    />
                ))}
            </Accordion>
        </>
    )
}

export default TransportOrganizations;