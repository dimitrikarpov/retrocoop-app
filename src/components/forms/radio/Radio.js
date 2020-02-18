import React from 'react'
import {string, oneOfType, bool, func} from 'prop-types'

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
  name: string.isRequired,
  value: oneOfType([string, bool]),
  checked: bool.isRequired,
  disabled: bool,
  onChange: func.isRequired
}
