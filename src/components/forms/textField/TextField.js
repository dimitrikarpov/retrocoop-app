import React from 'react'
import { string, oneOfType, number, oneOf, func } from 'prop-types'
import cn from 'classnames'
import '../styles.scss'
import FormGroup from 'components/forms/formGroup/FormGroup'

const TextField = ({
  name,
  type,
  value,
  placeholder,
  helperText,
  error,
  onChange
}) => (
  <FormGroup error={error} helperText={helperText}>
    <input
      className={cn('form-input', { 'form-input--error': error })}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete='off'
    />
  </FormGroup>
)

TextField.defaultProps = {
  type: 'text'
}

TextField.propTypes = {
  name: string.isRequired,
  value: oneOfType([string, number]).isRequired,
  placeholder: string,
  type: oneOf(['text', 'number', 'date', 'time', 'email', 'datetime-local']),
  onChange: func.isRequired
}

export default TextField
