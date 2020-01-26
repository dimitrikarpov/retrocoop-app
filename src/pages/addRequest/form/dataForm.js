import React from 'react'
import { shape, arrayOf, string } from 'prop-types'
import { connect } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import './styles.scss'
import {
  GameField,
  StartsAtField,
  EndsAtField,
  PlatformField
} from './components'
import Checkbox from 'components/forms/checkbox/Checkbox'
import Radio from 'components/forms/radio/Radio'
import RequestsService from 'api/services/requests'

const validationSchema = yup.object({
  game: yup
    .string()
    .required()
    .max(25),
  platform: yup.number(),
  starts_at: yup.date().required(),
  ends_at: yup.date().required()
})

const DataForm = ({ platforms }) => (
  <Formik
    initialValues={{
      game: 'ррррлр',
      platform: '',
      skill: '',
      use_mic: true,
      starts_at: '2020-01-09T05:04',
      ends_at: '2020-01-09T05:04'
      // starts_at: '',
      // ends_at: ''
    }}
    onSubmit={(data, { setSubmitting, resetForm, setErrors }) => {
      setSubmitting(true)
      // make async call

      RequestsService.create(data)
        .then(res => {
          console.log('created succefully', res)
          resetForm()
        })
        .catch(error => {
          const {
            status,
            data: { errors }
          } = error

          if (status === 422 && errors) {
            setErrors(errors)
          } else {
            console.log('Error while creating new COOP', error)
          }
        })

      setSubmitting(false)
    }}
    validationSchema={validationSchema}
  >
    {({ values, isSubmitting }) => (
      <Form>
        <div className='form-container'>
          <div className='form-grid'>
            <label htmlFor='starts_at'>Starts At</label>
            <Field name='starts_at' as={StartsAtField} />

            <label htmlFor='ends_at'>Ends At</label>
            <Field name='ends_at' as={EndsAtField} />

            <label htmlFor='use_mic'>Do You Want To Use Microphone? </label>
            <Field name='use_mic' type='checkbox' as={Checkbox} />

            <label htmlFor='game'>Game You Want To Play</label>
            <Field name='game' as={GameField} />

            <label htmlFor='platform'>Or choose platform</label>
            <Field
              name='platform'
              options={platforms}
              placeholder='select platform'
              as={PlatformField}
            />

            <label>What is You skill in this game</label>
            <div>
              <label className='form__skill'>
                <Field name='skill' type='radio' value='1' as={Radio} />
                <span className='form__skill-label'>not played before</span>
              </label>

              <label className='form__skill'>
                <Field
                  name='skill'
                  type='radio'
                  value='2'
                  label=''
                  as={Radio}
                />
                <span className='form__skill-label'>I know this game</span>
              </label>

              <label className='form__skill'>
                <Field name='skill' type='radio' value='3' as={Radio} />
                <span className='form__skill-label'>I'm pro in this game</span>
              </label>
            </div>
          </div>

          <div className='form__submit-block'>
            <button disabled={isSubmitting} type='submit'>
              Submit
            </button>
          </div>
        </div>

        <pre>{JSON.stringify(values, null, 2)}</pre>
      </Form>
    )}
  </Formik>
)

const mapStateToProps = state => {
  const statePlatforms = state.platforms.platforms
  const platforms = statePlatforms
    ? statePlatforms.reduce(
        (acc, item) => [...acc, { value: item.id, title: item.title }],
        []
      )
    : []

  return { platforms }
}

export default connect(mapStateToProps)(DataForm)

DataForm.defaultProps = {
  platforms: []
}

DataForm.propTypes = {
  platforms: arrayOf(
    shape({
      id: string,
      title: string,
      slug: string
    })
  )
}
