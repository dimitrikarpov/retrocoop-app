import React from 'react'
import {string, bool, func, oneOfType} from 'prop-types'

const Checkbox = ({ name, disabled, onChange, checked, value }) => (
    <input
      name={name}
      type='checkbox'
      checked={checked}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
)

export default Checkbox

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  value: false
}

Checkbox.propTypes = {
  name: string.isRequired,
  value: oneOfType([string, bool]),
  checked: bool.isRequired,
  disabled: bool,
  onChange: func.isRequired
}
