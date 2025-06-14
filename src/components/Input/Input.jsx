import './Input.css'

const Input = ({label, name, value, onChange}) => {

    return (
        <>
            <label>{label}</label>
            <input name={name} type="text" value={value} onChange={onChange}></input>
        </>
    )
}

export default Input;