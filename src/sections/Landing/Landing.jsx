import { Link } from "react-scroll"
import BigText from "../../components/BigText/BigText"
import Button from "../../components/Button/Button"
import './Landing.css'

const Landing = () => {

    return (
        <div className="landingPage">
            <div className="landingContainer">
                <BigText>Hi, I'm Zach!</BigText>
                <BigText>I'm a web developer!</BigText>
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