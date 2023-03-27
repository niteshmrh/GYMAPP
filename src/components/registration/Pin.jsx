import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
// import { MdKeyboardArrowDown } from "react-icons/md";
import "./Pin.css";

function Pin(props) {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pin, setPin] = useState("");
  const [count, setCount] = useState();
  // useEffect(() => {
  //     fetchPostalApi();
  //   },[]);

  const fetchPostalApi = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://api.postalpincode.in/pincode/" + pin,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setPost(response.data[0].PostOffice);
        setLoading(false);
        //    console.log("response---",response.data[0].PostOffice);
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log("pinc0de", pin);
  console.log("post[0]--------", post);
  console.log("index No--------", count);
  // if(count){
  //   console.log(post[count]);
  //   localStorage.setItem(post[count])
  // }
  



  
  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div className="py-2">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {post.length == 0 ? (
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="inputPan6" className="col-form-label">
                    Pin Code
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    id="inputPan6"
                    className="form-control"
                    onChange={(e) => setPin(e.target.value)}
                  />
                </div>
                <div className="col-auto">
                  <span className="form-text">Must be 6 Integer.</span>
                </div>
                <div className="col-auto">
                  <button
                    className="btn btn-primary"
                    onClick={() => fetchPostalApi()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <label className="form-label">Status</label>
                <select
                  className="form-control form-select"
                  name="name"
                  onChange={(e) => setCount(e.target.value)}
                >
                  <option>Select Status </option>
                  {post.map((add, index) => (
                    <option key={index} value={index}>
                      {add.Name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {count ? (
              <div className="mt-3">
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item col-md-5">
                    <span className="float-start">Village</span>
                      <span className="float-end">{post[count]?.Name}</span>
                    </li>
                  <li className="list-group-item col-md-5">
                    <span>Block</span>
                    <span className="float-end">{post[count]?.Block}</span>
                  </li>
                  <li className="list-group-item col-md-5">
                    <span>District</span>
                    <span className="float-end">{post[count]?.District}</span>
                  </li>
                  <li className="list-group-item col-md-5">
                    <span>State</span>
                    <span className="float-end">{post[count]?.State}</span>
                  </li>
                  <li className="list-group-item col-md-4">
                    <span>Country</span>
                    <span className="float-end">{post[count]?.Country}</span>
                  </li>
                </ul>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pin;
