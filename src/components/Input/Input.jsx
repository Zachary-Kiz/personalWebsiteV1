import './Input.css'

const Input = ({label, name, value, error, onChange}) => {

    return (
        <div className='inputComponent'>
            <label>{label}</label>
            <input name={name} type="text" value={value} onChange={onChange}></input>
            {error && <div className='error'>*{error}</div>}
        </div>
    )
}

export default Input;