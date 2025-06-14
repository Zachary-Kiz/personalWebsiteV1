import { useState } from "react";
import Header from "../../components/Header/Header"
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import './Contact.css'
import Button from "../../components/Button/Button";
import sendEmail from "../../api/sendEmail";

const Contact = () => {

    const [form, setForm] = useState({
        'name' : '',
        'email': '',
        'message': ''
    })

    const handleUpdate = (e) => {
        const {name, value} = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name] : value
        }))
    }

    const handleSubmit = () => {
        const submitEmail = async () => {
            await sendEmail(form)
        }

        submitEmail();
    }

    return (
        <>
            <Header>Contact</Header>
            <div className="contactContainer">
                Have a question, or want to work together?
                Message me using the form below!
                <Input value={form.name} name={'name'} label={"Enter Your Name:"} onChange={handleUpdate}></Input>
                <Input value={form.email} name='email' label={"Enter Your Email:"} onChange={handleUpdate}></Input>
                <TextArea value={form.message} name='message' label={"Enter message content"} onChange={handleUpdate}></TextArea>
                <Button onClick={() => handleSubmit()}>Submit</Button>
            </div>
        </>
    )
}

export default Contact;