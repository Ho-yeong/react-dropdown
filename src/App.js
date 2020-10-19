import React from 'react';
import { Icon } from 'semantic-ui-react';
import Navbar from './Navbar';
import NavItem from './NavItem';
import DropdownMenu from './DropdownMenu';


function App() {
  return (
    <Navbar>
      <NavItem icon={<Icon className="icon" name="home"/>}/>
      <NavItem icon={<Icon className="icon" name="gamepad"/>}/>
      <NavItem icon={<Icon className="icon" name="file"/>}/>
    
      <NavItem icon={<Icon className="icon" name="angle down"/>}>
        {/* DropDown in here*/}
        <DropdownMenu></DropdownMenu>

      </NavItem>
    
    </Navbar>
  );
}

export default App;
