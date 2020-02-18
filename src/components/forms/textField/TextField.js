import React from 'react'
import { string, oneOfType, number, oneOf, func } from 'prop-types'
import cn from 'classnames'
import '../styles.scss'

const TextField = ({
  name,
  type,
  value,
  placeholder,
  error,
  onChange
}) => (

    <input
      className={cn('form-input', { 'form-input--error': error })}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete='off'
    />
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
