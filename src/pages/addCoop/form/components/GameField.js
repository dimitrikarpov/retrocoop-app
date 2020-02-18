import React from 'react'
import { useField } from 'formik'
import FormGroup from 'components/forms/formGroup/FormGroup'
import Autocomplete from 'components/forms/autocomplete/Autocomplete'
import GamesService from 'services/api/gamesApi'

const GameField = ({ setFieldValue, ...props }) => {
  const [field, meta] = useField(props)

  const errorText = meta.error && meta.touched ? meta.error : ''

  const onChange = value => {
    setFieldValue('game', value)
  }

  return (
    <FormGroup error={!!errorText} helperText={errorText}>
      <Autocomplete
        {...field}
        onChange={onChange}
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
    </FormGroup>
  )
}

export default GameField
