import React, { useEffect, useState } from 'react'
import Missions from './Missions';

const AllMissions = () => {
  const [data, setData] = useState([]);
  const [apiUrl, setApiUrl] = useState("https://api.spacexdata.com/v3/launches");
  const [filteryear, setFilteryear] = useState([]);
  const [filterOption, setfilterOption] = useState(["All Launches", "Past Launches", "Upcoming Launches", "Latest Launch", 
  "Next Launch"]);

  function last15Years() {
    const currentYear = new Date().getFullYear();
    setFilteryear(Array.from({ length: 15 }, (_, index) => currentYear - index));
    console.log(filteryear);
  }
  
  useEffect(() => {
  last15Years();

    // Use the fetch() method to make the API request
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        if (Array.isArray(result)) {
          setData(result);
        }
        else{
          let tempResult = [] ;
          tempResult.push(result);
          setData(tempResult);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [apiUrl])

  const filterData= (option)=>{
    console.log(option);
     let newApiUrl;
    switch (option) {
      case 'All Launches':
        newApiUrl = 'https://api.spacexdata.com/v3/launches';
        break;
      case 'Past Launches':
        newApiUrl = 'https://api.spacexdata.com/v3/launches/past';
        break;
      case 'Upcoming Launches':
        newApiUrl = 'https://api.spacexdata.com/v3/launches/upcoming';
        break;
      case 'Latest Launch':
        newApiUrl = 'https://api.spacexdata.com/v3/launches/latest';
        break;
      case 'Next Launch':
        newApiUrl = 'https://api.spacexdata.com/v3/launches/next';
        break;
      default:
        newApiUrl = 'https://api.spacexdata.com/v3/launches';
    }
    setApiUrl(newApiUrl);
  }



  return (
    <div className="wrapper">

      {/* heading section */}
      <div className="d-md-flex align-items-md-center">
        <div className="h3">Space Missions</div>
        <div className="ml-auto d-flex align-items-center views">
          {" "}
          <span className="green-label px-md-2 px-1">{data.length}</span>{" "}
          <span className="text-muted">Products</span>{" "}
        </div>
      </div>


      {/* filter section */}
      <div className="d-lg-flex align-items-lg-center pt-2">
        <div className="form-inline d-flex align-items-center my-2 mr-lg-2 radio bg-light border">
          {" "}

          {filterOption.map((option, index) => {
            return (
              <label key={index} className="options">
                {option} <input onChange={()=>filterData(option)} type="radio" name="radio" />{" "}
                <span className="checkmark" />{" "}
              </label>
            )
          })}
        </div>
      </div>


      <div className="content py-md-0 py-3">
        <section id="sidebar">
          <div className="py-3">
            <h5 className="font-weight-bold">Years</h5>
            <ul className="list-group">
              <li className="two-column-list">
                {filteryear.map((year, index) => (
                  <div key={index}>{year}</div>
                ))}
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
