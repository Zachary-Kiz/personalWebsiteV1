import { Link } from 'react-scroll';
import './NavItem.css'

const NavItem = ({isIcon, text, icon}) => {

    return (
        <div>
            
        {!isIcon ?
            <Link to={text} offset={-50} smooth={true} duration={500}>
                <div className="navText">{text}</div>
            </Link>
            :
            <img className='navIcon' src={icon}/>}
        </div>
    )

}

export default NavItem;