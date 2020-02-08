import React from 'react'
import { useField } from 'formik'
import Select from 'components/forms/select/Select'

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

export default PlatformField
