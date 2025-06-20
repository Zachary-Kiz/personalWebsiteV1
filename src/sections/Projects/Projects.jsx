import Project from "../../components/Project/Project";
import Header from "../../components/Header/Header"
import './Projects.css'
import { useEffect } from "react";
import { useState } from "react";
import fetchProjects from "../../api/fetchProjects";

const Projects = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        const getProj = async () => {
            const projList = await fetchProjects();
            setProjects(projList);
        }
        getProj()
    }, [])
    
    return (
        <>
        <div>
            <Header>Projects</Header>
            <div className="projList">
                {projects.map((project, index) => {
                    return <Project key={project.title + '_' + index} title={project.title} desc={project.desc} skills={project.skills} github={project.github} link={project.link} isLeft={index % 2 == 1}></Project>
                })}
            </div>
            
        </div>
        </>
    )
}

export default Projects;