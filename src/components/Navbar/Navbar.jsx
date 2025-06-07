import NavItem from "../NavItem/NavItem"
import './Navbar.css'

const Navbar = () => {

    return (
        <div className="navbar">
            <NavItem text="About"></NavItem>
            <NavItem text="Experience"></NavItem>
            <NavItem text="Projects"></NavItem>
            <NavItem text="Contact"></NavItem>
        </div>
    )

}

export default Navbar;