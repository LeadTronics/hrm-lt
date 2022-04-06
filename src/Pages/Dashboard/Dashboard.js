import React from 'react'
import Header from '../../Components/Header/Header'
import Topbar from '../../Components/Topbar/Topbar'

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Topbar />
            <div className='sidebar-text-content'> 
                <div className='Page-Content'>
                    <Header HeadingName="HR" MutedHeadName="  Dashboard" />
                </div>
            </div>
        </div>
    )
}
export default Dashboard
