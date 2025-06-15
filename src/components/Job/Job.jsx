import './Job.css'

const Job = ({title, employer, start, end, bullets}) => {

    return (
        <div className='jobObject'>
            <div className="jobHeader">
                <img className='jobLogo' src="/images/ericsson.svg"></img>
                <div>
                    <div className='fullTitle'>
                        <div className='jobTitle'>{title} </div>
                        <div className='jobEmployer'> @ {employer}</div>
                    </div>
                    <div>{start} - {end}</div>
                </div>
            </div>
            <div className='jobDesc'>
                <ul>
                    {bullets.map((bullet, index) => {return <li key={`${title}_${index}`}>{bullet}</li>})}
                </ul>
            </div>
        </div>
    )
}

export default Job;
