import React, { useEffect, useState } from 'react'
import Missions from './Missions';

const AllMissions = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://api.spacexdata.com/v3/launches';

    // Use the fetch() method to make the API request
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // Update the state with the API response data
        setData(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [])



  return (
    <div className="wrapper">

      {/* heading section */}
      <div className="d-md-flex align-items-md-center">
        <div className="h3">Space Missions</div>
        <div className="ml-auto d-flex align-items-center views">
          {" "}
          <span className="green-label px-md-2 px-1">428</span>{" "}
          <span className="text-muted">Products</span>{" "}
        </div>
      </div>


      {/* filter section */}
      <div className="d-lg-flex align-items-lg-center pt-2">
        <div className="form-inline d-flex align-items-center my-2 mr-lg-2 radio bg-light border">
          {" "}
          <label className="options">
            Most Popular <input type="radio" name="radio" />{" "}
            <span className="checkmark" />{" "}
          </label>{" "}
          <label className="options">
            Cheapest <input type="radio" name="radio" defaultChecked="" />{" "}
            <span className="checkmark" />{" "}
          </label>{" "}
        </div>
      </div>


      <div className="content py-md-0 py-3">
        <section id="sidebar">
          <div className="py-3">
            <h5 className="font-weight-bold">Categories</h5>
            <ul className="list-group">
              <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                {" "}
                vegetables{" "}
                <span className="badge badge-primary badge-pill">328</span>{" "}
              </li>
              <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                {" "}
                Fruits <span className="badge badge-primary badge-pill">
                  112
                </span>{" "}
              </li>
              <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                {" "}
                Kitchen Accessories{" "}
                <span className="badge badge-primary badge-pill">32</span>{" "}
              </li>
              <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                {" "}
                Chefs Tips{" "}
                <span className="badge badge-primary badge-pill">48</span>{" "}
              </li>
            </ul>
          </div>
        </section>{" "}
        {/* Products Section */}
        <section id="products">
          <div className="container py-3">
            <div className="row">

              {data.map((mission, index) => {
                return (
                  <Missions missionDetail = {mission}  key={index}/>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </div>

  )
}

export default AllMissions
