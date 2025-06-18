import { useState } from "react";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import './Contact.css';
import Button from "../../components/Button/Button";
import sendEmail from "../../api/sendEmail";
import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'
import Popup from "../../components/Popup/Popup";

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState("")

    const handleUpdate = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));

        // Clear error when user starts typing
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!form.name.trim()) newErrors.name = "Name is required.";
        if (!form.email.trim() || !form.email.includes('@')) newErrors.email = "Email is required.";
        if (!form.message.trim()) newErrors.message = "Message is required.";

        return newErrors;
    };

    const handleSubmit = () => {
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const submitEmail = async () => {
            await sendEmail(form);
        };
        setIsLoading(true)
        submitEmail();
        setTimeout(function() {
            setIsLoading(false)
            setIsOpen("Success")
        }, 1000)
        
    };

    return (
        <div>
            <Header>Contact</Header>
            <Popup title={"Email Sent Successfully!"} isOpen={isOpen.includes("Success")} setIsOpen={setIsOpen}>
                Thank you for reaching out, I will respond as soon as possible!
            </Popup>
            <div className="contactContainer">
                Have a question, or want to work together?
                Message me using the form below!

                <Input
                    value={form.name}
                    name="name"
                    label="Enter Your Name:"
                    onChange={handleUpdate}
                    error={errors.name}
                />
                <Input
                    value={form.email}
                    name="email"
                    label="Enter Your Email:"
                    onChange={handleUpdate}
                    error={errors.email}
                />
                <TextArea
                    value={form.message}
                    name="message"
                    label="Enter message content"
                    onChange={handleUpdate}
                    error={errors.message}
                />
                {!isLoading ? <Button onClick={handleSubmit}>Submit</Button> :
                <div className='loadingRing'>
                    <Ring
                        size="40"
                        stroke="5"
                        bgOpacity="0"
                        speed="2"
                        color="#64ffda" 
                    />
                </div>
                }
            </div>
        </div>
    );
};

export default Contact;