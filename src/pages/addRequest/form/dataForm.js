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
import GamesService from 'api/newservices/games'
import Autocomplete from 'components/forms/autocomplete/Autocomplete'

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
        <Autocomplete
          name='game2'
          fetch={GamesService.get}
          field='title'
          transformResponse={response => {
            const data = JSON.parse(response)
            return data.data.map(game => ({ value: game.id, title: game.title }))
          }}
        />

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

// {"success":true,"count":4,"data":[{"images":["http://127.0.0.1:3003/images/zx-10th-frame/1.gif","http://127.0.0.1:3003/images/zx-10th-frame/2.gif","http://127.0.0.1:3003/images/zx-10th-frame/3.gif","http://127.0.0.1:3003/images/zx-10th-frame/4.gif"],"_id":"5de3f6f4c9af1c2c631dd76c","platform":{"_id":"5de3f6eb293acc2c2fdb7e9e","title":"ZX-Spectrum","slug":"zx","id":"5de3f6eb293acc2c2fdb7e9e"},"title":"10th Frame","description":"Hic modi doloremque temporibus iure aut est consectetur repudiandae. Tenetur ut molestiae sequi sit nam porro accusamus. Ut commodi cumque autem asperiores rerum et quia doloremque. Est laborum voluptates consequatur. Tempore iste laborum molestias ullam.","__v":0,"id":"5de3f6f4c9af1c2c631dd76c"},{"images":["http://127.0.0.1:3003/images/zx-1942/1.gif","http://127.0.0.1:3003/images/zx-1942/2.gif","http://127.0.0.1:3003/images/zx-1942/3.gif"],"_id":"5de3f6f4c9af1c2c631dd76f","platform":{"_id":"5de3f6eb293acc2c2fdb7e9e","title":"ZX-Spectrum","slug":"zx","id":"5de3f6eb293acc2c2fdb7e9e"},"title":"1942","description":"Cupiditate cupiditate aut consequatur et. Vitae ea minus assumenda tempora accusantium ipsam voluptatem est dolor. Ea nobis maiores id ipsa. Aut qui tempore corporis. Et ratione alias ab perferendis adipisci debitis consequuntur.","__v":0,"id":"5de3f6f4c9af1c2c631dd76f"},{"images":["http://127.0.0.1:3003/images/zx-1942-mission/1.gif","http://127.0.0.1:3003/images/zx-1942-mission/2.gif"],"_id":"5de3f6f4c9af1c2c631dd770","platform":{"_id":"5de3f6eb293acc2c2fdb7e9e","title":"ZX-Spectrum","slug":"zx","id":"5de3f6eb293acc2c2fdb7e9e"},"title":"1942 Mission","description":"Quibusdam libero aperiam maiores ut adipisci veritatis possimus et. Rem et nesciunt. Aut quis dolore consequuntur qui nihil et labore nihil quis. Odit rerum velit sed provident et.","__v":0,"id":"5de3f6f4c9af1c2c631dd770"},{"images":["http://127.0.0.1:3003/images/zx-180-mad-games/1.gif","http://127.0.0.1:3003/images/zx-180-mad-games/2.gif","http://127.0.0.1:3003/images/zx-180-mad-games/3.gif"],"_id":"5de3f6f4c9af1c2c631dd76d","platform":{"_id":"5de3f6eb293acc2c2fdb7e9e","title":"ZX-Spectrum","slug":"zx","id":"5de3f6eb293acc2c2fdb7e9e"},"title":"180! (Mad Games)","description":"Sunt reprehenderit quam inventore sapiente totam eos qui voluptatem consectetur. Pariatur ea et voluptatum explicabo voluptatem quaerat neque vero eos. Doloribus deserunt nostrum alias et dolores repellendus inventore voluptas. Magni facilis pariatur est eaque quasi quidem repudiandae reprehenderit tempore. Beatae et et corrupti repudiandae vel rerum delectus veniam. Ex magnam doloremque optio.","__v":0,"id":"5de3f6f4c9af1c2c631dd76d"}],"pagination":{"next":{"page":2,"limit":4}}}
