import './TextArea.css'

const TextArea = ({label, name, value, onChange}) => {

    return (
        <>
            <label>{label}</label>
            <textarea name={name} value={value} onChange={onChange}></textarea>
        </>
    )
}

export default TextArea;