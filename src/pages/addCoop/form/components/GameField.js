import React from 'react'
import { useField } from 'formik'
import Autocomplete from 'components/forms/autocomplete/Autocomplete'
import GamesService from 'services/api/gamesApi'

const GameField = ({setFieldValue, ...props}) => {
  const [field, meta] = useField(props)

  const errorText = meta.error && meta.touched ? meta.error : ''

  const onChange = (value) => {
    setFieldValue('game', value)
  }

  return (
    <Autocomplete
      {...field}
      onChange={onChange}
      helperText={errorText}
      error={!!meta.error}
      fetch={GamesService.get}
      field='title'
      mapper={response => {
        const res = JSON.parse(response)
        return res.data.map(game => ({
          value: game.id,
          title: game.title
        }))
      }}
    />
  )
}

export default GameField
