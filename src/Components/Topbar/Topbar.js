import React from 'react'
import '../Components.css'
import { Nav, NavDropdown, Navbar, Container, Dropdown } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa'
import { FiSettings, FiEdit2 } from 'react-icons/fi'
import { MdMailOutline, MdPeopleAlt, MdOutlineAccountCircle } from 'react-icons/md'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { RiTaskFill } from 'react-icons/ri'
import { AiTwotoneHome, AiFillCalendar, AiOutlinePoweroff } from 'react-icons/ai'
import Form from 'react-bootstrap/Form'
import { FormControl } from 'react-bootstrap';
import profileimg from '../../assets/images/profile.jpg'
import { Link } from 'react-router-dom';


const Topbar = () => {

    return (
        <>
            <div className='Topbar'>
                <div className='sidebar-text-top'>
                    <div className='row'>
                        <Navbar style={{ backgroundColor: "#17263a" }} expand={false} fixed="top">
                            <Container fluid>
                                <div className='d-flex'>
                                    <Navbar.Brand href="#" className='Dash-logo'>
                                        HRM
                                    </Navbar.Brand>
                                    <Navbar.Toggle className='me-3'><FaBars /></Navbar.Toggle>
                                    <Form className="d-flex ClasForm">
                                        <FormControl
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            style={{ margin: "5px" }}
                                            aria-label="Search"
                                        />
                                        <button style={{ margin: "5px" }} variant="outline-success">Search</button>
                                    </Form>
                                </div>
                                <div className='d-flex justify-content-center align-items-center top-drop-icon'>

                                    <Nav.Link href="#action1" className="icon-top"><MdMailOutline style={{ fontSize: "30px" }} /></Nav.Link>
                                    <Nav.Link href="#action1" className="icon-top"><IoMdNotificationsOutline style={{ fontSize: "30px" }} /></Nav.Link>
                                    <Nav.Link className='Profile-drop'>
                                        <Dropdown align="end">
                                            <Dropdown.Toggle variant="inherit" id="dropdown-basic">
                                                <img src={profileimg} className='profile-top' width="45px" alt="profile"></img>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className='Popup-inner'>
                                                <div className="text-center border-bottom pt-3" >
                                                    <h6>username</h6>
                                                    <p>Software Developer</p>
                                                </div>
                                                <Dropdown.Item href="/"><Link to="/"><MdOutlineAccountCircle style={{ padding: "10px", fontSize: "40px" }} />Profile</Link></Dropdown.Item>
                                                <Dropdown.Item href="/"><Link to="/"><FiSettings style={{ padding: "10px", fontSize: "40px" }} />Settings</Link></Dropdown.Item>
                                                <Dropdown.Item href="/"><Link to="/"><MdMailOutline style={{ padding: "10px", fontSize: "40px" }} />Messages</Link></Dropdown.Item>
                                                <Dropdown.Item href="/"><Link to="/"><FiEdit2 style={{ padding: "10px", fontSize: "40px" }} />Change Password</Link></Dropdown.Item>
                                                <Dropdown.Item ><AiOutlinePoweroff style={{ padding: "10px", fontSize: "40px" }} /><span>Sign Out</span></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown></Nav.Link>
                                </div>
                            </Container>
                        </Navbar>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Topbar
