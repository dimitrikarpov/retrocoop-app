import React from 'react'
import { useField } from 'formik'
import TextField from 'components/forms/textField/TextField'

const GameField = props => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ''

  return <TextField {...field} helperText={errorText} error={!!meta.error} />
}

export default GameField
