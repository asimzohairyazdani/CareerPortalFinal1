import React, { useState, useEffect } from "react";
import JobSeekerService from "../../services/JobSeekerService";
import { Link, useNavigate, useParams } from "react-router-dom";

export const AddJobSeeker = () => {
  const [fullName, setFullName] = useState("");
  const [professionalDetails, setProfessionalDetails] = useState("");
  const [educationDetail, setEducationDetails] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const changeTitle = () => {
    if (id) {
      console.log("returned title  update job seeker .id", { id });
      return <h2 className="text-center">Update Job Seeker</h2>;
    } else {
      console.log("returned title  add Job Seeker");
      return <h2 className="text-center">Add Job Seeker</h2>;
    }
  };
  const updateButton = () => {
    if (id) {
      console.log("returned title  uupdate JobSeeker.id", { id });
      return <h2 className="text-center">Update </h2>;
    } else {
      console.log("returned title  add JobSeeker");
      return <h2 className="text-center">Add event</h2>;
    }
  };

  useEffect(() => {
    console.log("useEffect triggered.... ");
    console.log("id value obtained from url using useParams()", id);
    if (id) {
      JobSeekerService.getJobSeekerById(id)
        .then((response) => {
          console.log(
            "Response recieved from getbyid API",
            JSON.stringify(response.data)
          );
          setFullName(response.data.fullName);
          setProfessionalDetails(response.data.professionalDetails);
          setEducationDetails(response.data.educationDetails);
          setMobileNumber(response.data.mobileNo);
          setDateOfBirth(response.data.dateOfBirth);
          setEmail(response.data.email);
          console.log("state variable changed. ");
        })
        .catch((error) => {
          console.log("Error recieved from save api...", error);
        });
    }
  }, []);
  const saveOrUpdateJobSeeker = (e) => {
    console.log("save or update job seeker function fired");
    e.preventDefault();
    //let emailId=email;
    const jobSeeker = {
      fullName,
      professionalDetails,
      educationDetail,
      mobileNumber,
      dateOfBirth,
      email,
    };
    console.log("JobSeeker feed from home:", jobSeeker);
    if (id) {
      JobSeekerService.updateJobSeekerById(id, jobSeeker)
        .then((response) => {
          console.log(
            "response recieved from saved API..." + JSON.stringify(response)
          );
          navigate("/jobSeeker");
        })
        .catch((error) => {
          console.log("error recieved from saved API...", error);
        });
    } else {
      JobSeekerService.addJobSeeker(jobSeeker)
        .then((response) => {
          console.log(
            "response recieved from saved API..." + JSON.stringify(response)
          );
          navigate("/jobSeeker");
        })
        .catch((error) => {
          console.log("error recieved from saved API...", error);
        });
    }
  };

  return (
    <div>
      {console.log("Application Rendered.. ")}
      <div className="container">
        <div className="card col-md-6 offset-md-3">
          {changeTitle()}
          <div className="card-body">
            <form>
              {/* Title of the event text box */}
              <div className="form-group mb-2">
                <label className="form-label">
                  Full Name of the Job seeker
                </label>
                <input
                  type="text"
                  placeholder="Enter the full name of the job seeker"
                  name="fullNameJobSeeker"
                  value={fullName}
                  className="form-control"
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                />
              </div>
              {/* Description of the event text box */}
              <div className="form-group mb-2">
                <label className="form-label">
                  Professional details of the job seeker
                </label>
                <input
                  type="text"
                  placeholder="Enter the professional details of the job seeker"
                  name="professionaldetailsJobSeeker"
                  value={professionalDetails}
                  className="form-control"
                  onChange={(e) => {
                    setProfessionalDetails(e.target.value);
                  }}
                />
              </div>
              {/* Location of the event text box */}
              <div className="form-group mb-2">
                <label className="form-label">
                  educational details of the job seeker
                </label>
                <input
                  type="text"
                  placeholder="Enter the educational details of the job seeker"
                  name="educationalDetails"
                  value={educationDetail}
                  className="form-control"
                  onChange={(e) => {
                    setEducationDetails(e.target.value);
                  }}
                />
              </div>
              {/* max attendees of the event text box */}
              <div className="form-group mb-2">
                <label className="form-label">
                  Moblile number of the job seeker
                </label>
                <input
                  type="text"
                  placeholder="Enter the Moblile number of the job seeker "
                  name="mobileNumber"
                  value={mobileNumber}
                  className="form-control"
                  onChange={(e) => {
                    setMobileNumber(e.target.value);
                  }}
                />
              </div>
              {/* Registration fees of the event text box */}
              <div className="form-group mb-2">
                <label className="form-label">
                  Date of Birth of the job Seeker
                </label>
                <input
                  type="datetime-local"
                  placeholder="Enter the Date of Birth of the job Seeker"
                  name="Date of Birth "
                  value={dateOfBirth}
                  className="form-control"
                  onChange={(e) => {
                    setDateOfBirth(e.target.value);
                  }}
                />
              </div>
              {/* Email of the job seeker text box */}
              <div className="form-group mb-2">
                <label className="form-label">email of the job Seeker</label>
                <input
                  type="email"
                  placeholder="Enter the email of the job Seeker"
                  name="email "
                  value={email}
                  className="form-control"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              {/* submit-button  */}
              <button
                onClick={(e) => saveOrUpdateJobSeeker(e)}
                className="btn btn-success"
              >
                Save JobSeeker
              </button>
              &nbsp;&nbsp;
              <Link to="/jobSeeker" className="btn btn-danger">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};