import React, { useState, useEffect } from 'react'
import { Row, Col, Form } from 'react-bootstrap';
import Button from '../Button/Button';
import { useNavigate } from "react-router-dom"
import './InterviewSchedule.css';
import Topbar from '../TopBar/Topbar';
import FooterBar from '../Footer/Footer';
import axios from 'axios';
import swal from 'sweetalert';
import { useParams } from 'react-router-dom';
import { INTERVIEW_LIST } from '../../endpoint';
const InterviewUpdate = () => {
    //creating error state for validation
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');
    const [designation, setDesignation] = useState('');
    //   const[year_of_experience,setYear_of_experience]=useState('');
    const [interviewDate, setInterviewDate] = useState('');
    const [interviewTime, setInterviewTime] = useState('');
    const [resume, setResume] = useState('');
    const navigate = useNavigate();
    //useparam for get id 
    const { id } = useParams();
    //update data
    useEffect(() => {
        axios.get(`${INTERVIEW_LIST}/${id}`, { headers: { "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}` } })
            .then(res => {
                setItems(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    //update data
    const onUpdate = (e) => {
        // checking if value of first name and last name is empty show error else take to step   
        const user = {
            // "_id":_id,
            "email": email,
            "name": name,
            "phone": phone,
            "gender": gender,
            "designation": designation,
            // "year_of_experience":year_of_experience,
            "interviewDate": interviewDate,
            "interviewTime": interviewTime,
            "status": status,
            "resume": resume,
        }
        axios.patch(`${INTERVIEW_LIST}/${id}`, user, { headers: { "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}` } })
            .then(res => {
                console.log(res);
                //console.log(res.data.id);
                console.log('Data=' + items);
                swal.fire({
                    position: 'centerd',
                    icon: 'success',
                    title: 'Your Data has been Updated...',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigate('/interviewtabledata');
            })
    }
    return (
        <>
            <section className='interviewSchedule'>
                <div>
                    <Topbar />
                    <div className='row Interview_Form'>
                        <div className='Heading_interview_Form'>
                            <div className='intScheduleForm-header my-4 text-center'>Interview Schedule Form </div>
                            <div className="card">
                                <Form onSubmit={onUpdate}>
                                    <Row>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <div className="md-form mb-0">
                                                <label className='d-flex mx-2'>Name</label>
                                                <input name='Name' type="text" defaultValue={items.name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder='Your Name'
                                                />
                                            </div>
                                        </Col>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <div className="md-form mb-0">
                                                <label className='d-flex mx-2'>Email</label>
                                                <input name="Business_Email_Address" defaultValue={items.email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder='Your Email'
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <div className="md-form">
                                                <label className='d-flex mx-2'>Phone Number</label>
                                                <input name='phone' type="number" defaultValue={items.phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder='Your Phone number' />
                                            </div>
                                        </Col>
                                        <Col lg="6" md="6" sm="12" className="my-2" style={{ textAlign: 'justify' }}>
                                            <label className='mx-2'>Gender </label>
                                            <input type="text" className="form-control" name="gender" defaultValue={items.gender} onChange={(e) => setGender(e.target.value)} />
                                            {/* <option name="" value=""></option>
                                <option name="gender" value="male">Male</option>
                                <option name="gender" value="female">Female</option>                                 */}
                                            {/* </select> */}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <div className="md-form mb-0">
                                                <label className='d-flex mx-2'>Position</label>
                                                <input type="text" className="form-control" name="designation" defaultValue={items.designation} onChange={(e) => setDesignation(e.target.value)} placeholder="Position Applying For" />
                                                {/* <option name="designation" value="1">Software Devaloper</option>
                                            <option name="designation" value="2">Lead Generation Executive</option>
                                            <option name="designation" value="3">Demand Generation Executive</option>
                                            <option name="designation" value="3">Sales Executive</option>
                                            <option name="designation" value="3">FullStack Developer</option>
                                            <option name="designation" value="3">Email Marketing Executive</option>
                                            <option name="designation" value="3">Digital Marketing Executive</option>
                                            <option name="designation" value="3">HR</option>
                                        </select> */}
                                            </div>
                                        </Col>
                                        {/* <Col lg="6" md="6" sm="12" className="my-2">
                                <div className="md-form mb-0">
                                    <div className="form-group">
                                        <label className='d-flex mx-2'>Year Of Experience</label>
                                        <select className="form-control" name="year_of_experience" defaultValue={items.year_of_experience} onChange={(e) => setYear_of_experience(e.target.value)} placeholder="year_of_experience" >
                                            <option value="1">0-1</option>
                                            <option value="2">1-2</option>
                                            <option value="3">2-3</option>
                                            <option value="3">3-4</option>
                                            <option value="3">4-5</option>
                                            <option value="3">5+</option>
                                        </select>
                                    </div>
                                </div>
                            </Col> */}
                                    </Row>
                                    <h4 className='text-center'>Interview Details</h4>
                                    <Row>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <div className="md-form">
                                                <label className='d-flex mx-2'>Interview Date</label>
                                                <input name='interview_date' type="text" defaultValue={items.interviewDate} onChange={(e) => setInterviewDate(e.target.value)} className="form-control" placeholder='Your Interview Date' />
                                            </div>
                                        </Col>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <div className="md-form">
                                                <label className='d-flex mx-2'>Interview Time</label>
                                                <input name='interview_time' type="text" defaultValue={items.interviewTime} onChange={(e) => setInterviewTime(e.target.value)} className="form-control" placeholder='Your Interview Time' />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <div className="md-form">
                                                <label className='d-flex mx-2'>Interviewers CV</label>
                                                <input type="text" className="form-control" name="resume" defaultValue={items.resume} onChange={(e) => setResume(e.target.value)} />
                                            </div>
                                        </Col>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <div className="md-form">
                                                <div className=''>
                                                    <label className='mx-2'>Status:</label>
                                                    <input type="text" className="form-control" name="status" defaultValue={items.status} onChange={(e) => setStatus(e.target.value)} />
                                                    {/* <input className='mt-2' {...register("status",{required:true})} type="radio" value="Active" name="status"/>
                                <label className='mx-2 '>Active</label>
                                
                                <input className='mt-2' {...register("status",{required:true})} type="radio" value="Inactive" name="status"/>
                                <label className='mx-2'>Inactive</label>
                                
                                <input className='mt-2' {...register("status",{required:true})} type="radio" value="Pending" name="status"/>
                                <label className='mx-2'>Pending</label>
                                
                                <input className='mt-2' {...register("status",{required:true})} type="radio" value="Inprogress" name="status"/>
                                <label className='mx-2'>Inprogress</label> */}
                                                </div>
                                                {/* <span className='form-error-login'>
                                        {errors.status && "Select Status."}
                                    </span> */}
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className='d-flex justify-content-center align-items-center my-4'>
                                        <Button classNames='allbtncss' type='submit' btnName='Submit' onClick={onUpdate}></Button>
                                    </div>
                                </Form>
                            </div>
                            <FooterBar />
                        </div>

                    </div>
                </div>

            </section>

        </>
    )
}

export default InterviewUpdate