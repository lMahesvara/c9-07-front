import * as Yup from 'yup'

type Shipment = {
  nombre: string
  apellido: string
  calle: string
  numero: string
  piso?: string
  codigoPostal: string
  ciudad: string
  provincia: string
  telefono: string
}

export const initialValues: Shipment = {
  nombre: '',
  apellido: '',
  calle: '',
  numero: '',
  piso: '',
  codigoPostal: '',
  ciudad: '',
  provincia: '',
  telefono: '',
}

export const shipmentSchema = Yup.object().shape({
  nombre: Yup.string().required('Requerido').max(24, 'Máximo 24 caractéres'),
  apellido: Yup.string().required('Requerido').max(24, 'Máximo 24 caractéres'),
  calle: Yup.string().required('Requerido').max(40, 'Máximo 40 caractéres'),
  numero: Yup.string().required('Requerido'),
  piso: Yup.string().matches(/^\d+$/, 'Solo números'),
  codigoPostal: Yup.string().required('Requerido'),
  ciudad: Yup.string().required('Requerido'),
  provincia: Yup.string().required('Requerido'),
  telefono: Yup.string().required('Requerido'),
})
