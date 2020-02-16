import React from 'react'
import PropTypes, { bool, func, arrayOf, shape, string } from 'prop-types'
import './style.scss'
import cn from 'classnames'

const Dropdown = ({ options, hidden = false, onChange }) => (
  <div
    className={cn('dropdown__wrap', {
      'dropdown__wrap--hidden': options.length === 0 || hidden
    })}
  >
    <ul className='list-items'>
      {options.map(({ value, title }) => (
        <li className='list-item' onClick={() => onChange(value)} key={value}>
          {title}
        </li>
      ))}
    </ul>
  </div>
)

export default Dropdown

Dropdown.propTypes = {
  hidden: bool,
  onChange: func.isRequired,
  options: arrayOf(
    PropTypes.shape({
      title: string.isRequired,
      value: string.isRequired
    })
  )
}
