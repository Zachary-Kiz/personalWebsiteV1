import './SkillIcon.css'

const SkillIcon = ({link, title}) => {

    return (
        <div className="skillContainer">
            <img className='skillIcon' src={link}></img>
            <div><b>{title}</b></div>
        </div>
    )
}

export default SkillIcon;