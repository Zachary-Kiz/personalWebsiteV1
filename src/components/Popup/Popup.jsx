import './Popup.css'
import Button from '../Button/Button';

const Popup = ({children, title, isOpen, setIsOpen}) => {

    return (
        isOpen && (<div className="popupBackground">
            <div className='popupCenter'>
                <div className='popupContainer'>
                    <h2>{title}</h2>
                    <div>
                        {children}
                    </div>
                    <div className='closeContainer'>
                        <Button onClick={() => setIsOpen("")}>Close</Button>
                    </div>
                </div>
            </div>
           
        </div>)
    )
}

export default Popup;