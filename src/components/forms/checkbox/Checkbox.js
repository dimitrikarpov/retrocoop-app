import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ name, disabled, title, onChange, checked, value }) => (
  <div className='form-group'>
    <label className='form-label'>{title}</label>
    <input
      name={name}
      type='checkbox'
      checked={checked}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  </div>
)

export default Checkbox

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  value: false
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired
}
