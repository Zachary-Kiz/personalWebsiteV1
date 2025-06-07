import './NavItem.css'

const NavItem = ({isIcon, text, icon}) => {

    return (
        <div>
        {!isIcon ? 
            <div className="navText">{text}</div>
            :
            <img className='navIcon' src={icon}/>}
        </div>
    )

}

export default NavItem;