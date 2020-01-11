import React from 'react'
import PropTypes from 'prop-types'

const Radio = ({ name, disabled, label, onChange, checked, value }) => (
  <div className='form-group'>
    <label className='form-label'>{label}</label>
    <input
      name={name}
      type='radio'
      checked={checked}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  </div>
)

export default Radio

Radio.defaultProps = {
  checked: false,
  disabled: false,
  value: false
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired
}