import React from 'react'
import { string, arrayOf, func, shape } from 'prop-types'
import cn from 'classnames'
import '../styles.scss'

const Select = ({
  name,
  value,
  options,
  placeholder,
  error,
  onChange
}) => (
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
)

Select.defaultProps = {
  value: ''
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
  onChange: func.isRequired
}

export default Select
