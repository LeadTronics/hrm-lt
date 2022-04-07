import React from 'react'
import './Dashboard.css'
import { MdContactPage, MdEvent } from 'react-icons/md'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import {AiFillSetting } from 'react-icons/ai'
import Topbar from '../../Components/Topbar/Topbar'
import Header from '../../Components/Header/Header'
const Dashboard = () => {

    
    

    return (
        <div className='dashboard'>
            <div className='sidebar-text-content'>
                <Topbar />
                <div className='Page-Content'>
                    <Header HeadingName="HR" MutedHeadName="  Dashboard" />
                  

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