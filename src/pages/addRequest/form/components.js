import React from 'react'
import { compose, mapProps } from 'recompose'
import { useField } from 'formik'
import Autocomplete from 'components/forms/autocomplete/Autocomplete'
import withDataFetching from 'components/forms/autocomplete/withDataFetching'
import TextField from 'components/forms/textField/TextField'
import Select from 'components/forms/select/Select'
import GamesService from 'api/services/games'

const GameAutocomplete = compose(
  withDataFetching({
    request: GamesService.getAll,
    params: { limit: 5 }
  }),
  mapProps(ownerProps => {
    const data = ownerProps.results.map(({ id, title }) => ({
      value: id,
      title: title
    }))

    return {
      options: data
    }
  })
)(Autocomplete)

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
  PlatformField,
  GameAutocomplete
}
