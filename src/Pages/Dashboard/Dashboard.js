import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import { MdContactPage, MdEvent } from 'react-icons/md'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import { AiOutlineMail, AiFillSetting } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
// import DoughnutChart from './Doughnut'
// import LineChart from './LineChart'
import Topbar from '../../Components/Topbar/Topbar'
// import FooterBar from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
const Dashboard = () => {

    
    

    return (
        <div className='dashboard'>
            <div className='sidebar-text-content'>
                <Topbar />
                <div className='Page-Content'>
                    <Header HeadingName="HR" MutedHeadName="  Dashboard" />
                    <div className='row'>
                        <div className='col-lg-9'>
                            <div className='Total-cards'>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-6'>
                                        <div className='card'>
                                            <div className='row d-flex justify-content-center align-items-center'>
                                                <div className='col-lg-8'>
                                                    <h6 className="mb-0">Total Employees</h6>
                                                    <h2>totalData.employee</h2>
                                                    <span className='text-muted'>
                                                        <BsFillArrowUpRightCircleFill className='me-2' style={{ color: '#0dcd94' }} />
                                                        <span className='me-2' style={{ color: '#0dcd94' }}>totalData.employee</span>
                                                        for last month
                                                    </span>
                                                </div>
                                                <div className='col-lg-4'><span style={{ fontSize: '60px', color: '#0dcd94' }}><MdContactPage /></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6'>
                                        <div className='card'>
                                            <div className='row d-flex justify-content-center align-items-center'>
                                                <div className='col-lg-8'>
                                                    <h6 className="mb-0">Total Job Applications</h6>
                                                    <h2>totalData.candidate</h2>
                                                    <span className='text-muted'>
                                                        <BsFillArrowUpRightCircleFill className='me-2' style={{ color: '#36f' }} />
                                                        <span className='me-2' style={{ color: '#36f' }}>totalData.candidate</span>
                                                        for last month
                                                    </span>
                                                </div>
                                                <div className='col-lg-4'><span style={{ fontSize: '60px', color: '#36f' }}><AiFillSetting /></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6'>
                                        <div className='card'>
                                            <div className='row d-flex justify-content-center align-items-center'>
                                                <div className='col-lg-8'>
                                                    <h6 className="mb-0">Total Events</h6>
                                                    <h2>totalData.events</h2>
                                                    <span className='text-muted'>
                                                        <BsFillArrowUpRightCircleFill className='me-2' style={{ color: '#fe7f00' }} />
                                                        <span className='me-2' style={{ color: '#fe7f00' }}>totalData.events</span>
                                                        for last month
                                                    </span>
                                                </div>
                                                <div className='col-lg-4'><span style={{ fontSize: '60px', color: '#fe7f00' }}><MdEvent /></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-2'>
                                    <div className='col-lg-12'>
                                        <div className='card'>
                                            <h6>Number of Hirings</h6>
                                            <div>
                                                {/* <LineChart></LineChart> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-3'>
                            <div className='events'>
                                <div className='card Upcoming-table-dash'>
                                    <h6>Events In This Month</h6>
                                    <div className="table-responsive recent_jobs pt-2 pb-2 pl-2 pr-2" style={{ height: "290px" }}>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="Gender-chart">
                                <div className='card mt-3 '>
                                    <h6 className="mb-0">Gender By Employees</h6>
                                    <div>
                                        {/* <DoughnutChart /> */}
                                        <div className='overlayChart'>
                                            Total Employees<br />data.length
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-2'>
                        <div className='col-lg-6 Recently-joined'>
                            <div className="card">
                                <h6 className='mb-1'>Recently Joined Employees</h6>
                                <div className="table-responsive recent_jobs pt-2 pb-2 pl-2 pr-2" style={{ height: "420px" }}>
                                    
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-6 Gender-chart Rec-Jobs'>
                            <div className='card'>
                                <h6 className='mb-1'>Interview List</h6>

                                <div className="table-responsive recent_jobs pt-2 pb-2 pl-2 pr-2" style={{ height: "420px" }}>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <FooterBar /> */}
                </div>
            </div>
        </div>
    )
}
export default Dashboard