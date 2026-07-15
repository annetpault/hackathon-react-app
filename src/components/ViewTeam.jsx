import React, { useEffect, useState } from 'react'

import axios from 'axios'
import NavigationBar from './NavigationBar'

const ViewTeam = () => {
    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.post("http://localhost:4000/view-team").then(
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
        

            <div className="container">
                <NavigationBar />
    <div className="row">
        <div className="col-12">

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Team ID</th>
                        <th>Team Name</th>
                        <th>Team Leader Name</th>
                        <th>Leader Email</th>
                        <th>College Name</th>
                        <th>No. of Members</th>
                        <th>Project Title</th>
                        <th>Problem Statement</th>
                        <th>Technology Stack</th>
                        <th>Mentor Name</th>
                        <th>Registration Date</th>
                        <th>Table</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((value, index) => (
                        <tr key={index}>
                            <td>{value.teamId}</td>
                            <td>{value.teamName}</td>
                            <td>{value.teamLname}</td>
                            <td>{value.leaderEmail}</td>
                            <td>{value.collegeName}</td>
                            <td>{value.noMembers}</td>
                            <td>{value.projectTitle}</td>
                            <td>{value.problemStat}</td>
                            <td>{value.techStack}</td>
                            <td>{value.mentorName}</td>
                            <td>{value.regDate}</td>
                            <td>{value.table}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    </div>
</div>
    )
}

export default ViewTeam