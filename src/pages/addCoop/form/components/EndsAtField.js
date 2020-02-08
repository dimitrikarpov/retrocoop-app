import React from 'react'
import { useField } from 'formik'
import TextField from 'components/forms/textField/TextField'

const EndsAtField = props => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ''

  return (
    <TextField
      {...field}
      type='datetime-local'
      helperText={errorText}
      error={!!meta.error}
    />
  )
}

export default EndsAtField
