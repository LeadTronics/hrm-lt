import React from 'react'
import '../Components.css'
import { Navbar, NavDropdown } from 'react-bootstrap'
import profile from '../../assets/images/profile.jpg'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom'
const Topbar = () => {
    const username = JSON.parse(localStorage.getItem('username'));
    return (
        <div className="Navbar-Style">
            <Navbar expand={false}>
                <div className='d-flex'>
                    <Navbar.Brand className="Dash-logo">HRM</Navbar.Brand>
                    <Navbar.Toggle className='me-3'>Btn</Navbar.Toggle>
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
                                    placement="start"
                                >
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title id="offcanvasNavbarLabel" className='text-center'>
                                        </Offcanvas.Title>

                                    </Offcanvas.Header>

                                    <Offcanvas.Body>
                                        <h1 style={{ color: "white", textAlign: "center" }}>HRM</h1>
                                        <div className='py-3 border-Bgray text-center'>
                                            <img className='profile-side' src={profile} width="30%" alt="profile"></img>
                                            <div className='py-2'>
                                                <h5 className='text-white mb-0'>{username}</h5>
                                                <div className='text-muted'>Software Developer</div>
                                            </div>

                                        </div>
                                        <Nav style={{padding:"10px 35px"}}>
                                            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                                            <NavDropdown title="Employee" id="offcanvasNavbarDropdown">
                                                <NavDropdown.Item><Link to="/allemployee">Employee List</Link></NavDropdown.Item>
                                                <NavDropdown.Item><Link to="/addemployee">Add Employee Details</Link></NavDropdown.Item>
                                            </NavDropdown>
                                            <NavDropdown title="Interview" id="offcanvasNavbarDropdown">
                                                <NavDropdown.Item><Link to="/interviewschedule">Interview Schedule</Link></NavDropdown.Item>
                                                <NavDropdown.Item><Link to="/interviewtabledata">Interview Schedule List</Link></NavDropdown.Item>
                                            </NavDropdown>
                                            <NavDropdown title="Events" id="offcanvasNavbarDropdown">
                                                <NavDropdown.Item><Link to="/add-event">Add Event</Link></NavDropdown.Item>
                                                <NavDropdown.Item><Link to="/all-events">All Events</Link></NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>
                                    </Offcanvas.Body>
                                </Navbar.Offcanvas>

                
            </Navbar>
        </div>
    )
}
export default Topbar
