import './Project.css'

const Project = ({title, desc, image, skills, isLeft}) => {
    return (
        <div className="experienceContainer">
            <div className={"projectImage " + (isLeft ? 'projectLeft' : 'projectRight')}>
                <img src="/images/javascript.png"></img>
            </div>
            <div className={"projectDetails " + (isLeft ? 'projectRight' : 'projectLeft')}>
                <h2>
                    {title}
                </h2>
                <div className='projectBody'>
                    {desc}
                </div>
                <div className={'projectSkills ' + (isLeft ? 'skillsRight' : "")}>
                    {skills.map(skill => {
                        return <div>{skill}</div>
                    })}
                </div>
            </div>
        </div>
    )

}

export default Project;