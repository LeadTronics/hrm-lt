import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Topbar from '../../Components/Topbar/Topbar'
import Header from '../../Components/Header/Header'
import { EMPLOYEE_API } from '../../endpoint'
import axios from 'axios'
const Dashboard = () => {

    const [Data, setData] = useState([])
    const [Loader, SetLoader] = useState(false)

    useEffect(() => {
        (async () => {
            const user = JSON.parse(localStorage.getItem('token'));
            SetLoader(true)
            const result = await axios.get(EMPLOYEE_API, { headers: { Authorization: `Bearer ${user}` } });
            if (result.status === 200) {
                console.log(result.data)
                setData(result.data)
                SetLoader(false)
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
                                    <table className="table mb-0 text-nowrap">
                                        <tbody>
                                            <tr className="border-bottom d-table-row gray-color">
                                                    <th className="text-left">Name</th>
                                                    <th className="text-left">Joining Date</th>
                                                    <th className="text-left">Department</th>
                                                    <th className="text-center">Actions</th>
                                            </tr>
                                            {
                                                !Loader ?
                                                    Data.map((d, i) => (
                                                        <tr className="border-bottom d-table-row justify-content-center align-items-center align-content-center" key={i}>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <img src={d.profile} alt="img" className="avatar avatar-md brround me-3" />
                                                                    <div className="mr-3 mt-0 mt-sm-1 d-block">
                                                                        <h6 className="mb-0 text-left">{d.name}</h6>
                                                                        <small className="text-muted">{d.designation}</small>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-left fs-13">{d.joiningDate}</td>
                                                            <td className="text-left fs-13">{d.department}</td>
                                                            <td className="text-end">
                                                                <a href={`mailto:${d.email}`}>
                                                                    <span className='action-button btn-mail me-2'>Mail</span>
                                                                </a>
                                                                <a href={`tel:${d.phone}`}>
                                                                    <span className='action-button btn-call me-2'>Call</span>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    ))
                                                    :
                                                    <tr className='text-center'>Data Loading</tr>
                                            }
                                        </tbody>
                                    </table>
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