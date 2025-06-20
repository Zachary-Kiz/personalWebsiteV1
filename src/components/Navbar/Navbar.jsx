import { useEffect, useState } from "react"
import NavItem from "../NavItem/NavItem"
import './Navbar.css'
import BurgerIcon from "../BurgerIcon/BurgerIcon";

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
    const [isVisible, setIsVisible] = useState(false)

    const [scrollDir, setScrollDir] = useState(null);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setScrollDir('down');
        } else if (currentScrollY < lastScrollY) {
            setScrollDir('up');
        }

        setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const viewMenu = () => {
        setIsVisible(prev => !prev)
    }

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 700);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setIsVisible(false)
    }, [isMobile])

    const navList = (
        <div className={isMobile ? `mobileNav ${isVisible && scrollDir !== 'down' ? "visible" : ""}` :"pcNav"}>
            <NavItem text="About" isMobile={isMobile}></NavItem>
            <NavItem text="Experience" isMobile={isMobile}></NavItem>
            <NavItem text="Projects" isMobile={isMobile}></NavItem>
            <NavItem text="Contact" isMobile={isMobile}></NavItem>
        </div>
    )

    return (
        <div className="navContainer">
            <div className={`navbar ${scrollDir == 'down' ? '' : 'visibleNav'}`}>
                {isMobile && <div className="positionBurger"><BurgerIcon onClick={viewMenu}></BurgerIcon></div>}
                {!isMobile && navList}
            </div>
            {isMobile && navList}
        </div>
    )

}

export default Navbar;