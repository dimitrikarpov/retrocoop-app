import React from 'react'
import PropTypes from 'prop-types'

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
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}
