import { useState, useEffect } from 'react';
import Pill from '../Pill/Pill';
import './Project.css'

const Project = ({title, desc, image, skills, github, link, isLeft}) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 800);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
        {!isMobile ? (
            <div className="experienceContainer">
            <div className={"projectImage " + (isLeft ? 'projectLeft' : 'projectRight')}>
                <div className='imgFilter'>
                    <img className='imgSize' src={image}></img>
                </div>
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
        ) :  
        <div className='mobileProject'>
            <img className='mobileImage' src={image}></img>
                <h2 className='mobileTitle'>{title}</h2>
                {desc}
                <div className='projectSkills'>
                    {skills.map((skill, index) => {
                            return <Pill text={skill} key={`${skill}_${index}`}></Pill>
                        })}
                </div>
                <div className='projLinks'>
                    {github && <a target='_blank' className='projectLink' href={github}><img src='/images/github.svg'></img></a>}
                    {link && <a target='_blank' className='projectLink' href={link}><img src='/images/link.svg'></img></a>}
                </div>

        </div>}
        </>
    )

}

export default Project;