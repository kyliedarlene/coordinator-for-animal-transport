import { useState, useEffect } from "react";

function PetsSaved() {
    const [pets, setPets] = useState([])

    useEffect(() => {
        fetch('/pets')
            .then((r) => r.json())
            .then((pets) => setPets(pets))
    }, []);

    return (
        <>
        <h3>You've helped save {pets.length} pets through your transports!</h3>
        </>
    )
}

export default PetsSaved;