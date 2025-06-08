import './Header.css'

const Header = ({children}) => {
    return (
        <div>
            <h1 id={children} className="header">
                {children}
            </h1>
        </div>
    )
}

export default Header;