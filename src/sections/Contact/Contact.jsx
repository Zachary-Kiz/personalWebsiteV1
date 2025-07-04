import { useState } from "react";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import './Contact.css';
import Button from "../../components/Button/Button";
import sendEmail from "../../api/sendEmail";
import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'
import Footer from "../../components/Footer/Footer";
import { useInView } from "../../hooks/useInView";
import { usePopupContext } from "../../context/PopupContext";

const Contact = () => {

    const { setOpenPopup } = usePopupContext()

    const [ref, hasBeenVisible] = useInView()

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

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
            setOpenPopup("Success")
            setForm({
                name: '',
                email: '',
                message: ''
            })
        }, 1000)
        
    };

    return (
        <div>
            <Header>Contact</Header>
            <div ref={ref} className={"contactContainer " + (hasBeenVisible ? 'inView' : 'notInView')}>
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
            <Footer></Footer>
        </div>
    );
};

export default Contact;