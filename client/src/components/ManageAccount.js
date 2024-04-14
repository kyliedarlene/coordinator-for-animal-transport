import { Button } from 'semantic-ui-react'

function ManageAccount() {
    
    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE',
        })
            .then(console.log('logged out'))
    }
    
    return (
        <>
        <h3>ManageAccount</h3>
        <Button onClick={handleLogout} > Log Out </Button>
        </>
    )
}

export default ManageAccount;