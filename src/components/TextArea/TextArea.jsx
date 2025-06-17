import './TextArea.css'

const TextArea = ({label, name, value, error, onChange}) => {

    return (
        <div className='textareaComponent'>
            <label>{label}</label>
            <textarea name={name} value={value} onChange={onChange}></textarea>
            {error && <div className='error'>{error}</div>}
        </div>
    )
}

export default TextArea;