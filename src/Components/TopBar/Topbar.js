import { React } from 'react'
import './Topbar.css'
import { FaBars } from 'react-icons/fa'
import { FiSettings, FiEdit2 } from 'react-icons/fi'
import { MdMailOutline, MdPeopleAlt, MdOutlineAccountCircle } from 'react-icons/md'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { RiTaskFill } from 'react-icons/ri'
import { AiTwotoneHome, AiFillCalendar, AiOutlinePoweroff } from 'react-icons/ai'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Nav, NavDropdown, Navbar, Container, Dropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { FormControl } from 'react-bootstrap';
import profileimg from '../../assets/images/profile.jpg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Topbar = () => {

    const navigate = useNavigate();
    const logout = (data) => {
        console.log(data);
        localStorage.removeItem("token", (data.token));
        navigate('/login');
    }
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
                                                    <h6>Your Name</h6>
                                                    <p>Designation</p>
                                                </div>
                                                <Dropdown.Item href="/"><Link to="/"><MdOutlineAccountCircle style={{ padding: "10px", fontSize: "40px" }} />Profile</Link></Dropdown.Item>
                                                <Dropdown.Item href="/"><Link to="/"><FiSettings style={{ padding: "10px", fontSize: "40px" }} />Settings</Link></Dropdown.Item>
                                                <Dropdown.Item href="/"><Link to="/"><MdMailOutline style={{ padding: "10px", fontSize: "40px" }} />Messages</Link></Dropdown.Item>
                                                <Dropdown.Item href="/"><Link to="/"><FiEdit2 style={{ padding: "10px", fontSize: "40px" }} />Change Password</Link></Dropdown.Item>
                                                <Dropdown.Item ><AiOutlinePoweroff style={{ padding: "10px", fontSize: "40px" }} /><span onClick={logout}>Sign Out</span></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown></Nav.Link>
                                </div>
                                <Navbar.Offcanvas
                                    id="offcanvasNavbar"
                                    aria-labelledby="offcanvasNavbarLabel"
                                    placement="start"
                                >
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title id="offcanvasNavbarLabel" className='text-center'>
                                        </Offcanvas.Title>
                                        {/* <Offcanvas.Title id="offcanvasNavbarLabel">
                                        <button className='btn' style={{color:"#aab3cc"}} onClick={() => setShow(true)}><AiOutlineClose /></button>
                                    </Offcanvas.Title> */}

                                    </Offcanvas.Header>

                                    <Offcanvas.Body>
                                        <h1 style={{ color: "white", textAlign: "center" }}>HRM</h1>
                                        <div className='py-3 border-Bgray text-center'>
                                            <img className='profile-side' src={profileimg} width="30%" alt="profile"></img>
                                            <div className='py-2'>
                                                <h5 className='text-white mb-0'>User Name</h5>
                                                <div className='text-muted'>Designation</div>
                                            </div>

                                        </div>
                                        <Nav className="justify-content-end flex-grow-1 p-3">
                                            <Nav.Link href="/dashboard"><AiTwotoneHome style={{ color: "#aab3cc", marginRight: "10px" }} />Dashboard</Nav.Link>
                                            <NavDropdown title={<span><MdPeopleAlt style={{ color: "#aab3cc", marginRight: "10px" }} />Employee</span>} id="offcanvasNavbarDropdown">
                                                <NavDropdown.Item href="/allemployee">Employee List</NavDropdown.Item>
                                                <NavDropdown.Item href="/addemployee">Add Employee Details</NavDropdown.Item>
                                                {/* <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action5">
                                                Something else here
                                            </NavDropdown.Item> */}
                                            </NavDropdown>
                                            <NavDropdown title={<span><RiTaskFill style={{ color: "#aab3cc", marginRight: "10px" }} />Interview</span>} id="offcanvasNavbarDropdown">
                                                <NavDropdown.Item href="/interviewschedule">Interview Schedule</NavDropdown.Item>
                                                <NavDropdown.Item href="/interviewtabledata">Interview Schedule List</NavDropdown.Item>
                                            </NavDropdown>
                                            <NavDropdown title={<span><AiFillCalendar style={{ color: "#aab3cc", marginRight: "10px" }} />Events</span>} id="offcanvasNavbarDropdown">
                                                <NavDropdown.Item href="/add-event">Add Event</NavDropdown.Item>
                                                <NavDropdown.Item href="/all-events">All Events</NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>
                                    </Offcanvas.Body>
                                </Navbar.Offcanvas>
                            </Container>
                        </Navbar>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Topbar
