import React, { Component } from 'react'
import { func, arrayOf, string, shape } from 'prop-types'
import cn from 'classnames'
import './styles.scss'

class Autocomplete extends Component {
  state = {
    input: '',
    visible: true
  }

  onChange = e => {
    this.setState({ input: e.target.value })
    this.props.onChange(e)
  }

  render() {
    const { input, visible } = this.state
    const { options } = this.props

    return (
      <div className='autocomplete'>
        <div className='input__wrapper'>
          <input
            className='input'
            type='text'
            value={input}
            onChange={this.onChange}
          />
        </div>
        <div
          className={cn('suggestions__wrapper', {
            'suggestions__wrapper--hidden': !visible
          })}
        >
          <ul className='suggestion-items'>
            {options.map(({value, title}) => (
              <li key={value} className='suggestion-item'>
                {title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

Autocomplete.defaultProps = {
  onChange: () => {},
  options: []
}

Autocomplete.propTypes = {
  onChange: func,
  options: arrayOf(shape({
      value: string,
      title: string,
  }))
}

export default Autocomplete
