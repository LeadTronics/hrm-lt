import React from 'react'
import '../Components.css'
import { Nav, Navbar, Dropdown } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'
import { IoMdNotificationsOutline } from 'react-icons/io'


const Topbar = () => {

    return (
        <>
            <div className='Topbar'>
                <div className='sidebar-text-top'>
                    <div className='row'>
                        <Navbar style={{ backgroundColor: "#17263a" }} >
                        <div className='container-fluid'>
                                <div className='d-flex'>
                                    <Navbar.Brand href="#" className='Dash-logo'>
                                        HRM
                                    </Navbar.Brand>
                                    <Navbar.Toggle className='me-3'><FaBars /></Navbar.Toggle>
                                    <form className="d-flex ClasForm">
                                        <input
                                            type="search"
                                            placeholder="Search"
                                            className="me-2 form-control"
                                            aria-label="Search"
                                        />
                                        <button variant="outline-success">Search</button>
                                    </form>
                                </div>
                                <div className='d-flex justify-content-center align-items-center top-drop-icon'>

                                    <Nav.Link href="#action1" className="icon-top"><MdMailOutline/></Nav.Link>
                                    <Nav.Link href="#action1" className="icon-top"><IoMdNotificationsOutline/></Nav.Link>
                                    <Nav.Link className='Profile-drop'>
                                        <Dropdown align="end">
                                            <Dropdown.Toggle variant="inherit" id="dropdown-basic">
                                                Image
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className='Popup-inner'>
                                                <div className="text-center border-bottom pt-3" >
                                                    <h6>username</h6>
                                                    <p>Software Developer</p>
                                                </div>
                                                <Dropdown.Item>Profile</Dropdown.Item>
                                                <Dropdown.Item>Settings</Dropdown.Item>
                                                <Dropdown.Item>Messages</Dropdown.Item>
                                                <Dropdown.Item>Change Password</Dropdown.Item>
                                                <Dropdown.Item>Sign Out</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown></Nav.Link>
                                </div>
                                </div>
                        </Navbar>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Topbar
