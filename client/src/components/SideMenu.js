import { Link } from 'react-router-dom'
import { MenuItem, Menu } from 'semantic-ui-react'

function SideMenu({ activeItem }) {

    return (
        <Menu pointing vertical>
            <MenuItem 
                as={Link} 
                to='/dashboard/account'
                name='My Account'
                active={activeItem === 'My Account'}
            />
            <MenuItem
                as={Link} 
                to='/dashboard/transports'
                name='Transports'
                active={activeItem === 'Transports'}
            />
            <MenuItem
                as={Link} 
                to='/dashboard/pets-saved'
                name='Pets Saved'
                active={activeItem === 'Pets Saved'}
            />
        </Menu>
    )
}

export default SideMenu;