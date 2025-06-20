import { useEffect, useState } from "react"
import NavItem from "../NavItem/NavItem"
import './Navbar.css'
import BurgerIcon from "../BurgerIcon/BurgerIcon";

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
    const [isVisible, setIsVisible] = useState(false)

    const viewMenu = () => {
        setIsVisible(prev => !prev)
    }

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 700);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navList = (
        <div className={isMobile ? `mobileNav ${isVisible ? "visible" : ""}` :"pcNav"}>
            <NavItem text="About" isMobile={isMobile}></NavItem>
            <NavItem text="Experience" isMobile={isMobile}></NavItem>
            <NavItem text="Projects" isMobile={isMobile}></NavItem>
            <NavItem text="Contact" isMobile={isMobile}></NavItem>
        </div>
    )

    return (
        <div>
            <div className="navbar">
                {isMobile && <div className="positionBurger"><BurgerIcon onClick={viewMenu}></BurgerIcon></div>}
                {!isMobile && navList}
            </div>
            {isMobile && navList}
        </div>
    )

}

export default Navbar;