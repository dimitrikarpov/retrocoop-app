import React from 'react'
import TextField from 'components/forms/textField/TextField'
import { useField } from 'formik'

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

export {GameField, StartsAtField, EndsAtField}
