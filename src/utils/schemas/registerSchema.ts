import * as Yup from 'yup';

export const initialValues: {
  name: string;
  email: string;
  password: string;
  confPassword: string;
} = {
  name: '',
  email: '',
  password: '',
  confPassword: '',
};

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .required('Este campo es obligatorio')
    .min(6, 'Mínimo 6 caracteres')
    .max(20, 'Máximo 20 caracteres'),
  email: Yup.string()
    .required('Este campo es obligatorio')
    .email('Ingresá un email válido'),
  password: Yup.string()
    .required('Este campo es obligatorio')
    .min(8, 'Mínimo 8 caracteres')
    .max(24, 'Máximo 24 caracteres')
    .matches(/\d/, 'Debe contener al menos 1 número'),
  confPassword: Yup.string()
    .required('Este campo es obligatorio')
    .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden'),
});
