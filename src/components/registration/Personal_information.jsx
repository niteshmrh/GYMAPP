import React, { useState } from "react";
import axios from "axios";

function Personal_information(props) {
  const [bankIfscDetails, setBankIfscDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ifsc, setIFSC] = useState("");

  const handleIFSC = (e) => {
    setIFSC(e.target.value);
  };

  const fetchIFSCApi = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://ifsc.razorpay.com/" + ifsc, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        setBankIfscDetails(response.data);
        setLoading(false);
        //    console.log("response---",response.data[0].PostOffice);
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  let comma;
  if (bankIfscDetails.length > 0) {
    comma = ",";
  } else {
    comma = "";
  }
  console.log("IFSC", ifsc);
  console.log("bank details----", bankIfscDetails);

  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="row g-3">
              <div className="col-md-4">
                <label className="form-label">First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  name="First_Name"
                  required
                />
                {/* <div className="valid-feedback">Looks good!</div> */}
              </div>
              <div className="col-md-4">
                <label className="form-label">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  name="Last_Name"
                  required
                />
                {/* <div className="valid-feedback">Looks good!</div> */}
              </div>

              <div className="col-md-4">
                <label className="form-label ms-4">Gender</label>
                <div className="fs-5 ms-4">
                <div className="mb-2">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      value="male"
                      name="gender"
                    />
                    <label className="form-check-label">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      value="female"
                      name="gender"
                    />
                    <label className="form-check-label">Female</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      value="other"
                      name="gender"
                    />
                    <label className="form-check-label">Other</label>
                  </div>
                </div>
                </div>
              </div>

              {/* <div className="col-md-4"></div> */}
              <div className="col-md-4">
                <label className="form-label">City</label>
                <input type="text" className="form-control" required />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-md-4">
                <label className="form-label">State</label>
                <select className="form-select" required>
                  <option value="selected" disabled>
                    Choose...
                  </option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Zip</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-4">
                <label className="form-label">Aadhar Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Aadhar"
                  required
                />
                {/* <div className="valid-feedback">Looks good!</div> */}
              </div>
              <div className="col-md-4">
                <label className="form-label">Pan Card Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pan card Number"
                  required
                />
                {/* <div className="valid-feedback">Looks good!</div> */}
              </div>
              <div className="col-md-4">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  required
                />
                {/* <div className="valid-feedback">Looks good!</div> */}
              </div>
              <hr />
              <span className="text-center fs-4 fw-bold">Bank Details</span>
              <div className="col-4">
                <label className="form-label">IFSC CODE</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="IFSC CODE"
                  name="IFSC"
                  onChange={(e) => handleIFSC(e)}
                  required
                />
                <div className="ms-2 ms-2 text-danger fw-bold">
                  {bankIfscDetails.BRANCH} {comma} {bankIfscDetails.BANK}
                </div>
              </div>
              {bankIfscDetails.length == 0 ? (
                <div className="col-2">
                  <button
                    className="btn btn-primary form-label"
                    style={{ marginTop: "32px" }}
                    onClick={() => fetchIFSCApi()}
                  >
                    Submit
                  </button>
                </div>
              ) : (
                <div className="col-4">
                  <label className="form-label">Account Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Account Number"
                    required
                  />
                  <div className="ms-2 text-danger fw-bold">
                    Account Holder Name
                  </div>
                </div>
              )}
              <hr />
              <span className="text-center fs-4 fw-bold">
                Identification Marks
              </span>
              <div className="col-md-6">
                <label className="form-label">Identification Marks</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Identification Marks"
                  required
                />
              </div>
              <hr/>
              <span className="text-center fs-4 fw-bold">
                Employment Type
              </span>
              <div className="col-md-4">
                <label className="form-label">Employment Type</label>
                <select className="form-select" required>
                  <option>Select Option</option>
                  <option value='salairied'>Salaried</option>
                  <option value='self employed'>Self Employed</option>
                </select>
              </div>
              <hr/>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    required
                  />
                  <label className="form-check-label">
                    Agree to terms and conditions* & All the Details provided by
                    me is correct
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal_information;
