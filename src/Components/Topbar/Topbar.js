import React from 'react'
import '../Components.css'
import { Navbar, Nav } from 'react-bootstrap'

const Topbar = () => {
    return (
        <div>
            <div className='container-fluid'>
               <Navbar>
               <Navbar.Brand className="Dash-logo">HRM</Navbar.Brand>
                   <Nav.Link>Home</Nav.Link>
               </Navbar>
            </div>
        </div>
    )
}
export default Topbar
