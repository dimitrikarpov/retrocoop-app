import React, { Component } from 'react'
import { Formik, Form, Field, useField } from 'formik'
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

const initialValues = {
  game: 'chip and dale',
  platform: '',
  skill: '',
  use_mic: false,
  starts_at: '',
  ends_at: ''
}

class NewRequest extends Component {
  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true)
          // make async call
          console.log('submit data', data)
          setSubmitting(false)
          resetForm()
        }}
        validate={(values) => {
          const errors = {}

          if (values.game === '') {
            errors.game = 'game is required'
          }

          return errors
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <Field name="starts_at" type="datetime-local" as={StartsAtField} />

            <Field name="ends_at" as={EndsAtField} />

            <Field name='game' as={GameField} />

            <Field name='use_mic' type='checkbox' as={Checkbox} />

            <div>skill:</div>
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

            <Field
              name='platform'
              options={platforms}
              placeholder='select platform'
              as={Select}
            />

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

const StartsAtField = ({type, ...props}) => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ''

  return <TextField {...field} type={type} helperText={errorText} />
}

const EndsAtField = props => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ''

  return <TextField {...field} type="datetime-local" helperText={errorText} />
}
