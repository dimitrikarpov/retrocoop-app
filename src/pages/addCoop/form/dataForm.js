import React from 'react'
import { shape, arrayOf, string } from 'prop-types'
import { connect } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import './styles.scss'

import { initialValues, validationSchema } from './constants'
import GameField from './components/GameField'
import StartsAtField from './components/StartsAtField'
import EndsAtField from './components/EndsAtField'
import PlatformField from './components/PlatformField'
import Checkbox from 'components/forms/checkbox/Checkbox'
import Radio from 'components/forms/radio/Radio'
import CoopsService from 'services/api/coopsApi'

const DataForm = ({ platforms }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(data, { setSubmitting, resetForm, setErrors }) => {
      setSubmitting(true)
      // make async call

      CoopsService.create(data)
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

  >
    {({ values, isSubmitting, setFieldValue }) => (
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
            <GameField name='game' type='text' setFieldValue={setFieldValue}/>

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
