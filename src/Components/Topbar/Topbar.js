import React from 'react'
import '../Components.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import profile from '../../assets/images/profile.jpg'

const Topbar = () => {
    return (
        <div>
            <div className='container-fluid'>
                <Navbar>
                    <Navbar.Brand className="Dash-logo">HRM</Navbar.Brand>
                    <Nav.Link>Home</Nav.Link>
                    <NavDropdown title={<img className="profile-top" src={profile} width="45px" alt="profile"></img>} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Navbar>
            </div>
        </div>
    )
}
export default Topbar
