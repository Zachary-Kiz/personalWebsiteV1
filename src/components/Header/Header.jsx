import { useInView } from '../../hooks/useInView';
import './Header.css'

const Header = ({children}) => {

    const [ref, hasBeenVisible] = useInView()

    return (
        <div ref={ref} className={hasBeenVisible ? 'inView' : 'notInView'}>
            <h1 id={children} className="header">
                {children}
            </h1>
        </div>
    )
}

export default Header;