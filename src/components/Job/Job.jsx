import './Job.css'
import { useInView } from '../../hooks/useInView'

const Job = ({title, employer, image, start, end, bullets}) => {

    const [ref, hasBeenVisible] = useInView()

    return (
        <div ref={ref} className={`jobObject  ${hasBeenVisible ? 'inView' : 'notInView'}`}>
            <div className="jobHeader">
                <img className='jobLogo' src={image}></img>
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
