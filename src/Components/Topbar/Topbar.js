import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Topbar = () => {
    return (
        <div>
            <div className='container-fluid'>
               <Navbar>
                   <Nav.Link>Home</Nav.Link>
               </Navbar>
            </div>
        </div>
    )
}
export default Topbar
