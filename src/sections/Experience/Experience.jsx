import Header from "../../components/Header/Header"
import Job from "../../components/Job/Job";
import './Experience.css'

const Experience = () => {

    return (
        <>
            <Header>Experience</Header>
            <div className="jobsContainer">
                <Job></Job>
                <Job></Job>
            </div>
            
        </>
    )
}

export default Experience;