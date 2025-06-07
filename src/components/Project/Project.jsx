import './Project.css'

const Project = ({title, body, image, skills, isLeft}) => {
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
                    To teach myself react I created a ToDo List application.
                    Users can create, update, and categorize todos.
                </div>
                <div>React, HTML, CSS</div>
            </div>
        </div>
    )

}

export default Project;