import React from 'react'
import { render } from 'react-dom'

import "./NavTab.css";

class NavTab extends React.Component{
    render() {
        return (
            <div id ="thenav">
              <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
        );
    }
}
export default NavTab;


// import React, { useState, } from 'react';

// import {
 
//   Switch,
//   Route,
//   Link } from "react-router-dom";

// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem } from 'reactstrap';

//     // import "./NavTab.css";




//   const NavTab = (props) => {
//     const [isOpen, setIsOpen] = useState(false);
  
//     const toggle = () => setIsOpen(!isOpen);
  
//     return (
     
//              <div>
//             <Navbar color="light" light expand="md">
//           <NavbarBrand href="/"> </NavbarBrand>
//           <NavbarToggler onClick={toggle} />
//           <Collapse isOpen={isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//             <NavItem>
//                 <Link  activeOnlyWhenExact={true} to ="/" activeClassName="selectedLink">Home</Link>
//               </NavItem>
         
//               <NavItem>
//                 <Link to="/youtube/"  >Youtube</Link>
//               </NavItem>
//               <UncontrolledDropdown nav inNavbar>
//                 <DropdownToggle nav caret>
//                   More
//                 </DropdownToggle>
//                 <DropdownMenu right>
//                   <DropdownItem>
//                     <NavLink href="#" target ="_blank">Nothing</NavLink>
//                   </DropdownItem>
//                   <DropdownItem>
//                     Test 2
//                   </DropdownItem>
//                   <DropdownItem divider />
//                   <DropdownItem>
//                     Reset
//                   </DropdownItem>
//                 </DropdownMenu>
//               </UncontrolledDropdown>
//             </Nav>
//           </Collapse>
//         </Navbar>

//         {/* <Switch>
//           <Route exact path="/">
          
//           </Route>
//           <Route path="/youtube">
       
//             </Route>
//         </Switch>
//         */}
//       </div>





//     );  




      
//   }


  
  

// export default NavTab;