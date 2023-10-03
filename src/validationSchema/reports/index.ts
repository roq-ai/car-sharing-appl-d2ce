import * as yup from 'yup';

export const reportValidationSchema = yup.object().shape({
  issue: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  car_id: yup.string().nullable().required(),
});
