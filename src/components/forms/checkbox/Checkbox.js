import React from 'react'
import PropTypes from 'prop-types'

class Checkbox extends React.Component {
  state = {
    checked: this.props.checked
  }

  handleChange = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    const { disabled, title } = this.props
    const { checked } = this.state
    return (
      <div className='form-group'>
        <label className='form-label'>{title}</label>
        <input
          type='checkbox'
          checked={checked}
          disabled={disabled}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Checkbox

Checkbox.defaultProps = {
  checked: false,
  disabled: false
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string
}

// more at https://codepen.io/darylw/pen/Kxaxop
