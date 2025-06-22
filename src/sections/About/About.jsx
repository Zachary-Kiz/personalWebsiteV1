import { Element } from "react-scroll";
import Header from "../../components/Header/Header"
import SkillIcon from "../../components/SkillIcon/SkillIcon";
import './About.css'
import { useInView } from "../../hooks/useInView";

const About = () => {

    const [ref, hasBeenVisible] = useInView()

    return (
        <>
        <Element name="About">
        <Header>
            About
        </Header>
        <div className="aboutContainer">
            <div ref={ref} className={"aboutMe " + (hasBeenVisible ? 'viewHeadShot': 'invisHeadShot')}>
                <div  className={"headshotContainer"}>
                    <img className="headshot" src="/images/headshot.jpg"></img>
                </div>
                <div className="aboutMeDesc">
                    Hi, my name is Zach! I'm a computer scientist about to enter my fourth year at Queen's University.
                    I have a deep love for programming, and am currently working as a full-stack developer.
                    In my free time I enjoy reading, playing video games, and hitting the gym.
                </div>
            </div>
            <div className={"skillsContainer " + (hasBeenVisible ? 'inView' : 'notInView')}>
                <div className="skillCol">
                    <SkillIcon link='/images/javascript.png' title={'JAVASCRIPT'}></SkillIcon>
                    <SkillIcon link='/images/html.png' title={'HTML'}></SkillIcon>
                    <SkillIcon link='/images/css.png' title={"CSS"}></SkillIcon>
                </div>
                <div className="skillCol">
                    <SkillIcon link='/images/react.png' title={"REACT"}></SkillIcon>
                    <SkillIcon link='/images/mongodb.png' title={"MONGODB"}></SkillIcon>
                    <SkillIcon link='/images/flask.png' title={"FLASK"}></SkillIcon>
                    <SkillIcon link='/images/express.png' title={"EXPRESS"}></SkillIcon>
                </div>
                <div className="skillCol">
                    <SkillIcon link='/images/dash.png' title={"DASH PLOTLY"}></SkillIcon>
                    <SkillIcon link='/images/selenium.png' title={"SELENIUM"}></SkillIcon>
                    <SkillIcon link='/images/git.png' title={"GIT"}></SkillIcon>
                </div>
            </div>
        </div>
        </Element>
        </>
    )
}

export default About;