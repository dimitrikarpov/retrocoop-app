import React from 'react'
import PropTypes from 'prop-types'

const Radio = ({ name, disabled, onChange, checked, value }) => (
  <input
    name={name}
    type='radio'
    checked={checked}
    value={value}
    disabled={disabled}
    onChange={onChange}
  />
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
  onChange: PropTypes.func.isRequired
}
