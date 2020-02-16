import React from 'react'
import {string, bool, arrayOf, oneOfType, node} from 'prop-types'
import cn from 'classnames'

const FormGroup = props => {
  return (
    <div className='form-group'>
      {props.children}
      <span
        className={cn('form-input__helper-text', {
          'form-input__helper-text--error': props.error
        })}
      >
        {props.helperText}
      </span>
    </div>
  )
}

export default FormGroup

FormGroup.defaultProps = {
  error: false
}

FormGroup.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node
  ]).isRequired,
  error: bool,
  helperText: string
}
