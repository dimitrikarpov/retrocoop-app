import React from 'react'
import PropTypes from 'prop-types'

const Input = props => (
  <div className='form-group'>
    <label className='form-label'>{props.title}</label>
    <input
      className='form-input'
      name={props.name}
      type={props.inputType}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  </div>
)

Input.propTypes = {
  inputType: PropTypes.oneOf(['text', 'number']).isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string
}

export default Input

// more at https://lorenstewart.me/2016/10/31/react-js-forms-controlled-components/
