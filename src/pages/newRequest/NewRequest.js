import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import TextField from 'components/forms/textField/TextField'
import Checkbox from 'components/forms/checkbox/Checkbox'
import Radio from 'components/forms/radio/Radio'

const initialValues = {
  game: 'chip and dale',
  platform: '',
  skill: '',
  use_mic: false,
  starts_at: '',
  ends_at: '',
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
      >
        {({ values, isSubmitting }) => (
          <Form>
            <Field name='game' as={TextField} />

            <Field name='use_mic' type='checkbox' as={Checkbox} />

            <div>skill:</div>
            <Field name="skill" type="radio" value="1" label="not played before" as={Radio} />
            <Field name="skill" type="radio" value="2" label="I know this game" as={Radio} />
            <Field name="skill" type="radio" value="3" label="I'm pro in this game" as={Radio} />

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
