import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Topbar from '../../Components/Topbar/Topbar'
import Header from '../../Components/Header/Header'
import { INTERVIEW_LIST } from '../../endpoint'
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
                                    <table className="table mb-0 text-nowrap">
                                        <tbody>
                                            <tr className='gray-color border-bottom d-table-row'>
                                                <th className="text-left">Name</th>
                                                <th className="text-left">Interview Date</th>
                                                <th className='text-left'>Time</th>
                                                <th className="text-center">Actions</th>
                                            </tr>
                                            {Data.length === 0 ? <tr>No data found</tr> : Data.slice(0, 5).map((d, ind) => (
                                                <tr className="border-bottom d-table-row justify-content-center align-items-center align-content-center" key={ind}>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="mr-3 mt-0 mt-sm-1 d-block">
                                                                <h6 className="mb-0">{d.name}</h6>
                                                                <small className="text-muted">{d.designation}</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-left fs-13">{d.interviewDate}</td>
                                                    <td className="text-left fs-13">{d.interviewTime}</td>
                                                    <td className="text-end">
                                                        <a href={`mailto:${d.email}`}>
                                                            <span className='action-button btn-mail me-2'>Mail</span>
                                                        </a>
                                                        <a href={`tel:${d.phone}`}>
                                                            <span className='action-button btn-call me-2'>Call</span>
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
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