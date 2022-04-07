import React from 'react'
import '../Components.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import profile from '../../assets/images/profile.jpg'
import { FaBars } from 'react-icons/fa'
import { AiTwotoneHome, AiFillCalendar } from 'react-icons/ai'
import { MdPeopleAlt } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { RiTaskFill } from 'react-icons/ri'

const Topbar = () => {
    return (
        <div className="Navbar-Style">
            <Navbar expand={false}>
                <div className='d-flex'>
                    <Navbar.Brand className="Dash-logo">HRM</Navbar.Brand>
                    <Link className='me-3' data-bs-toggle="offcanvas" to="#offcanvasExample" role="button"><FaBars /></Link>
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

                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">HRM</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div className='py-3 border-Bgray text-center'>
                            <div className='py-2'>
                                <h5 className='text-white mb-0'>username</h5>
                                <div className='text-muted'>Software Developer</div>
                            </div>
                        </div>

                        <div>
                            <Nav.Link href="/dashboard"><AiTwotoneHome style={{ color: "#aab3cc", marginRight: "10px" }} />Dashboard</Nav.Link>
                            <NavDropdown title={<span><MdPeopleAlt style={{ color: "#aab3cc", marginRight: "10px" }} />Employee</span>} id="offcanvasNavbarDropdown">
                                <NavDropdown.Item><Link to="/allemployee">Employee List</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/addemployee">Add Employee Details</Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={<span><RiTaskFill style={{ color: "#aab3cc", marginRight: "10px" }} />Interview</span>} id="offcanvasNavbarDropdown">
                                <NavDropdown.Item><Link to="/interviewschedule">Interview Schedule</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/interviewtabledata">Interview Schedule List</Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={<span><AiFillCalendar style={{ color: "#aab3cc", marginRight: "10px" }} />Events</span>} id="offcanvasNavbarDropdown">
                                <NavDropdown.Item><Link to="/add-event">Add Event</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/all-events">All Events</Link></NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </div>
                </div>
            </Navbar>
        </div>
    )
}
export default Topbar
