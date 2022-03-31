import './EmployeeList.css';
import React, { useState, useEffect } from "react";
import{FaUserEdit} from 'react-icons/fa'
import{AiOutlineMail} from 'react-icons/ai'
import{BiPhoneCall} from 'react-icons/bi'
import Button from '../Button/Button'
import { Link } from 'react-router-dom';
import Topbar from '../TopBar/Topbar';
import Footer from '../Footer/Footer'
import Pagination from "../Pagination/Pagination";
import Form from "react-bootstrap/Form";
import ScrolltoTop from '../ScrolltoTop/ScrolltoTop';
import axios from "axios";
import {EMPLOYEE_API} from '../../endpoint'
import EmpDelete from '../EmployeeAdd/EmpDelete';

const EmployeeList =()=>{
//GET Api Call
  const [data, setData] = useState([]);
  // const[departmentapi,setApidepartment] = useState([]);

// GET Api Calling for
  useEffect(() => {
    axios.get(EMPLOYEE_API, { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`} })
      .then((res) => {
        setData(res.data);
        // setApidepartment(res.data.department);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Search data filter from table API Data
  const [searchInput, setSearchInput] = useState("");
  const searchItems = data.filter((item) => {
    if (searchInput !== "") {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    } else {
      return item;
    }
  });

  //pagination
  const [postsPerPage, setpostPerPage] = useState(10);
  var dataLimit = postsPerPage;
  var pageLimit = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return searchItems.slice(startIndex, endIndex);
  };
  console.log(searchItems)

  //Department filter
  const setSearchItems = useState(data);
  const FilterData = (event) => {
    console.log(data);
      switch (event) {
          case "All":
              const AllData = data;
              setSearchItems(AllData)
              return console.log(AllData);
          case "IT":
              const result = data.filter(word => word.status === "IT");
              setSearchItems(result)
              return console.log(result);
          case "Sales":
              const result2 = data.filter(word => word.status === "Sales");
              setSearchItems(result2)
              return console.log(result2);
          case "Digital Marketing":
              const result3 = data.filter(word => word.status === "Digital Marketing");
              setSearchItems(result3)
              return console.log(result3);
          case "Quality Analyst":
              const result4 = data.filter(word => word.status === "Quality Analyst");
              setSearchItems(result4)
              return console.log(result4);
          default:
      }
  }

    return(
        <>
        <div style={{backgroundColor:'#f1f4fb'}}>
            <Topbar/>          
            <div className='row' style={{margin:'1% 2%',paddingTop:'7%'}}>
            <div className="intTable-header my-4 text-center">Employees List </div>
                <div className='col-lg-12 col-md-12 col-sm-12 perform_box'> 
                <div className='row'>
                    <div className='col-lg-3 mb-4'>
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
                    <div className='col-lg-3 mb-4'></div>
                    <div className='col-lg-3 mb-4'>
                    <div className="" >                
                    <Link to="/addemployee"><Button classNames="allbtncss" btnName="+ Add Employee"/></Link>
                    </div>
                    </div>
                    <div className='col-lg-3 mb-4'>
                        <form>
                            <input className='allemp_searchinput' type='search' placeholder='Search...'
                            onChange={(e) => setSearchInput(e.target.value)}/>
                         </form>
                    </div>
                  </div>  
                     {/*Filters Here  */}
                  <div className='row'>
                    <div className='col-lg-3 mb-4'>
                      <form>
                        <input className='allemp_searchinput' type='search' placeholder='Search by Designation'
                            onChange={(e) => setSearchInput(e.target.value)}/>
                      </form>
                    </div>
                    <div className='col-lg-3 mb-4'>
                      <Form.Select onClick={FilterData()} >
                          <option>Select Department</option>
                          <option value="IT">IT</option>
                          <option value="Sales">Sales</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="Quality Analyst">Quality Analyst</option>
                          <option value="Operations">Operations</option>   
                      </Form.Select>
                    </div>                 
                    <div className='col-lg-3 mb-4'>
                      <Form.Select>
                          <option>Select Company</option>
                          <option value="RDIGS">RDIGS</option>
                          <option value="LeadTronics">LeadTronics</option>
                      </Form.Select>
                    </div>
                    <div className='col-lg-3 mb-4'>
                    Date
                    </div>
                  </div>
                    <div className="table-responsive">
                        <table className="table mb-0 text-nowrap table-hover allint_table">
                            <thead>
                                <tr style={{textAlign:'justify'}}>
                                    <th className='tab_head' scope="col">Sr.</th>
                                    <th className='tab_head' scope="col">Name</th>
                                    <th className='tab_head' scope="col">Emp ID</th>
                                    <th className='tab_head' scope="col">Department</th>    
                                    <th className='tab_head'scope="col">Designation</th>
                                    <th className='tab_head'scope="col">Company</th>
                                    <th className='tab_head' scope="col">Phone Number</th>
                                    <th className='tab_head' scope="col">Join Date</th>
                                    <th className='tab_head' scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                              {/* Table lenght empty condition loader */}
                                {data.length === 0 ? <div className="loader_table"></div> :""}                      
                            {getPaginatedData().map((item, i) => {
                                return (
                                    <>                
                                      <tr className="border-bottom" style={{textAlign:'justify'}} key={i}>
                                            <div className="" style={{padding:'20px'}}>
                                               {i+1}
                                            </div>
                                            <td>
                                            <div className="d-flex" style={{textAlign:'justify'}}>
                                                <img className='allemp_tabpro mx-2' src={item.profile} alt="tabprofile"/>
                                                <div className="mx-2 d-block">
                                                <h6 className="mb-0 fs-13 font-weight-semibold">{item.name}</h6>
                                                <div className="clearfix"></div>
                                                <small className="text-muted">{item.email}</small>
                                                </div>
                                            </div>
                                            </td>
                                            <td className="text-left fs-13">{item.employeeId}</td>
                                            <td className="text-left fs-13"><span className='me-1'></span>{item.department}</td>
                                            <td className="text-left fs-13"><span className='me-1'></span>{item.designation}</td>
                                            <td className="text-left fs-13"><span className='me-1'></span>{item.company}</td>
                                            <td className="text-left fs-13"><span className='me-1'></span>{item.phone}</td>
                                            <td className="text-left fs-13"><span className='me-1'></span>{item.joiningDate}</td>
                                            <td className="text-end">
                                            <Link to={"/update-emp/"+item._id}>
                                                <span className="action-button tableupdate_icon me-2"><FaUserEdit /></span>
                                            </Link>
                                                <EmpDelete id={item._id} />
                                                <a href={`mailto:${item.email}`}>
                                                    <span className="action-button btn-mail1 me-2">                                    
                                                      <AiOutlineMail />
                                                    </span>
                                                </a>
                                                <a href={`tel:${item.phone}`}>
                                                  <span className="action-button btn-call1 me-2">
                                                      <BiPhoneCall />
                                                  </span>
                                                </a>
                                            </td>
                                        </tr>
                                    </>
                                   );
                                })}
                            </tbody>
                          </table>                         
                    </div>
                    {/* Pagination */}
                    <div className='row mt-4'>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                    <div
                        className="dataTables_info d-flex"
                        id="DataTables_Table_0_info"
                        role="status"
                        aria-live="polite"
                    >
                    Showing 1 to {postsPerPage} of {data.length} entries
                  </div>
                </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="Pagination-div">
                                {data.length > 3 ? (
                                <Pagination
                                    setCurrentPage={setCurrentPage}
                                    dataLimit={dataLimit}
                                    currentPage={currentPage}
                                    pageLimit={pageLimit}
                                    length={data.length}
                                />
                                ) : (
                                ""
                                )}
                        </div>
                    </div>
                </div>                     
            </div>
        </div>
        <ScrolltoTop/>
        <Footer />
    </div>
    </>
    )
}
export default EmployeeList;