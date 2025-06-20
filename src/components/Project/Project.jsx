import Pill from '../Pill/Pill';
import './Project.css'

const Project = ({title, desc, image, skills, github, link, isLeft}) => {

    return (
        <div className="experienceContainer">
            <div className={"projectImage " + (isLeft ? 'projectLeft' : 'projectRight')}>
                <img src="/images/javascript.png"></img>
            </div>
            <div className={"projectDetails " + (isLeft ? 'projectRight' : 'projectLeft')}>
                <h2 className='projectTitle'>
                    {title}
                </h2>
                <div className='projectBody'>
                    {desc}
                </div>
                <div className={'projectSkills ' + (isLeft ? 'skillsRight' : "")}>
                    {skills.map((skill, index) => {
                        return <Pill text={skill} key={`${skill}_${index}`}></Pill>
                    })}
                </div>
                <div className={'projLinks ' + (isLeft ? 'skillsRight' : "")}>
                    {link && <a target='_blank' className='projectLink' href={link}><img src='/images/link.svg'></img></a>}
                    {github && <a target='_blank' className='projectLink' href={github}><img src='/images/github.svg'></img></a>}
                </div>
            </div>
        </div>
    )

}

export default Project;