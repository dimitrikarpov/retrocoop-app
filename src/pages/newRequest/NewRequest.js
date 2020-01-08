import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import Input from 'components/forms/input/Input'

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
        onSubmit={(data, {setSubmitting, resetForm}) => {
          setSubmitting(true)
          // make async call
          console.log('submit data', data)
          setSubmitting(false)
          resetForm()
        }}
      >
        {({values, isSubmitting}) => (
          <Form>
            <Field name="game" as={Input} />

            <button disabled={isSubmitting} type="submit">Submit</button>

            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    )
  }
}

export default NewRequest
