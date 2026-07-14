import React, { useEffect, useState } from 'react'

import axios from 'axios'

const ViewTeam = () => {
    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:4000/view-team").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                            

                                                    <table className="table table-bordered" 
                                                     style={{ tableLayout: "fixed", width: "100%" }} >
                                                        <tbody>
                                                            <tr>
                                                                <th>Team ID</th>
                                                                <td>{value.teamId}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Team Name</th>
                                                                <td>{value.teamName}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Team Leader Name</th>
                                                                <td>{value.teamLname}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Leader Email</th>
                                                                <td>{value.leaderEmail}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>College Name</th>
                                                                <td>{value.collegeName}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Number of Members</th>
                                                                <td>{value.noMembers}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Project Title</th>
                                                                <td>{value.projectTitle}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Problem Statement Track</th>
                                                                <td>{value.problemStat}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Technology Stack</th>
                                                                <td>{value.techStack}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Mentor Name</th>
                                                                <td>{value.mentorName}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Registration Date</th>
                                                                <td>{value.regDate}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Table</th>
                                                                <td>{value.table}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            
                                       
                                    )
                                }
                            )}

                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default ViewTeam