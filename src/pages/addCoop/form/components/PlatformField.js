import React from 'react'
import { useField } from 'formik'
import Select from 'components/forms/select/Select'
import FormGroup from 'components/forms/formGroup/FormGroup'

const PlatformField = ({ options, placeholder, ...props }) => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ''

  return (
    <FormGroup error={!!errorText} helperText={errorText}>
      <Select
        {...field}
        placeholder={placeholder}
        options={options}
        error={!!meta.error}
      />
    </FormGroup>
  )
}

export default PlatformField
