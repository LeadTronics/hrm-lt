import React, { useState } from 'react'
import './InterviewSchedule.css';
import { Row, Col, Form } from 'react-bootstrap';
import Button from '../Button/Button';
import { useForm } from "react-hook-form";
import Topbar from '../TopBar/Topbar';
import FooterBar from '../Footer/Footer'
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import { INTERVIEW_LIST } from '../../endpoint';
const InterviewSchedule = () => {
    const navigate = useNavigate()
    // const email = register("email");

    // for CV and Resume
    const [selectedFile, setSelectedFile] = useState();

    //For file upload set the value of variable
    const handleChange = (event) => {
        console.log(event.target.files[0])
        setSelectedFile(event.target.files[0])
    }
    // useform Logic
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("gender", data.gender);
        formData.append("resume", selectedFile);
        formData.append("designation", data.designation);
        // formData.append("year_of_experience",data.year_of_experience);
        formData.append("date", data.date);
        formData.append("time", data.time);
        // formData.append("photo",selectedImage);
        formData.append("status", data.status);
        for (const pair of formData.entries()) {
            console.log(pair[0] + ':' + pair[1]);
        }
        axios.post(INTERVIEW_LIST, formData, { headers: { "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}` } })
            .then(res => {
                if (res.data.error !== 'Error: PDF Only!') {
                    navigate('/interviewtabledata');
                    swal({
                        position: 'centerd',
                        icon: 'success',
                        title: 'Interview Schedule Successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                else {
                    swal({
                        position: 'centerd',
                        icon: 'danger',
                        title: 'Interview is Not Schedule.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                reset();
            })
    }
    return (
        <section className='interviewSchedule'>
            <div>
                <Topbar />
                <div className='row Interview_Form'>
                    <div className='Heading_interview_Form'>
                        <div className='intScheduleForm-header my-4 text-center'>Interview Schedule Form </div>
                        <div className="card">
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                    <Col lg="6" md="6" sm="12" className="my-2">
                                        <div className="md-form mb-0">
                                            <label className='d-flex mx-2'>Name</label>
                                            <input name='name' type="text" {...register("name", { required: true, maxLength: 20 })} className="form-control" placeholder='Your Name'
                                            />
                                            <span className='form-error-login'>
                                                {errors.name && "Please Enter Name."}
                                            </span>
                                        </div>
                                    </Col>
                                    <Col lg="6" md="6" sm="12" className="my-2">
                                        <div className="md-form mb-0">
                                            <label className='d-flex mx-2'>Email</label>
                                            <input name="email" {...register("email", { required: true, maxLength: 30, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email address" } })} type="email" className="form-control" placeholder='Your Email' />

                                            <span className='form-error-login'>
                                                {errors.email && errors.email.type === "required" && <span>Please enter email this is required</span>}
                                                {errors?.email?.type === "maxLength" && (
                                                    <p >email cannot exceed 30 characters</p>
                                                )}
                                                {errors?.email?.type === "pattern" && (
                                                    <p>Enter correct email including @</p>
                                                )}
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="6" md="6" sm="12" className="my-2">
                                        <div className="md-form">
                                            <label className='d-flex mx-2'>Number</label>
                                            <input name='phone' type="number" {...register("phone", { required: true, minLength: 10, maxLength: 12 })} className="form-control" placeholder='Your Phone number' />
                                            <span className='form-error-login'>
                                                {errors.phone && "Please Enter Your Number."}
                                                {errors?.phone?.type === "maxLength" && (
                                                    <p >Number cannot exceed 12 characters</p>
                                                )}
                                            </span>
                                        </div>
                                    </Col>
                                    <Col lg="6" md="6" sm="12" className="my-4" style={{ textAlign: 'justify' }}>
                                        <label className='mx-2'>Select Gender </label>
                                        <div className='d-flex mx-2'>
                                            <input className='mt-2' {...register("gender", { required: true })} type="radio" value="male" name="gender" />
                                            <label className='mx-2'>Male</label>
                                            <input className='mt-2' {...register("gender", { required: true })} type="radio" value="female" name="gender" />
                                            <label className='mx-2'>Female</label>
                                        </div>
                                        <span className='form-error-login my-4'>
                                            {errors.gender && "Please Select Gender."}
                                        </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="6" md="6" sm="12" className="my-2">
                                        <div className="md-form mb-0">
                                            <label className='d-flex mx-2'>Position</label>
                                            <select className="form-control" name="designation"  {...register("designation", { required: true })} placeholder="Position Applying For" >
                                                <option name="designation" value="">Select Position</option>
                                                <option name="designation" value="Software Devaloper" >Software Developer</option>
                                                <option name="designation" value="Lead Generation Executive">Lead Generation Executive</option>
                                                <option name="designation" value="Demand Generation Executive">Demand Generation Executive</option>
                                                <option name="designation" value="Sales Executive">Sales Executive</option>
                                                <option name="designation" value="FullStack Developer">FullStack Developer</option>
                                                <option name="designation" value="Email Marketing Executive">Email Marketing Executive</option>
                                                <option name="designation" value="Digital Marketing Executive">Digital Marketing Executive</option>
                                                <option name="designation" value="HR">HR</option>
                                            </select>
                                            <span className='form-error-login'>
                                                {errors.designation && "Please Fill Position."}
                                            </span>
                                        </div>
                                    </Col>
                                    {/* <Col lg="6" md="6" sm="12" className="my-2">
                                <div className="md-form mb-0">
                                    <div className="form-group">
                                        <label className='d-flex mx-2'>Year Of Experience</label>
                                        <select className="form-control" name="year_of_experience" {...register("year_of_experience",{required:true})} placeholder="year_of_experience" >
                                            <option value="1">0-1</option>
                                            <option value="2">1-2</option>
                                            <option value="3">2-3</option>
                                            <option value="3">3-4</option>
                                            <option value="3">4-5</option>
                                            <option value="3">5+</option>
                                        </select>
                                        <span className='form-error-login'>
                                            {errors.year_of_experience && "Please Fill Year of Experience."}
                                        </span>
                                    </div>
                                </div>
                            </Col> */}
                                </Row>
                                <h4 className='text-center'>Interview Details</h4>
                                <Row>
                                    <Col lg="6" md="6" sm="12" className="my-2">
                                        <div className="md-form">
                                            <label className='d-flex mx-2'>Interview Date</label>
                                            <input name='date' type="date" {...register("date", { required: true })} className="form-control" placeholder='Your Interview Date' />
                                            <span className='form-error-login'>
                                                {errors.date && "Please Fill Interview Date."}
                                            </span>
                                        </div>
                                    </Col>
                                    <Col lg="6" md="6" sm="12" className="my-2">
                                        <div className="md-form">
                                            <label className='d-flex mx-2'>Interview Time</label>
                                            <input name='time' type="time" {...register("time", { required: true })} className="form-control" placeholder='Your Interview Time' />
                                            <span className='form-error-login'>
                                                {errors.time && "Please Select Interview Time."}
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="6" md="6" sm="12" className="my-2">
                                        <div className="md-form">
                                            <label className='d-flex mx-2'>Interviewers CV</label>
                                            <input name='resume' type="file" {...register("resume", { required: true })} className="form-control" placeholder="Upload Your CV here..." onChange={handleChange}
                                            />
                                            <span className='form-error-login'>
                                                {errors.resume && "Please Upload Your CV."}
                                            </span>
                                        </div>
                                    </Col>
                                    <Col lg="6" md="6" sm="12" className="my-2">
                                        {/* <div className="md-form mb-0">
                                    <label className='d-flex mx-2'>Status</label>
                                        <select className="form-control" name="status"  {...register("status",{required:true})} placeholder="Position Applying For" >
                                            <option name="status" value="Select Status">Select Status</option>
                                            <option name="status" value="Hired">Hired</option>
                                            <option name="status" value="Rejected">Rejected</option>
                                            <option name="status" value="Schedule">Schedule</option>
                                        </select>
                                     <span className='form-error-login'>
                                         {errors.designation && "Please Fill Position."}
                                     </span>
                                </div> */}
                                    </Col>
                                </Row>
                                {/* <Row>
                           <Col lg="12" md="12" sm="12" className="my-2">
                              
                                  <div className="md-form">
                                <div className=''>
                                <label className='mx-2'>Status:</label>
                               
                                <input className='mt-2' {...register("status",{required:true})} type="radio" value="Active" name="status"/>
                                <label className='mx-2 '>Active</label>
                                
                                <input className='mt-2' {...register("status",{required:true})} type="radio" value="Hired" name="status"/>
                                <label className='mx-2'>Inactive</label>
                                
                                <input className='mt-2' {...register("status",{required:true})} type="radio" value="Schedule" name="status"/>
                                <label className='mx-2'>Pending</label>
                                
                                <input className='mt-2' {...register("status",{required:true})} type="radio" value="Rejected" name="status"/>
                                <label className='mx-2'>Inprogress</label>
                                </div>
                                    <span className='form-error-login'>
                                        {errors.status && "Select Status."}
                                    </span>
                                </div>
                            </Col> 
                        </Row>  */}
                                <div className='d-flex justify-content-center align-items-center my-4'>
                                    <Button classNames='allbtncss' type='submit' btnName='Submit'></Button>
                                </div>
                            </Form>
                        </div>
                        <FooterBar />
                    </div>

                </div>
            </div>

        </section>
    )
}

export default InterviewSchedule;