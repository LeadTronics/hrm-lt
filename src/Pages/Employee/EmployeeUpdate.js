import './Employee.css'
import React, { useState, useEffect } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import Topbar from '../../Components/Topbar/Topbar';
import Footer from '../../Components/Footer/Footer'
import Button from '../../Components/Button/Button';
import { useForm } from "react-hook-form";
import { EMPLOYEE_API } from '../../endpoint';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'
import Loaders from '../../Components/Hrmloader/Loader';
const UpdateEmployee = () => {
    const [Data, setData] = useState({});
    const { id } = useParams();
    const [Loader, setLoader] = useState();
    const navigate = useNavigate()


    useEffect(() => {
        setLoader(true)
        axios.get(EMPLOYEE_API + "/" + id, { headers: { "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}` } })
            .then(res => {
                if (res.status === 200) {
                    setData(res.data);
                    setLoader(false)
                    reset()
                } else {
                    console.log("error")
                    setLoader(true)
                }
            })
    }, [id])

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [selectedFile, setSelectedFile] = useState();
    const handleChange = (event) => {
        setSelectedFile(event.target.files[0])
    }
    const onSubmit = data => {
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
        for (var pair of formData.entries()) {
            console.log(pair[0] + ':' + pair[1]);
        }
        axios.put(EMPLOYEE_API + "/" + id, formData, { headers: { "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}` } })
            .then(res => {
                console.log(res)
                console.log(res.data)
                if (res.status === 201) {
                    navigate('/allemployee');
                    console.log(res)
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
                    <div className='empadd_card'>
                        <Row>
                            <Col className="perform_box">
                                <h5 className='perform_head'>Update Employee Details</h5>
                                {!Loader ?
                                    <Form onSubmit={handleSubmit(onSubmit)}>
                                        <Row>
                                            <Col lg="6" md="6" sm="12" className="my-2">
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        defaultValue={Data.employeeId}
                                                        type="text"
                                                        placeholder="employeeId"
                                                        {...register("empId", { required: true, maxLength: 10 })}
                                                    />
                                                    <div className='errortxt'>
                                                        {errors.empId && "Please Enter EmpID is Reuired"}
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                            <Col lg="6" md="6" sm="12" className="my-2">
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        defaultValue={Data.name}
                                                        type="text"
                                                        placeholder="name "
                                                        {...register("name", { required: true, maxLength: 20 })}
                                                    />
                                                    <div className='errortxt'>
                                                        {errors.name && "Please Enter Name is Reuired"}
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6" md="6" sm="12" className="my-2">
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        defaultValue={Data.email}
                                                        type="email"
                                                        placeholder="email"
                                                        {...register("email", { required: true })}
                                                    />
                                                    <div className='errortxt'>
                                                        {errors.email && "Please Enter Email is Reuired"}
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                            <Col lg="6" md="6" sm="12" className="my-2">
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        defaultValue={Data.phone}
                                                        type="number"
                                                        placeholder="phone "
                                                        {...register("phone", { required: true, maxLength: 10 })}
                                                    />
                                                    <div className='errortxt'>
                                                        {errors.phone && "Please Enter Phone is Reuired"}
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6" md="6" sm="12" className="my-2">
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        defaultValue={Data.designation}
                                                        type="text"
                                                        placeholder="designation"
                                                        {...register("designation", { required: true })}
                                                    />
                                                    <div className='errortxt'>
                                                        {errors.designation && "Please Enter Designation is Reuired"}
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                            <Col lg="6" md="6" sm="12" className="my-2">
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        defaultValue={Data.company}
                                                        type="text"
                                                        placeholder="company "
                                                        {...register("company", { required: true })}
                                                    />
                                                    <div className='errortxt'>
                                                        {errors.company && "Please Enter Company is Reuired"}
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6" md="6" sm="12" className="my-2">
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        defaultValue={Data.department}
                                                        type="text"
                                                        placeholder="department"
                                                        {...register("department", { required: true })}
                                                    />
                                                    <div className='errortxt'>
                                                        {errors.department && "Please Enter Department is Reuired"}
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                            <Col lg="6" md="6" sm="12" className="my-2">
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        defaultValue={Data.joiningDate}
                                                        type="date"
                                                        placeholder="joiningDate"
                                                        {...register("joiningDate", { required: true })}
                                                    />
                                                    <div className='errortxt'>
                                                        {errors.joiningDate && "Please Enter joiningDate is Reuired"}
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6" md="6" sm="12" className="my-2">
                                                {Data.profile}
                                                <input type="file" name='profile'
                                                    {...register("profile")}
                                                    onChange={handleChange}
                                                    className="form-control" placeholder="Upload Your CV here..."
                                                />
                                                <span className='errortxt'>
                                                    {errors.profile && "Please Upload Your CV."}
                                                </span>
                                            </Col>
                                            <Col lg="6" md="6" sm="12" className="my-2">
                                                <div className="mt-4" style={{ textAlign: 'justify' }}>
                                                    <label className='mx-2'>Select Gender </label>
                                                    <div className='d-flex mx-2'>
                                                        <input className='mt-2' defaultValue={Data.gender} {...register("gender", { required: true })} type="radio" />
                                                        <label className='mx-2'>Male</label>
                                                        <input className='mt-2' defaultValue={Data.gender}  {...register("gender", { required: true })} type="radio" />
                                                        <label className='mx-2'>Female</label>
                                                    </div>
                                                    <span className='errortxt my-4'>
                                                        {errors.gender && "Please Select Gender."}
                                                    </span>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Button classNames="allbtncss" type="submit" btnName="Submit" />
                                    </Form>
                                    :
                                    <Loaders />
                                }
                            </Col>
                        </Row>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default UpdateEmployee;

