import React from 'react'
import { string, oneOfType, number, oneOf, bool, func } from 'prop-types'
import cn from 'classnames'
import '../styles.scss'

const TextField = ({
  name,
  type,
  value,
  placeholder,
  helperText,
  error,
  onChange
}) => (
  <div className='form-group'>
    <input
      className={cn('form-input', { 'form-input--error': error })}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete='off'
    />
    <span
      className={cn('form-input__helper-text', {
        'form-input__helper-text--error': error
      })}
    >
      {helperText}
    </span>
  </div>
)

TextField.defaultProps = {
  type: 'text',
  error: false
}

TextField.propTypes = {
  name: string.isRequired,
  value: oneOfType([string, number]).isRequired,
  placeholder: string,
  helperText: string,
  type: oneOf(['text', 'number', 'date', 'time', 'email', 'datetime-local']),
  error: bool,
  onChange: func.isRequired
}

export default TextField
