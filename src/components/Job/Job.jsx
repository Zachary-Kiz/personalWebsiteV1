import './Job.css'

const Job = () => {

    return (
        <div className='jobObject'>
            <div className="jobHeader">
                <img className='jobLogo' src="/images/ericsson.svg"></img>
                <div>
                    <div><b>Web Developer @ Ericsson</b></div>
                    <div>May 2024 - Present</div>
                </div>
            </div>
            <div className='jobDesc'>
                <ul>
                    <li>Worked on a variety of web development projects using multiple frameworks</li>
                    <li>Implemented major features using React and Flask</li>
                </ul>
            </div>
        </div>
    )
}

export default Job;
