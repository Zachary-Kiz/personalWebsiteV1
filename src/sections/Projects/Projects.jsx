import Project from "../../components/Project/Project";
import Header from "../../components/Header/Header"
import './Projects.css'

const Projects = () => {
    return (
        <>
        <div>
            <Header>Projects</Header>
            <div className="projList">
                <Project title={"Todo List"} isLeft></Project>
                <Project title={"Todo List"} ></Project>
                <Project title={"Todo List"} isLeft></Project>
            </div>
            
        </div>
        </>
    )
}

export default Projects;