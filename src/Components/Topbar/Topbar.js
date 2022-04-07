import React from 'react'
import '../Components.css'
import { Navbar, Nav, NavDropdown, OffcanvasBody } from 'react-bootstrap'
import profile from '../../assets/images/profile.jpg'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FaBars } from 'react-icons/fa'
import {AiTwotoneHome, AiFillCalendar}  from 'react-icons/ai'
import {MdPeopleAlt} from 'react-icons/md'
import { Link } from 'react-router-dom'
import {RiTaskFill} from 'react-icons/ri'

const Topbar = () => {
    return (
        <div className="Navbar-Style">
            <Navbar expand={false}>
                <div className='d-flex'>
                    <Navbar.Brand className="Dash-logo">HRM</Navbar.Brand>
                    <Navbar.Toggle className='me-3'><FaBars /></Navbar.Toggle>
                    <form className="d-flex">
                        <input
                            type="search"
                            placeholder="Search"
                            className="me-2 form-control"
                            style={{ margin: "5px" }}
                            aria-label="Search"
                        />
                        <button style={{ margin: "5px" }} variant="outline-success">Search</button>
                    </form>
                </div>

                <NavDropdown title={<img className="profile-top" src={profile} width="45px" alt="profile"></img>} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>

                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel" className='text-center'>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <>
                        <Link to="/">dashboard</Link>
                        </>
                        
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>
        </div>
    )
}
export default Topbar
