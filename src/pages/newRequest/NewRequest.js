import React, { Component } from 'react'
import { Formik } from 'formik'
import Input from 'components/forms/input/Input'

const initialValues = {
  game: '',
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
        initialValues={{ game: 'chip and dale' }}
        onSubmit={(data, {setSubmitting, resetForm}) => {
          setSubmitting(true)
          // make async call
          console.log('submit data', data)
          setSubmitting(false)
          resetForm()
        }}
      >
        {({values, handleChange, handleSubmit, isSubmitting}) => (
          <form onSubmit={handleSubmit}>
            <Input
              inputType='text'
              title='game'
              name='game'
              value={values.game}
              onChange={handleChange}
            />
            <button disabled={isSubmitting} type="submit">Submit</button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      </Formik>
    )
  }
}

export default NewRequest
