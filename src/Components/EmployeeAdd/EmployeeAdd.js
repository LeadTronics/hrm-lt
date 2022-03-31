import './EmployeeAdd.css'
import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import Topbar from '../TopBar/Topbar';
import Footer from '../Footer/Footer'
import ScrolltoTop from '../ScrolltoTop/ScrolltoTop'
import Button from '../Button/Button';
import { useForm } from "react-hook-form";
import { EMPLOYEE_API } from '../../endpoint';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import axios from 'axios';

const EmployeeAdd = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [selectedFile, setSelectedFile] = useState();
    const handleChange = (event) => {
        console.log(event.target.files[0])
        setSelectedFile(event.target.files[0])
    }
    const onSubmit = data => {
        // console.log(data);
        const formData = new FormData();
        formData.append("empId", data.empId);
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("designation", data.designation);
        formData.append("company", data.company);
        formData.append("department", data.department);
        formData.append("joiningDate", data.joiningDate);
        formData.append("gender", data.gender);
        formData.append("profile", selectedFile);
        formData.append("status", data.status);

        for (var pair of formData.entries()) {
            console.log(pair[0] + ':' + pair[1]);
        }
        axios.post(EMPLOYEE_API, formData, { headers: { "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}` } })
            .then(res => {
                // console.log(res)
                if (res.status === 200) {
                    navigate('/allemployee');
                    swal({
                        position: 'centerd',
                        icon: 'success',
                        title: 'Employee Added Successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                else {
                    swal({
                        position: 'centerd',
                        icon: 'danger',
                        title: 'Employee is Not Added.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                reset();
            })
        reset();
    }
    return (
        <>
            <div style={{ backgroundColor: '#f1f4fb' }}>
                <Topbar />
                <div className='addemp_martop'>
                    <div className='addempForm-header my-4 text-center'>Add Employee </div>
                    <div className='empadd_card'>
                        <Row>
                            <Col className="perform_box">
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Row>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    name="empId"
                                                    type="text"
                                                    placeholder="Employee Id"
                                                    {...register("empId", { required: true, maxLength: 10 })} />
                                                <div className='errortxt'>
                                                    {errors.empId && "Please Enter EmpId."}
                                                    {errors?.empId?.type === "maxLength" && (
                                                        <p >EmpId cannot exceed 10 characters</p>
                                                    )}
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    name="name"
                                                    type="text"
                                                    placeholder="Name "
                                                    {...register("name", { required: true, maxLength: 50 })} />
                                                <div className='errortxt'>
                                                    {errors.name && "Please Enter Name."}
                                                    {errors?.name?.type === "maxLength" && (
                                                        <p>Name cannot exceed 50 characters</p>
                                                    )}
                                                </div>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <div className="md-form mb-0">
                                                <input name="email" {...register("email", { required: true, maxLength: 30, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email address" } })} type="email" className="form-control" placeholder='Your Email' />
                                                <span className='errortxt'>
                                                    {errors.email && errors.email.type === "required" && <span>Please Enter Email its required</span>}
                                                    {errors?.email?.type === "maxLength" && (
                                                        <p >Email cannot exceed 30 characters</p>
                                                    )}
                                                    {errors?.email?.type === "pattern" && (
                                                        <p>Please include an '@' to correct email</p>
                                                    )}
                                                </span>
                                            </div>
                                        </Col>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    name="phone"
                                                    type="number"
                                                    placeholder="Phone "
                                                    {...register("phone", { required: true, maxLength: 10, pattern: [0 - 9] })} />
                                                <div className='errortxt'>
                                                    {errors.phone && "Please Enter Phone."}
                                                    {errors?.phone?.type === "maxLength" && (
                                                        <p>Phone cannot exceed 10 characters</p>
                                                    )}
                                                </div>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <select className="form-control" name="designation"  {...register("designation", { required: true })}>
                                                <option name="designation" value="">Select Designation </option>
                                                <option name="designation" value="Software Developer" >Software Developer</option>
                                                <option name="designation" value="Digital Marketing Director">Digital Marketing Director</option>
                                                <option name="designation" value="Graphics Designer">Graphics Designer</option>
                                                <option name="designation" value="Content Writer">Content Writer</option>
                                                <option name="designation" value="Lead Generation Executive">Lead Generation Executive</option>
                                                <option name="designation" value="Demand Generation Executive">Demand Generation Executive</option>
                                                <option name="designation" value="Sales Executive">Sales Executive</option>
                                                <option name="designation" value="FullStack Developer">FullStack Developer</option>
                                                <option name="designation" value="Email Marketing Executive">Email Marketing Executive</option>
                                                <option name="designation" value="Digital Marketing Executive">Digital Marketing Executive</option>
                                                <option name="designation" value="HR">HR</option>
                                            </select>
                                            <span className='errortxt'>
                                                {errors.designation && "Please Fill Designation."}
                                            </span>
                                        </Col>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    name="company"
                                                    type="text"
                                                    placeholder="company"
                                                    {...register("company", { required: true, maxLength: 50 })} />
                                                <div className='errortxt'>
                                                    {errors.company && "Please Enter company."}
                                                    {errors?.company?.type === "maxLength" && (
                                                        <p>company cannot exceed 50 characters</p>
                                                    )}
                                                </div>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <select className="form-control" name="department"  {...register("department", { required: true })}>
                                                <option name="department" value="">Select Department</option>
                                                <option name="department" value="IT" >IT</option>
                                                <option name="department" value="Digital Marketing">Digital Marketing</option>
                                                <option name="department" value="Quality Analyst">Quality Analyst</option>
                                                <option name="department" value="Sales">Sales</option>
                                                <option name="department" value="Operations">Operations</option>
                                            </select>
                                            <span className='errortxt'>
                                                {errors.company && "Please Fill Department."}
                                            </span>
                                        </Col>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    name="joiningDate"
                                                    type="date"
                                                    {...register("joiningDate", { required: true })} />
                                                <div className='errortxt'>
                                                    {errors.joiningDate && "Please Select JoiningDate."}
                                                </div>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <label className='d-flex mx-2'>Profile Photo</label>
                                            <input name='profile' type="file" {...register("profile", { required: true })} className="form-control" placeholder="Upload Your CV here..." onChange={handleChange}
                                            />
                                            <div className='errortxt'>
                                                {errors.profile && "Please Select Profile."}
                                            </div>
                                        </Col>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <div className="mt-4" style={{ textAlign: 'justify' }}>
                                                <label className='mx-2'>Select Gender </label>
                                                <div className='d-flex mx-2'>
                                                    <input className='mt-2' {...register("gender", { required: true })} type="radio" value="male" name="gender" />
                                                    <label className='mx-2'>Male</label>
                                                    <input className='mt-2' {...register("gender", { required: true })} type="radio" value="female" name="gender" />
                                                    <label className='mx-2'>Female</label>
                                                </div>
                                                <div className='errortxt'>
                                                    {errors.gender && "Please Select Gender."}
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Button classNames="allbtncss" type="submit" btnName="Submit" />
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </div>
                <ScrolltoTop />
                <Footer />
            </div>
        </>
    )
}
export default EmployeeAdd;









