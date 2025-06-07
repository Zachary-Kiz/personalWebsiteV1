import './Header.css'

const Header = ({children}) => {
    return (
        <h2 id={children} className="header">
            {children}
        </h2>
    )
}

export default Header;