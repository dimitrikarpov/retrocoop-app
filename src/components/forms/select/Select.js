import React from 'react'
import { string, arrayOf, func, shape, bool } from 'prop-types'
import cn from 'classnames'
import '../styles.scss'

const Select = ({
  name,
  value,
  options,
  placeholder,
  helperText,
  error,
  onChange
}) => (
  <div className='form-group'>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={cn('form-input', { 'form-input--error': error })}
    >
      <option value=''>{placeholder}</option>
      {options.map(({ value, title }) => (
        <option key={value} value={value}>
          {title}
        </option>
      ))}
    </select>
    <span
      className={cn('form-input__helper-text', {
        'form-input__helper-text--error': error
      })}
    >
      {helperText}
    </span>
  </div>
)

Select.defaultProps = {
  value: '',
  error: false
}

Select.propTypes = {
  name: string.isRequired,
  value: string,
  options: arrayOf(
    shape({
      value: string.isRequired,
      title: string.isRequired
    })
  ).isRequired,
  placeholder: string,
  helperText: string,
  error: bool,
  onChange: func.isRequired
}

export default Select
