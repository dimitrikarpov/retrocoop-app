import React, { Component } from 'react'
import { connect } from 'react-redux'
import './RequestForm.css'

const skillOptions = [
  { id: 1, title: 'not played before' },
  { id: 2, title: 'I know this game' },
  { id: 3, title: "I'm pro in this game" }
]

class RequestForm extends Component {
  state = {
    starts_at: '',
    ends_at: '',
    use_mic: false,
    platform: '',
    game: '',
    skill: ''
  }

  onSubmit = e => {
    e.preventDefault()
    const { starts_at, ends_at, use_mic, platform, game, skill } = this.state
    this.props.onSubmit({ starts_at, ends_at, use_mic, platform, game, skill })
  }

  onChange = ({ target }) => {
    console.log(target.value)
    if (target.type === 'checkbox') {
      this.setState({ [target.name]: !this.state[target.name] })
    } else {
      this.setState({ [target.name]: target.value })
    }
  }

  render() {
    const { starts_at, ends_at, use_mic, platform, game, skill } = this.state
    const { platforms } = this.props

    return (
      <form onSubmit={this.onSubmit}>
        <div className='post-form'>
          <div className='form-control'>
            <label htmlFor='starts_at'>Session starts at</label>
            <input
              type='datetime-local'
              name='starts_at'
              id='starts_at'
              placeholder='starts at'
              value={starts_at}
              onChange={this.onChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='ends_at'>Session ends at</label>
            <input
              type='datetime-local'
              name='ends_at'
              id='ends_at'
              placeholder='ends at'
              value={ends_at}
              onChange={this.onChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='use_mic'>Use microphone?</label>
            <input
              type='checkbox'
              name='use_mic'
              id='use_mic'
              placeholder='use mic?'
              checked={use_mic}
              onChange={this.onChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='platform'>Choose platform</label>
            <select
              name='platform'
              id='platform'
              value={platform}
              onChange={this.onChange}
            >
              <option value='' disabled>
                choose something
              </option>
              {platforms &&
                platforms.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.title}
                  </option>
                ))}
            </select>
          </div>
          <div className='form-control'>
            <label htmlFor='game'>choose the game</label>
            <input
              type='text'
              name='game'
              id='game'
              placeholder='game name'
              value={game}
              onChange={this.onChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='platform'>Your skill in this game</label>
            <select
              name='skill'
              id='skill'
              value={skill}
              onChange={this.onChange}
            >
              <option value='' disabled>
                choose something
              </option>
              {skillOptions.map(option => (
                <option key={option.id} value={option.id}>
                  {option.title}
                </option>
              ))}
            </select>
          </div>
          <div className='form-control'>
            <input type='submit' value='Submit Request' />
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    platforms: state.platforms.platforms
  }
}

export default connect(
  mapStateToProps,
  null
)(RequestForm)
