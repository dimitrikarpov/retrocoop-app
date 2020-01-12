import React, { Component } from 'react'
import { Formik, Form, Field, useField } from 'formik'
import './newRequestForm.css'
import TextField from 'components/forms/textField/TextField'
import Checkbox from 'components/forms/checkbox/Checkbox'
import Radio from 'components/forms/radio/Radio'
import Select from 'components/forms/select/Select'

const platforms = [
  { value: 'zx', title: 'zx-spectrum' },
  { value: 'nes', title: 'nintedo entertainemt system' },
  { value: 'snes', title: 'super nintendo' },
  { value: 'smd', title: 'sega mega drive' }
]

class NewRequest extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          game: '',
          platform: '',
          skill: '',
          use_mic: true,
          starts_at: '',
          ends_at: ''
        }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true)
          // make async call
          console.log('submit data', data)
          setSubmitting(false)
          resetForm()
        }}
        validate={values => {
          const errors = {}

          if (values.game === '') {
            errors.game = 'game is required'
          }

          return errors
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <div className='form-grid'>
              <label htmlFor='starts_at'>Starts At</label>
              <Field
                name='starts_at'
                type='datetime-local'
                as={StartsAtField}
              />

              <label htmlFor='ends_at'>Ends At</label>
              <Field name='ends_at' as={EndsAtField} />

              <label htmlFor='use_mic'>Do You Want To Use Microphone? </label>
              <Field name='use_mic' type='checkbox' as={Checkbox} />

              <label htmlFor='game'>Game You Want To Play</label>
              <Field name='game' as={GameField} />

              <label htmlFor='platform'>Or choose platform</label>
              <Field
                name='platform'
                options={platforms}
                placeholder='select platform'
                as={Select}
              />

              <label>What is You skill in this game</label>
              <div>
                <Field
                  name='skill'
                  type='radio'
                  value='1'
                  label='not played before'
                  as={Radio}
                />
                <Field
                  name='skill'
                  type='radio'
                  value='2'
                  label='I know this game'
                  as={Radio}
                />
                <Field
                  name='skill'
                  type='radio'
                  value='3'
                  label="I'm pro in this game"
                  as={Radio}
                />
              </div>
            </div>

            <button disabled={isSubmitting} type='submit'>
              Submit
            </button>

            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    )
  }
}

export default NewRequest

const GameField = props => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ''

  return <TextField {...field} helperText={errorText} />
}

const StartsAtField = ({ type, ...props }) => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ''

  return <TextField {...field} type={type} helperText={errorText} />
}

const EndsAtField = props => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ''

  return <TextField {...field} type='datetime-local' helperText={errorText} />
}
