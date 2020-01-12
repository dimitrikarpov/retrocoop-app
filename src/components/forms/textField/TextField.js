import React from 'react'
import PropTypes from 'prop-types'

const TextField = ({name, type, value, placeholder, helperText, onChange}) => (
  <div className='form-group'>
    <input
      className='form-input'
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete="off"
    />
    <span>{helperText}</span>
  </div>
)

TextField.defaultProps = {
  type: 'text',
  error: false,
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'date', 'time', 'email', 'datetime-local']),
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default TextField
