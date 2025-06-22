import { Link } from "react-scroll"
import BigText from "../../components/BigText/BigText"
import Button from "../../components/Button/Button"
import './Landing.css'
import { useInView } from "../../hooks/useInView"

const Landing = () => {

    const [ref, hasBeenVisible] = useInView()

    return (
        <div className="landingPage">
            <div ref={ref}  className={"landingContainer " + (hasBeenVisible ? 'inView': 'notInView')}>
                <BigText>Hi, I'm <div className="zach">Zach.</div></BigText>
                <BigText>I'm a web developer.</BigText>
                <Link style={{'margin': 'auto'}} offset={-50} to="About" smooth={true} duration={500}>
                    <Button>
                        <div>About Me</div>
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Landing;