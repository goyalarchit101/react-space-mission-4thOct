import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const MissionDetails = () => {
    const [data, setData] = useState();
    const { id } = useParams();

    useEffect(() => {
        const apiUrl = `https://api.spacexdata.com/v3/launches/${id}`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((result) => {
                setData(result);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [])





    return (
        <div>
            {/*Main layout*/}
            <main className="mt-5 pt-4">
                <div className="container mt-5">
                    {/*Grid row*/}
                    <div className="row">
                        {/*Grid column*/}
                        <div className="col-md-6 mb-4">
                            <img style={{ height: "50%", marginLeft: "20px" }}
                                src={data ? data.links.mission_patch : ""}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-md-6 mb-4">
                            {/*Content*/}
                            <div className="p-4">
                                <p className="lead">
                                    <h4>Launch Time:</h4>
                                    <p>{data ? data.launch_date_utc : ""}</p>
                                </p>
                                <strong>
                                    <p style={{ fontSize: 20 }}>Description</p>
                                </strong>
                                <p>

                                    {data ? data.details : " "}
                                </p>
                                <p>

                                    <h3>Youtube:</h3>
                                    <a rel="noreferrer" target="_blank" href={data ? data.links.video_link : " "}>{data ? data.links.video_link : " "}</a>
                                </p>


                                <h3>Wikipedia:</h3>
                                <a rel="noreferrer" target="_blank" href={data ? data.links.wikipedia : " "}>{data ? data.links.wikipedia : " "}</a>
                            </div>
                            {/*Content*/}
                        </div>
                        {/*Grid column*/}
                    </div>
                </div>
                <Link to={"/"}>
                    <div className="btn btn-primary">Back</div>
                </Link>
            </main>
            {/*Main layout*/}
        </div>
    )
}

export default MissionDetails
