import React, { useState } from 'react'
import '../../css/findtalent.css'
import Header from '../../global/Header/Header'
import Subheader from '../../global/Header/Subheader'
import { RiDashboardLine } from 'react-icons/ri'
import { CiUser } from 'react-icons/ci'
import { AiOutlineDesktop } from 'react-icons/ai'
import { TfiLayoutListPost } from 'react-icons/tfi'
import { BiRepost } from 'react-icons/bi'
import { PiUserFocusBold } from 'react-icons/pi'
import Category1 from './SubPages/Category1'
import Category2 from './SubPages/Category2'


const initialValues = {
  Dashboard: true,
  MyProfile: false,
  Jobs: false,
  AppliedJobs: false,
  MyJobs: false,
  PostAJob: false,
}

const FindTalent = () => {
  const [open, setOpen] = useState(initialValues)
  const [pathvaluesOpen, setPathvaluesOpen] = useState("")
  const [showJavaSection, setShowJavaSection] = useState("");

  const handleClick = (item) => {
    if (item !== "Dashboard") {
      setOpen({ ...initialValues, [item]: true, Dashboard: false })
    }
    else {
      setOpen({ ...initialValues, [item]: true, })
    }
  }

  const handleDropdownChange = (event) => {
    debugger
    const selectedValue = event.target.value;
    if (selectedValue === 'Java') {
      setShowJavaSection(selectedValue);
    } else {
      setShowJavaSection("");
    }
  };
  return (
    <>
      <Header />
      <div className="NavbarTop">
        <Subheader />
      </div>
      <div className="container">
        <div className="card mt-4 border-0">
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <h5 className="card-title Top_Railtel_freelancers">
                  Top freelancers
                </h5>
              </div>
              <div className="col-md-8">
                <div class="input-group mb-3">
                  <input type="text" class="form-control RailtelSearchFilter"
                  onChange={handleDropdownChange} aria-label="Text input with dropdown button" id="inputGroupFile02" />
                  <select name="" id="" className='form-select RailtelSearchSelect' for="inputGroupFile02">
                    <option value="">Select Freelancers</option>
                    <option value="All">web</option>
                    <option value="Java">Java</option>
                    <option value="Frontend Developer">python</option>
                    <option value="Javascript">Javascript</option>
                  </select>
                </div>
              </div>
            </div>
            {/* section-1 */}

            <div className={showJavaSection==="Java"?"d-none":"card mb-5 mt-5 border-0"}>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <div className="leftSideTab">
                      <h6>Filter By</h6>
                      <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              Category
                            </button>
                          </h2>
                          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              <ul className="nav nav-pills d-block" id="pills-tab" role="tablist">
                                {/* Dashboard */}
                                <li className="nav-item " role="presentation">
                                  <button className="nav-link active NavItemsTabsDas" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"
                                    onClick={() => {
                                      handleClick("Dashboard");
                                      setPathvaluesOpen("Dashboard");
                                    }
                                    }><RiDashboardLine className='fs-5 me-1' style={{ marginTop: "-3px" }} />Dashboard</button>
                                </li>
                                {/* My Profile */}
                                <li className="nav-item " role="presentation">
                                  <button className="nav-link NavItemsTabsDas" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"
                                    onClick={() => {
                                      handleClick("MyProfile");
                                      setPathvaluesOpen("My Profile");
                                    }
                                    }><CiUser className='fs-5 me-1' style={{ marginTop: "-3px" }} />My Profile</button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="col">
                    <div className="RightSidePart">
                      <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                          {open.Dashboard && (
                            <Category1 />
                          )}
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                          {open.MyProfile && (
                            <Category2 />
                          )}
                        </div>
                        {/*  <div className="tab-pane fade" id="pills-Jobs" role="tabpanel" aria-labelledby="pills-Jobs-tab" tabIndex="0">
                                            {open.Jobs && (
                                                <Jobs />
                                            )}
                                        </div>
                                        <div className="tab-pane fade" id="pills-AppliedJobs" role="tabpanel" aria-labelledby="pills-AppliedJobs-tab" tabIndex="0">
                                            {open.AppliedJobs && (
                                                <AppliedJobs />
                                            )}
                                        </div>
                                        <div className="tab-pane fade" id="pills-PostAJob" role="tabpanel" aria-labelledby="pills-PostAJob-tab" tabIndex="0">
                                            {open.PostAJob && (
                                                <PostAJob />
                                            )}
                                        </div>
                                        <div className="tab-pane fade" id="pills-MyJobs" role="tabpanel" aria-labelledby="pills-MyJobs-tab" tabIndex="0">
                                            {open.MyJobs && (
                                                <MyJobs />
                                            )}
                                        </div> */}


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         

           {showJavaSection==="java" && (
              <div className="card mt-5 ShowJava">
                <div className="card SearchSHowResultCard">
                  <div className="card-body">
                    <div className="row">
                    <div className="col-md-2">
                      <img src="" alt="" />
                    </div>
                    <div className="col-md-9"></div>
                    <div className="col-md-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* section-2 */}

          </div>
        </div>
      </div>
    </>
  )
}

export default FindTalent