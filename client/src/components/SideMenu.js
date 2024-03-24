import { useState } from "react";
import { MenuItem, Menu } from 'semantic-ui-react'

function SideMenu() {
    const [activeItem, setActiveItem] = useState('Transports');
    console.log(activeItem)

    function handleItemClick(e) {
        
    }

    return (
        <Menu pointing secondary vertical>
            <MenuItem
                name='My Account'
                active={activeItem === 'My Account'}
                onClick={() => setActiveItem('My Account')}
            //   onClick={this.handleItemClick}
            />
            <MenuItem
                name='Transports'
                active={activeItem === 'Transports'}
                onClick={() => setActiveItem('Transports')}
                //   onClick={this.handleItemClick}
            />
            <MenuItem
                name='Pets Saved'
                active={activeItem === 'Pets Saved'}
                onClick={() => setActiveItem('Pets Saved')}
            //   onClick={this.handleItemClick}
            />
        </Menu>
    )
}

export default SideMenu;