import DropDown from './MenuItem';
import { NavLink } from "react-router";


function Menu({ menuItems }) {    
    
    return (
        <nav className='dropdown-item'>
            {menuItems.map(menuItem => 
                <DropDown dropDownItem={ menuItem.name } dropDownList={ menuItem.list } key={menuItem.index}/>
            )};
        </nav>
    )
}

export default Menu;