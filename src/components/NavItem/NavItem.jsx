import { Link } from 'react-scroll';
import './NavItem.css'

const NavItem = ({isIcon, text, icon, isMobile}) => {

    return (
        <div>
            
        {!isIcon ?
            <Link to={text} offset={-100} smooth={true} duration={500}>
                <div className={isMobile ? "navTextMobile" :"navTextPc"}>{text}</div>
            </Link>
            :
            <img className='navIcon' src={icon}/>}
        </div>
    )

}

export default NavItem;