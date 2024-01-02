import './Input.css'

function Input({handleChange,value, title, name, color }) {
  return (
    <label className='sidebar-label-container'>
                <input onChange={handleChange} type='radio' style={{accentColor:color}} name={name} value={value}  className='checkmark all'/>
                <span >{title}

                </span>
    </label>
  )
}

export default  Input
