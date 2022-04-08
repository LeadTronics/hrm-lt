import React from 'react'
import '../Components.css'
import { Navbar, NavDropdown } from 'react-bootstrap'
import profile from '../../assets/images/profile.jpg'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Nav, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
const Topbar = () => {
    const username = JSON.parse(localStorage.getItem('username'));
    const navigate = useNavigate();
    const logout = (data) => {
        localStorage.removeItem("token", (data.token));
        navigate('/login');
    }
    return (
        <div className="Navbar-Style">
            <Navbar expand={false}>
                <div className='d-flex'>
                    <Navbar.Brand className="Dash-logo">HRM</Navbar.Brand>
                    <Navbar.Toggle className='me-3'><i className="fa-solid fa fa-bars"></i></Navbar.Toggle>
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

                <Nav.Link className='Profile-drop'>
                    <Dropdown align="end">
                        <Dropdown.Toggle variant="inherit" id="dropdown-basic">
                            <img src={profile} className='profile-top' width="45px" alt="profile"></img>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='Popup-inner'>
                            <div className="text-center border-bottom pt-3" >
                                <h6>{username}</h6>
                                <p>Software Developer</p>
                            </div>
                            <Dropdown.Item><Link to="/"><i className="fa-solid fa fa-user me-2"></i>Profile</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/"><i className="fa-solid fa fa-gear me-2"></i>Settings</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/"><i className="fa-solid fa fa-comment me-2"></i>Messages</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/"><i className="fa-solid fa fa-key me-2"></i>Change Password</Link></Dropdown.Item>
                            <Dropdown.Item ><span onClick={logout}><i className="fa-solid fa fa-power-off me-2"></i>Sign Out</span></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav.Link>

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
                        <Nav style={{ padding: "10px 35px" }}>
                            <Nav.Link href="/dashboard"><i className='fa fa-home me-2'></i>Dashboard</Nav.Link>
                            <NavDropdown title={<span><i className="fa-solid fa fa-user me-2"></i>Employee</span>} id="offcanvasNavbarDropdown">
                                <NavDropdown.Item><Link to="/allemployee">Employee List</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/employee-add">Add Employee Details</Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={<span><i class="fa-solid fa fa-file me-2"></i>Interview</span>} id="offcanvasNavbarDropdown">
                                <NavDropdown.Item><Link to="/interviewschedule">Interview Schedule</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/interviewtabledata">Interview Schedule List</Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={<span><i className="fa-solid fa fa-calendar-check me-2"></i>Events</span>} id="offcanvasNavbarDropdown">
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
