import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ name, value, options, placeholder, onChange }) => (
  <div className='form-group'>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className='form-select'
    >
      <option value=''>{placeholder}</option>
      {options.map(option => {
        return (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        )
      })}
    </select>
  </div>
)

Select.defaultProps = {
  value: '',
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default Select
