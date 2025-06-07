import Header from "../../components/Header/Header"
import Input from "../../components/Input/Input";
import './Contact.css'

const Contact = () => {

    return (
        <>
            <Header>Contact</Header>
            <div className="contactContainer">
                Have a question, or want to work together?
                Message me using the form below!
                <Input label={"Enter Your Name:"}></Input>
                <Input label={"Enter Your Email:"}></Input>
            </div>
        </>
    )
}

export default Contact;