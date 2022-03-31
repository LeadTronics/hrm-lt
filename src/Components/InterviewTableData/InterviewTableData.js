import React, { useState, useEffect } from "react";
import "./InterviewTableData.css";
import { FaUserEdit } from "react-icons/fa";
import { AiOutlineDelete, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import user from "../../img/Interviewer_IMG/user.png";
import { Link } from "react-router-dom";
import FooterBar from "../../Components/Footer/Footer";
import Topbar from "../TopBar/Topbar";
import Form from "react-bootstrap/Form";
import axios from "axios";
import swal from "sweetalert";
import Button from "../Button/Button";
import Pagination from "../Pagination/Pagination";
import { INTERVIEW_LIST } from "../../endpoint";
import { useNavigate } from "react-router-dom";
const InterviewTableData = () => {
  const navigate = useNavigate()
  //Api Calling for
  const [data, setData] = useState([]);
  // const [status,setStatus]= useState([]);
  useEffect(() => {
    axios
      .get(INTERVIEW_LIST, { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` } })
      .then((res) => {
        console.log(res.data.status);
        setData(res.data);
        // setStatus(res.data.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //delete data
  const onDelete = (_id) => {
     axios.delete(`${INTERVIEW_LIST}/${_id}`,{ headers: {"Authorization" : `Bearer ${JSON.parse(localStorage.getItem('token'))}`} })
    .then(res => {
      // console.log(res);
      // console.log(res.data._id);
      if(res.data.message === "Record Deleted Successfully")
      {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this information!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            navigate('/interviewtabledata'); 
            swal("Record has been deleted!", {
              icon: "success",
            });
          } else {
            swal("Your imaginary file is safe!");
          }
        });
      }
    })
  };
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
  //For show entry
  const [postsPerPage, setpostPerPage] = useState(10);
  // downLoad CV
  const DownloadCV = () => {
    window.open(
      "https://b2badminbucket.s3.ap-south-1.amazonaws.com/whitepapers/7+actions+businesses+need+to+take+now.pdf",
      "_blank"
    );
  };
  //download Photo
  const DownloadPhoto = () => {
    window.open(
      "https://b2badminbucket.s3.ap-south-1.amazonaws.com/whitepaperCover/10-habits-sales-Professionals-1631697596466.jpg",
      "_blank"
    );
  };

  //pagination
  var dataLimit = postsPerPage;
  var pageLimit = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return searchItems.slice(startIndex, endIndex);
  };
// const nextbtn =()=>{
//   if( postsPerPage!==  data.length)
//   {
//       console.log('No Data Found');
//   }
// }
     //check filter
    //  const [searchInputStatus, setSearchInputstatus] = useState("");
    //  data.searchItems.filter((item) => {
    //   if (setSearchInputstatus === "Hired") {
    //     console.log("hired");
    //     return Object.values(item)
    //     .join("")
    //     .toLowerCase()
    //     .includes(searchInputStatus.toLowerCase());
    //   } else {
    //     return item;
    //   }
    // });

    // ==============================
    const arr =[
      {
      designation:"Software",
      status:"Hired"
      },
      {
        designation:"Lead Generation",
        status:"Schedule"
      },
      {
        designation:"Fullstack Developer",
        status:"Rejected"
      }
  ]
  //=====================
  console.log(arr.designation);
  const FilterData = (event) => {
  const Allfilt =arr;
     console.log(Allfilt);

  const filtSche= arr.filter(function(arr) {
      return arr.status === "Schedule" });
      console.log(filtSche);
  
  const filtHire= arr.filter(function(arr){
      return arr.status === "Hired"});
      console.log(filtHire);

  const filtRej= arr.filter(function(arr){
      return arr.status === "Rejected"});
      console.log(filtRej);
  }
//==========================
  // const data1 = ["Hired","Schedule","Rejected"];
  //    const setSearchItems = useState(data);
  //    //console.log(setSearchItems);
  //    const FilterData = (event) => {
  //      console.log(setSearchItems);
  //        switch (event) { 
  //            case "All":
  //               const AllDataresult =data1;
  //              // setSearchItems(AllDataresult)
  //               return console.log(AllDataresult);
  //            case "Hired":
  //                const result = ((status) => status ==="Hired");
  //                setSearchItems(result)
  //                return console.log(result);
  //            case "Schedule":
  //                const result2 = data1.filter((status)=>status ==="Schedule");
  //                //setSearchItems(result2)
  //                return console.log(result2);
  //           case "Rejected":
  //               const result3= data1.filter((status)=> status ==="Rejected");
  //               //setSearchItems(result3)
  //               return console.log(result3);
  //            default:
  //        }
  //    }
  const interviewDateFilter =(event)=>{
    switch (event) {
      
    }
  };
   const DesignationFilter=(event)=>{
    switch (event) {

    }
   };
  return (
    <>
      <div className="interviewSchedule">
        <Topbar />
        <div className="row Interview_List">
          <div className="Heading_interview">
            <div className="intTable-header my-4 text-center">
              Interview Schedule Table{" "}
            </div>
            <div className="card">
              <div className="table-responsive">
                <table className="table mb-0 text-nowrap table-hover allint_table">
                  <thead>
                    <tr>
                      <td colSpan={1}>
                        <label>Show Entries</label>
                        <Form.Select
                          className="Table-entry"
                          value={postsPerPage}
                          onChange={(e) => {
                            setpostPerPage(Number(e.target.value));
                          }}
                        >
                          {[10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                              {pageSize}
                            </option>
                          ))}
                        </Form.Select>
                      </td>
                      <td colSpan={5}></td>
                      <td colSpan={2}>
                        <form>
                          <div className="d-flex justify-content-center align-items-center">
                            <input
                              type="search"
                              placeholder="Search"
                              className="form-control mx-2 searchbox"
                              aria-label="Search"
                              onChange={(e) => setSearchInput(e.target.value)}
                              style={{ verticalAlign: "none" }}
                            />
                          </div>
                        </form>
                      </td>
                      <td colSpan={1}>              
                      </td>
                      <td colSpan={2}>
                      <Link to="/interview_schedule">
                          <Button
                            classNames="allbtncss"
                            btnName="+ Add Interview"
                          ></Button>
                        </Link>
                      </td>
                      <td colSpan={1}></td>
                    </tr>
                    {/* filter */}
                    <tr>
                      <td colSpan={1}></td>
                      <td colSpan={1}></td>
                      <td colSpan={1}></td>
                      <td colSpan={1}></td>
                      <td colSpan={1}></td>
                      <td colSpan={1}></td>
                      <td colSpan={1}>
                      <form>
                          <div className="d-flex justify-content-center align-items-center">
                            <input
                              type="search"
                              placeholder="Designation"
                              className="form-control mx-2 searchbox"
                              aria-label="Search"
                              onChange={(e) => setSearchInput(e.target.value)}
                              style={{ verticalAlign: "none" }}
                            />
                          </div>
                        </form>
                      </td>
                      <td colSpan={1}></td>
                      <td colSpan={1}>
                      <form>
                          <div className="d-flex justify-content-center align-items-center">
                            <input
                              type="search"
                              placeholder="Status"
                              className="form-control mx-2 searchbox"
                              aria-label="Search"
                              onChange={(e) => setSearchInput(e.target.value)}
                              style={{ verticalAlign: "none" }}
                            />
                          </div>
                        </form>
                      </td>
                      <td colSpan={3}>Action</td>
                    </tr>
                    <tr>
                      <th className="tab_head text-center" scope="col">
                        Sr. No
                      </th>
                      <th className="tab_head text-center" scope="col">
                        Name / Email
                      </th>
                      <th className="tab_head text-center" scope="col">
                        Phone Number
                      </th>
                      <th className="tab_head text-center" scope="col">
                        gender
                      </th>
                      {/* <th className="tab_head text-center" scope="col">
                        Year Of Exp
                      </th> */}
                      <th className="tab_head text-center d-flex" scope="col">
                        Date Of Interview
                      <div className="d-flex align-items-center">
                       <select
                         className="form-select select-filter"
                         id="order-sort"
                         onChange={(e) => interviewDateFilter(e.target.value)}
                       >
                         {/* <option value="01">Jan</option>
                         <option value="02">Feb</option>
                         <option value="03">Mar</option>
                         <option value="04">Apr</option>
                         <option value="05">May</option>
                         <option value="06">June</option> */}
                       </select>
                      </div>
                      </th>
                      <th className="tab_head text-center" scope="col">
                        Time Of Interview
                      </th>
                      {/* <th className="tab_head text-center" scope="col">
                        Department
                      </th> */}
                      <th className="tab_head text-center d-flex" scope="col">
                        Designation
                      <div className="d-flex align-items-center">
                       <select
                         className="form-select select-filter"
                         id="order-sort"
                         onChange={(e) => DesignationFilter(e.target.value)}
                       >
                         <option value="Software Developer">Software Developer</option>
                         <option value="Lead Generation Executive">Lead Generation Executive</option>
                         <option value="Demand Generation Executive">Demand Generation Executive</option>
                         <option value="Sales Executive">Sales Executive</option>
                         <option value="FullStack Developer">FullStack Developer</option>
                         <option value="Email Marketing Executive">Email Marketing Executive</option>
                          <option value="Digital Marketing Executive">Digital Marketing Executive</option> 
                       </select>
                      </div>
                      </th>
                      <th className="tab_head text-center" scope="col">
                        CV
                      </th>
                      <th className="tab_head text-center d-flex" scope="col">
                        Status
                        <div className="d-flex align-items-center">
                            <label className=" text-nowrap  me-2 text-white">Sort orders:</label>
                                <select className="form-select select-filter" id="order-sort" onChange={(e) => FilterData(e.target.value)} >
                                    <option value="All">All</option>
                                    <option value="Hired">Hired</option>
                                    <option value="Schedule">Schedule</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                        </div>
                      </th>
                      <th colSpan={2} className="text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  {/*------------------- table body------------ */}
                  <tbody>
                       {/* Table lenght empty condition loader */}
                       {data.length === 0 ? <div className="loader_table"></div> :""}  
                    {getPaginatedData().map((item,i) => {
                      return (
                        <>
                          <tr className="border-bottom">
                            <td>
                              <div className=" me-3" key={i}>
                                <span
                                  className="mt-2 text-center"
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "500",
                                  }}
                                >
                                  {i+1}
                                </span>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex">
                                <img
                                  className="allin_tabpro mx-2"
                                  src={user}
                                  alt="img"
                                  onClick={DownloadPhoto}
                                />
                                <div className="me-3 mt-1 d-block">
                                  <h6 className="mb-0 fs-13 font-weight-semibold">
                                    {item.name}
                                  </h6>
                                  <div className="clearfix"></div>
                                  <small className="text-muted">
                                    {item.email}
                                  </small>
                                </div>
                              </div>
                            </td>
                            <td className="text-left fs-13">{item.phone}</td>
                            <td className="text-left fs-13">
                              <span className="me-1"></span>
                              {item.gender}
                            </td>
                            {/* <td className="text-left fs-13">
                                <span className="me-1"></span>
                                {item.Year_of_exp}
                              </td> */}
                            <td className="text-left fs-13">
                              <span className="me-1"></span>
                              {item.interviewDate}
                            </td>
                            <td className="text-left fs-13">
                              <span className="me-1"></span>
                              {item.interviewTime}
                            </td>
                            {/* <td className="text-left fs-13">
                                <span className="me-1"></span>
                                {item.Department}
                              </td> */}
                            <td className="text-left fs-13">
                              <span className="me-1"></span>
                              {item.designation}
                            </td>
                            <td className="text-left fs-13">
                              {/* {item.resume} */}
                              <span
                                href="https://b2badminbucket.s3.ap-south-1.amazonaws.com/whitepapers/7+actions+businesses+need+to+take+now.pdf"
                                className="mx-4 btn btn-primary badge bg-info"
                                target="_blank"
                                onClick={DownloadCV}
                                download
                              >
                                DOWNLOAD
                              </span>
                            </td>
                            <td className="text-left fs-13">
                              {/* <span className="me-1 Status_interview badge bg-success">
                                  {item.status}
                                  style={{ backgroundColor: data.bgColor }} //important
                                </span> */}
                              <button className="me-1 Status_interview badge bg-success bg-opacity-60 bg-lighten-xl">
                                {item.status}
                              </button>
                            </td>
                            <td className="text-end">
                              <Link to={"/interviewupdate/"+item._id}>
                                <span className="action-button tableupdate_icon me-2">
                                  <FaUserEdit/>
                                </span>
                              </Link>
                              <span className="action-button tabledel_icon me-2">
                                <AiOutlineDelete
                                  onClick={() => onDelete(item._id)}
                                />
                              </span>
                              <span className="action-button btn-mail1 me-2">
                                <a href={`mailto:${item.email}`}>
                                  <AiOutlineMail />
                                </a>
                              </span>
                              <span className="action-button btn-call1 me-2">
                                <a href={`tel:${item.phone}`}>
                                  <BiPhoneCall />
                                </a>
                              </span>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                    {/* {dataLimit.length===0 ? true : false} */}
                  </tbody>
                </table>
              </div>

              <div className="row mt-4">
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
                    {/* Pagination */}
                    {data.length < 10 ? (
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
            <FooterBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default InterviewTableData;
