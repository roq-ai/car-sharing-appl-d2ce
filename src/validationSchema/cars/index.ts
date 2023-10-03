import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  model: yup.string().nullable(),
  year: yup.number().integer().required(),
  color: yup.string().nullable(),
  mileage: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
