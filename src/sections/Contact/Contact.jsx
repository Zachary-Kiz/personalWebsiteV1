import Header from "../../components/Header/Header"
import Input from "../../components/Input/Input";
import './Contact.css'

const Contact = () => {

    return (
        <>
            <Header>Contact</Header>
            <div className="contactContainer">
                <Input label={"Enter Your Name:"}></Input>
                <Input label={"Enter Your Email:"}></Input>
            </div>
        </>
    )
}

export default Contact;