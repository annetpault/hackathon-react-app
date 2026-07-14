import axios from 'axios'
import React, { useState } from 'react'
import NavigationBar from './NavigationBar'


const AddTeam = () => {

    const [input, changeInput] = useState(
        {
            teamId: "",
            teamName: "",
            teamLname: "",
            leaderEmail: "",
            leaderPhone: "",
            collegeName: "",
            noMembers: "",
            projectTitle: "",
            problemStat: "",
            techStack: "",
            mentorName: "",
            regDate: "",
            table: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        axios.post("http://localhost:4000/add-team", input).then(
            (response) => {
                console.log(response.data)
                alert("Team added successfully")
            }
        ).catch(
            (error) => {
                console.error("Error adding team:", error)

                alert("Failed to add team")
            }
        )
    }

    return (
        <div>
<NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Team ID</label>
                                <input type="text" className="form-control" name="teamId" value={input.teamId} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Team Name</label>
                                <input type="text" className="form-control" name="teamName" value={input.teamName} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Team Leader Name</label>
                                <input type="text" className="form-control" name="teamLname" value={input.teamLname} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Leader Email</label>
                                <input type="text" className="form-control" name="leaderEmail" value={input.leaderEmail} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Leader Phone</label>
                                <input type="tel" className="form-control" name="leaderPhone" value={input.leaderPhone} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">College Name</label>
                                <input type="text" className="form-control" name="collegeName" value={input.collegeName} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Number of Members</label>
                                <input type="number" className="form-control" name="noMembers" value={input.noMembers} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Project Tile</label>
                                <input type="text" className="form-control" name="projectTitle" value={input.projectTitle} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Problem Statement Track</label>
                                <input type="text" className="form-control" name="problemStat" value={input.problemStat} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Technology Stack</label>
                                <input type="text" className="form-control" name="techStack" value={input.techStack} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Mentor Name</label>
                                <input type="text" className="form-control" name="mentorName" value={input.mentorName} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Registration Date</label>
                                <input type="date" className="form-control" name="regDate" value={input.regDate} onChange={inputHandler} />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Table</label>
                                <input type="text" className="form-control" name="table" value={input.table} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddTeam