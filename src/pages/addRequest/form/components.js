import React from 'react'
import { useField } from 'formik'
import TextField from 'components/forms/textField/TextField'
import Select from 'components/forms/select/Select'


const GameField = props => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ''

  return <TextField {...field} helperText={errorText} error={!!meta.error} />
}

const StartsAtField = props => {
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

const PlatformField = ({ options, placeholder, ...props }) => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ''

  return (
    <Select
      {...field}
      placeholder={placeholder}
      options={options}
      helperText={errorText}
      error={!!meta.error}
    />
  )
}

export {
  GameField,
  StartsAtField,
  EndsAtField,
  PlatformField
}
