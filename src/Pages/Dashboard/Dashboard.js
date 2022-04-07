import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Topbar from '../../Components/Topbar/Topbar'
import Header from '../../Components/Header/Header'
import {INTERVIEW_LIST} from '../../endpoint'
import axios from 'axios'
const Dashboard = () => {

    const [Data, setData] = useState({})

    useEffect(() => {
        (async () => {
            const user = JSON.parse(localStorage.getItem('token'));
            const result = await axios.get(INTERVIEW_LIST, { headers: { Authorization: `Bearer ${user}` } });
            if (result.status === 200) {
                console.log(result.data)
                setData(result.data)
            }
        })();
    }, [])
    
    

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