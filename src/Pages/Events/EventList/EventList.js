import React, { useState, useEffect } from 'react'
import './EventList.css'
import '../AddEvent/AddEvent.css'
import Topbar from '../../../Components/TopBar/Topbar'
import {AiFillEdit } from 'react-icons/ai'
import FooterBar from '../../../Components/Footer/Footer'
import { EVENTS } from '../../../endpoint'
import axios from 'axios'
import DeleteEventModal from '../AddEvent/CalenderMain/DeleteEventModal'
import Form from "react-bootstrap/Form";
import Pagination from '../../../Components/Pagination/Pagination'
const EventList = () => {

    // console.log(user)
    const [events, setEvents] = useState([]);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('token'));
        axios.get(EVENTS, { headers: { "Authorization": `Bearer ${user}` } }).then(res => {
            setEvents(res.data);
            console.log(res.data)
        })

    }, [])
    //records per page
    const [postsPerPage, setpostPerPage] = useState(10);

    //pagination
    var dataLimit = postsPerPage;
    var pageLimit = 2;
    const [currentPage, setCurrentPage] = useState(1);
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return searchItems.slice(startIndex, endIndex);
    };

    //Search data
    const [searchInput, setSearchInput] = useState('');
    const searchItems = events.filter((item) => {
        if (searchInput !== "") {
            return Object.values(item)
                .join("")
                .toLowerCase()
                .includes(searchInput.toLowerCase());
        } else {
            return item;
        }
    });
    return (
        <div className='sidebar-text-content'>
            <Topbar />
            <div className='row Events-list Page-Content'>
                <div className='Events-text-content'>
                    <div className='dashboard-header text-center'>Events</div>
                    <div className="card">
                        <div className='row'>
                            <div className='col-lg-3'>
                                <Form.Select
                                    className="Table-entry"
                                    value={postsPerPage}
                                    onChange={(e) => {
                                        setpostPerPage(Number(e.target.value));
                                    }}
                                >
                                    {[10, 20, 30, 40, 50].map((pageSize) => (
                                        <option key={pageSize} value={pageSize}>
                                            Show Entries {pageSize}
                                        </option>
                                    ))}
                                </Form.Select>
                            </div>
                            <div className='col-lg-3'></div>
                            <div className='col-lg-3'></div>
                            <div className='col-lg-3 mb-4 allemp_search'>
                                <form>
                                    <input className='allemp_searchinput' type='search' placeholder='Search...'
                                        onChange={(e) => setSearchInput(e.target.value)} />
                                </form>
                            </div>
                        </div>
                        <div className="table-responsive recent_jobs pt-2 pb-2 pl-2 pr-2">
                            <table className="table mb-0 text-nowrap">
                                <thead>
                                    <tr>
                                        <th className='text-left'>Sr.</th>
                                        <th className="text-left">Date</th>
                                        <th className="text-left">Event Name</th>
                                        <th className="text-left">Description</th>
                                        <th className="text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {getPaginatedData().map((d, index) => (

                                        <tr className="border-bottom d-table-row justify-content-center align-items-center align-content-center" key={index}>
                                            <td>
                                                <span className="mt-2 text-center" style={{ fontSize: "18px", fontWeight: "500", }}>{index + 1}</span>
                                            </td>
                                            <td>
                                                <div className='Date-Event-Table' style={{ color: "blue", background: "#e8eaf6" }}>{d.eventDate}
                                                </div>
                                            </td>
                                            <td>{d.eventTitle}</td>
                                            <td>{d.eventDesc}</td>
                                            <td className="text-end">
                                                <span className='action-button btn-call me-2'><AiFillEdit /></span>
                                                {/* <span className='action-button btn-delete me-2' onClick={() => onDeleteMO()}><AiOutlineDelete />
                                                    </span> */}
                                                <DeleteEventModal id={d._id} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='row'>
                            <div className='col-lg-9'></div>
                            <div className='col-lg-3'>
                                <Pagination
                                    setCurrentPage={setCurrentPage}
                                    dataLimit={dataLimit}
                                    currentPage={currentPage}
                                    pageLimit={pageLimit}
                                    length={events.length}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                    <FooterBar />
                </div>
            </div>
        </div>
    )
}
export default EventList
