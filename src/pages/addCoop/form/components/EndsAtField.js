import React from 'react'
import { useField } from 'formik'
import FormGroup from 'components/forms/formGroup/FormGroup'
import TextField from 'components/forms/textField/TextField'

const EndsAtField = props => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ''

  return (
    <FormGroup error={!!errorText} helperText={errorText}>
      <TextField
        {...field}
        type='datetime-local'
        error={!!meta.error}
      />
    </FormGroup>
  )
}

export default EndsAtField
