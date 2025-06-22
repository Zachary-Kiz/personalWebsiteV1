import './Popup.css'
import Button from '../Button/Button';
import { useEffect } from 'react';
import { usePopupContext } from '../../context/PopupContext';

const Popup = ({children, title, isOpen, setIsOpen}) => {

    const { closePopup } = usePopupContext()

    const html = document.querySelector('html')

    useEffect(() => {
        if (isOpen) {
            html.style.overflow = 'hidden';
        }

        // Cleanup when unmounted or closed
        return () => {
        html.style.overflow = '';
        };
    }, [isOpen]);

    return (
        isOpen && (<div className="popupBackground">
            <div className='popupCenter'>
                <div className='popupContainer'>
                    <img className='popupImg' src='/images/success.png'></img>
                    <h2>{title}</h2>
                    <div>
                        {children}
                    </div>
                    <div className='closeContainer'>
                        <Button onClick={() => closePopup()}>Close</Button>
                    </div>
                </div>
            </div>
           
        </div>)
    )
}

export default Popup;