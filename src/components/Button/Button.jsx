import './Button.css'

const Button = ({children, onClick}) => {

    return (
        <div className='buttonBackground'>
            <button onClick={onClick} className='projButton'>
                {children}
            </button>
        </div>
    )
}

export default Button;