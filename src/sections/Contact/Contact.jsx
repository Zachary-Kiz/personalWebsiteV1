import Header from "../../components/Header/Header"
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
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
                <TextArea label={"Enter message content"}></TextArea>
            </div>
        </>
    )
}

export default Contact;