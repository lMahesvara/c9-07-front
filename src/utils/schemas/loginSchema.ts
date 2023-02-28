import * as Yup from 'yup';

export const initialValues: {
  email: string;
  password: string;
} = {
  email: '',
  password: '',
};

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Este campo es obligatorio')
    .email('Ingresá un email válido'),
  password: Yup.string().required('Este campo es obligatorio'),
});
