import { useEffect, useState } from "react";
import Header from "../../components/Header/Header"
import Job from "../../components/Job/Job";
import './Experience.css'
import fetchJobs from '../../api/fetchJobs.js'

const Experience = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() => {

        const getJobs = async () => {
            const jobList = await fetchJobs()
            setJobs(jobList)
        }
        getJobs()

    }, [])

    return (
        <>
            <Header>Experience</Header>
            <div className="jobsContainer">
                {jobs && jobs.map(job => {
                    return <Job key={job.title + '_' + job.employer} title={job.title} employer={job.employer} start={job.start} end={job.end} bullets={job.bullets}></Job>
                })}
            </div>
            
        </>
    )
}

export default Experience;