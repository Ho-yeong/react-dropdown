import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import {CSSTransition} from 'react-transition-group';


const DropdownMenu = (props) => {

    const [activeMenu, setActiveMenu] = useState('main'); 

    const DropdownItem = (props) => {


        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }

    return (
        <div className="dropdown">
            <CSSTransition 
            in={activeMenu === 'main'}
            unmountOnExit timeout={500} 
            classNames="menu-primary"
            >
                <div className="menu">

                    <DropdownItem goToMenu="main">My Dropdown</DropdownItem>
                    <DropdownItem
                        leftIcon={<Icon className="icon"name="folder outline"></Icon>}
                        rightIcon={<Icon className="icon"name="angle right"></Icon>}
                        goToMenu="folder"
                        >
                        folder

                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition 
            in={activeMenu === 'folder'}
            unmountOnExit timeout={500} 
            classNames="menu-secondary"
            >
                <div className="menu">

                    <DropdownItem leftIcon={<Icon className="icon" name="angle left"/>} goToMenu="main" />
                    <DropdownItem >My Document</DropdownItem>
                    <DropdownItem >My Document</DropdownItem>
                    <DropdownItem >My Document</DropdownItem>
                    <DropdownItem >My Document</DropdownItem>
                    <DropdownItem >My Document</DropdownItem>
                    <DropdownItem >My Document</DropdownItem>
                    <DropdownItem >My Document</DropdownItem>
                    <DropdownItem >My Document</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}

export default DropdownMenu;