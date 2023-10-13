import React from 'react'

const Missions = (props) => {
    console.log(props);
    const {mission_name, launch_year, details, links, launch_success} = props.missionDetail;
    return (
        <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
            <div className="card">
                {" "}
                <img alt=''
                    className="card-img-top"
                    src={links.mission_patch_small}
                />
                <div className="card-body">
                    <h6 className="font-weight-bold pt-1">{mission_name}</h6>
                    <div className="text-muted description">
                        {details ? details.slice(0, 40) + '....' : "No details Found for the misson"}
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-3">
                        <div className="d-flex flex-column">
                            <div className="h6 font-weight-bold">{launch_year}</div>
                            <div className="text-muted rebate">{launch_success ? "Success" : "Failure"}</div>
                        </div>
                        <div className="btn btn-primary">More</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Missions
