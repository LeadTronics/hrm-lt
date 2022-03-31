import './EmployeeAdd.css'
import React, { useState, useEffect } from 'react';
import { Form } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import Topbar from '../TopBar/Topbar';
import Footer from '../Footer/Footer'
import ScrolltoTop from '../ScrolltoTop/ScrolltoTop'
import Button from '../Button/Button';
import { useForm } from "react-hook-form";
import { EMPLOYEE_API } from '../../endpoint';
import axios from 'axios';
import {useParams } from 'react-router-dom'
const UpdateEmployee = () => {
    const [Data, setData] = useState();
    const { id } = useParams();

    useEffect(() => {
        axios.get(EMPLOYEE_API + "/" + id,{ headers: {"Authorization" : `Bearer ${JSON.parse(localStorage.getItem('token'))}`} })
      .then(res => {
          console.log(res.data);
          setData(res.data);
      })
      .catch(err =>{
          console.log(err)
      })
    }, [id])
    
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
                if (res.status === 201) {
                    console.log(res)
                }
                reset();
            })
        reset();
    }
    return (
        <>
            <div style={{ backgroundColor: '#f1f4fb'}}>
                <Topbar />
                <div className='addemp_martop'>
                    <div className='empadd_card'>
                    <Row>
                            <Col className="perform_box">
                                <h5 className='perform_head'>Add Employee Details</h5>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Row>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    name="empId"
                                                    type="number"
                                                    placeholder="employeeId"
                                                    // defaultValue={Data.employeeId}
                                                    {...register("empId", { required: true, maxLength: 5 })}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    name="name"
                                                    type="text"
                                                    placeholder="name "
                                                    defaultValue={Data.name}
                                                    {...register("name", { required: true, maxLength: 20 })}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    name="email"
                                                    type="email"
                                                    placeholder="email"
                                                    defaultValue={Data.email}
                                                    {...register("email", { required: true })}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    name="phone"
                                                    type="number"
                                                    placeholder="phone "
                                                    defaultValue={Data.phone}
                                                    {...register("phone", { required: true, maxLength: 10 })}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    name="designation"
                                                    type="text"
                                                    placeholder="designation"
                                                    defaultValue={Data.designation}
                                                    {...register("designation", { required: true })}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    name="company"
                                                    type="text"
                                                    placeholder="company "
                                                    defaultValue={Data.company}
                                                    {...register("company", { required: true })}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    name="department"
                                                    type="text"
                                                    placeholder="department"
                                                    defaultValue={Data.department}
                                                    {...register("department", { required: true })}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    name="joiningDate"
                                                    type="date"
                                                    placeholder="joiningDate"
                                                    defaultValue={Data.joiningDate}
                                                    {...register("joiningDate", { required: true })}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <label className='d-flex mx-2'>Profile Photo</label>
                                            <input name='profile' type="file" defaultValue={Data.profile} {...register("profile")} className="form-control" placeholder="Upload Your CV here..." onChange={handleChange}
                                            />
                                            <span className='form-error-login'>
                                                {errors.profile && "Please Upload Your CV."}
                                            </span>
                                        </Col>
                                        <Col lg="6" md="6" sm="12" className="my-2">
                                            <div className="mt-4" style={{ textAlign: 'justify' }}>
                                                <label className='mx-2'>Select Gender </label>
                                                <div className='d-flex mx-2'>
                                                    <input className='mt-2' defaultValue={Data.gender} {...register("gender", { required: true })} type="radio" value="male" name="gender" />
                                                    <label className='mx-2'>Male</label>
                                                    <input className='mt-2' defaultValue={Data.gender} {...register("gender", { required: true })} type="radio" value="female" name="gender" />
                                                    <label className='mx-2'>Female</label>
                                                </div>
                                                <span className='form-error-login my-4'>
                                                    {errors.gender && "Please Select Gender."}
                                                </span>
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
export default UpdateEmployee;









