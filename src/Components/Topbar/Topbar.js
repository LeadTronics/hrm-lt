import React, { useState } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { MdPeopleAlt } from 'react-icons/md'
import { AiTwotoneHome } from 'react-icons/ai'
import { RiLogoutBoxRFill, RiTaskFill } from 'react-icons/ri'
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import profileimg from '../../assets/images/profile.jpg'
function Topbar() {
    const [collapsed, setCollapsed] = useState(false);

    const onClickMenuIcon = () => {
        setCollapsed(!collapsed);
    };
    return (
        <>
             <ProSidebar className='Sidebar-style' collapsed={collapsed}
                breakPoint="md">
                <div className='text-center'>
                    <SidebarHeader className='Dash-logo border-Bgray'>
                        {collapsed ? "HRM" : "Lead HRM"}

                    </SidebarHeader>
                    <div className='py-3 border-Bgray'>
                        <img className='profile-side' src={profileimg} width="30%"></img>
                        <div className='py-2'>
                            <h5 className='text-white mb-0'>User Name</h5>
                            <div>Designation</div>
                        </div>

                    </div>
                </div>
                <Menu iconShape="square">
                    <MenuItem icon={<AiTwotoneHome style={{ color: "white" }} />}>Dashboard
                        <Link to="/dashboard"></Link>
                    </MenuItem>
                    <SubMenu title="Employee" icon={<MdPeopleAlt style={{ color: "white" }} />}>
                        <MenuItem style={{ listStyleType: "disc", marginLeft: "50px" }}>Employee List
                            <Link to="/allemployee"></Link>
                        </MenuItem>
                        <MenuItem style={{ listStyleType: "disc", marginLeft: "50px" }}>Add Employee Details
                            <Link to="/addemployee"></Link>
                        </MenuItem>
                    </SubMenu>
                    <SubMenu title="Interview" icon={<RiTaskFill style={{ color: "white" }} />}>
                        <MenuItem style={{ listStyleType: "disc", marginLeft: "50px" }}>Interview Schedule
                            <Link to="/interview_schedule"></Link>
                        </MenuItem>
                        <MenuItem style={{ listStyleType: "disc", marginLeft: "50px" }}>Interview Schedule List
                            <Link to='/interviewtabledata'></Link>
                        </MenuItem>
                        
                    </SubMenu>
                    <SubMenu title="Events" icon={<MdPeopleAlt style={{ color: "white" }} />}>
                        <MenuItem style={{ listStyleType: "disc", marginLeft: "50px" }}>Add Event
                            <Link to="/add-event"></Link>
                        </MenuItem>
                        <MenuItem style={{ listStyleType: "disc", marginLeft: "50px" }}>All Events
                            <Link to="/all-events"></Link>
                        </MenuItem>
                    </SubMenu>
                    
                </Menu>
                <SidebarFooter className='p-4' style={{ textAlign: "left" }}>
                    <Link to="/login" className='btn' style={{ cursor: "pointer", fontWeight: "bold", color: "white" }}><RiLogoutBoxRFill /> Logout
                    </Link>
                    <br></br>
                    <div style={{float:"left", margin:"10px", cursor:"pointer"}} onClick={onClickMenuIcon}>
                        {collapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
                    </div>
                </SidebarFooter>
            </ProSidebar> 
            
        </>
    );
}
export default Topbar;
