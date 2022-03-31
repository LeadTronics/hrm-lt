import  React ,{useState, useEffect } from 'react'
import './AddEvent.css'
import Topbar from '../../../Components/TopBar/Topbar';
import { Modal } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai'
import { useForm } from 'react-hook-form';
import FooterBar from '../../../Components/Footer/Footer';
import Calendar from './CalenderMain/Calendar';
import { EVENTS } from '../../../endpoint';
import axios from 'axios';
import moment from 'moment';
const Events = () => {
    const [show, setShow] = useState();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        reset();
        setShow(false)
    }


    const [events, setEvents] = useState([]);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('token'));
        axios.get(EVENTS, { headers: { "Authorization": `Bearer ${user}` } }).then(res => {
            setEvents(res.data);
            console.log(res.data)
        })

    }, [])

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    const dayString = `${month}/${day}/${year}`;
    const DateType = moment(dayString).format('MMM')
    console.log(DateType)

    return (
        <div className='sidebar-text-content'>
            <Topbar />
            <div className='Page-Content Events-text-content'>
                <div className='dashboard-header text-center'>Add Event</div>
                <div>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='events'>
                                <div className='card Upcoming-event-new'>
                                    <h6 className='mb-0'>Upcoming Events</h6>
                                    <div className="table-responsive recent_jobs pt-2 pb-2 pl-2 pr-2">
                                        <table className="table mb-0 text-nowrap ">
                                            <tbody>
                                                {events.map((d, index) => {
                                                    return DateType === moment(d.eventDate).format('MMM') ?
                                                        <tr className="d-table-row justify-content-center align-items-center align-content-center" key={index}>
                                                            <td>
                                                                <div className={index % 2 === 0 ? "blockText1" : "blockText2"}>
                                                                    {moment(d.eventDate).format('DD MMMM')}
                                                                </div>
                                                            </td>
                                                            <td className="text-left">
                                                                <div><h6 className='mb-0'>{d.eventTitle}</h6></div>
                                                                <div style={{ fontSize: "13px" }}>{d.eventDesc}</div>
                                                            </td>
                                                        </tr>
                                                        :
                                                        <div></div>
                                                }
                                                )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-8'>
                            <div className='cal-style'>
                                {/* <h2>{calendarText}</h2> */}
                                <div className='card'>
                                    {/* Calender */}
                                    <Calendar ></Calendar>
                                </div>
                                <Modal
                                    style={{ overflow: 'hidden' }}
                                    size='md'
                                    show={show}
                                    onHide={() => setShow(false)}
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered
                                    className="addEventModal modal__backdrop" id="NewsLetter"
                                >
                                    <Modal.Body>
                                        <button className="AddEvent-close-btn" onClick={() => setShow(false)}>
                                            <AiOutlineClose /> </button>
                                        <div className="">
                                            <h4 className="modal__title">Add event</h4>
                                            <div>
                                                <form onSubmit={handleSubmit(onSubmit)} >
                                                    <div className='row py-2'>
                                                        <div className='col-12'>
                                                            <input className="form-control mb-3"
                                                                {...register("event", {
                                                                    required: true,
                                                                })}
                                                                type="text"
                                                                autoComplete="off"
                                                                placeholder="Enter Event Name"
                                                                required />
                                                            <textarea className="form-control mb-3"
                                                                {...register("eventDesc", {
                                                                    required: true,
                                                                })}
                                                                type="text"
                                                                autoComplete="off"
                                                                placeholder="Enter Event Description"
                                                                required />

                                                        </div>
                                                        <div className='col-12 text-center pt-2'>
                                                            <button type="Submit" className="btn Button-AddEvent">
                                                                <span>Submit</span></button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <FooterBar />
        </div>
    )
}
export default Events
