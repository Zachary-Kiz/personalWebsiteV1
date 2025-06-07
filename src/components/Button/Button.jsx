import './Button.css'

const Button = ({children}) => {

    return (
        <div className='buttonBackground'>
            <button className='projButton'>
                {children}
            </button>
        </div>
    )
}

export default Button;