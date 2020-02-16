import * as yup from 'yup'

export const initialValues = {
  game: '',
  platform: '',
  skill: '',
  use_mic: true,
  starts_at: '2020-01-09T05:04',
  ends_at: '2020-01-09T05:04'
  // starts_at: '',
  // ends_at: ''
}

export const validationSchema = yup.object({
  game: yup
    .string()
    .required()
    .max(25),
  platform: yup.number().required(),
  starts_at: yup.date().required(),
  ends_at: yup.date().required()
})
