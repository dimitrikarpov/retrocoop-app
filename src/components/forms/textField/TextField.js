import React from 'react'
import PropTypes from 'prop-types'

const TextField = ({label, name, type, value, placeholder, onChange}) => (
  <div className='form-group'>
    <label className='form-label'>{label}</label>
    <input
      className='form-input'
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete="off"
    />
  </div>
)

TextField.defaultProps = {
  type: 'text',
  label: ''
}

TextField.propTypes = {
  type: PropTypes.oneOf(['text', 'number']),
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default TextField
