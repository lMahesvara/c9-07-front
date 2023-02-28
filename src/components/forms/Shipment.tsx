// Formik
import { Formik, Form } from 'formik'

// Schemas
import { shipmentSchema, initialValues } from '@/utils/schemas/shipmentSchema'

import CustomField from '@/components/pago/CustomField'
import { useEffect, useState } from 'react'

type Props = {
  innerRef: any
}

function Shipment({ innerRef }: Props) {
  const [provincias, setProvincias] = useState<string[]>([])

  useEffect(() => {
    const getProvincias = async () => {
      const URL = 'https://apis.datos.gob.ar/georef/api/provincias'
      try {
        const res = await fetch(URL)
        const data = await res.json()
        const provincias = data.provincias.map(
          (provincia: any) => provincia.nombre
        )
        setProvincias(provincias)
      } catch (error) {
        console.log(error)
      }
    }
    getProvincias()
  }, [])

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={shipmentSchema}
      onSubmit={values => console.log(values)}
      innerRef={innerRef}
    >
      <Form className='grid grid-cols-2 gap-2 mb-4'>
        <CustomField label='Nombre' id='nombre' size={2} isText={true} />
        <CustomField label='Apellido' id='apellido' size={2} isText={true} />
        <CustomField label='Calle' id='calle' size={2} isText={true} />
        <CustomField label='Numero' id='numero' size={1} isText={true} />
        <CustomField label='Piso y/o Dpto' id='piso' size={1} isText={true} />
        <CustomField
          label='Código Postal'
          id='codigoPostal'
          size={1}
          isText={true}
        />
        <CustomField label='Ciudad' id='ciudad' size={1} isText={true} />
        <CustomField
          label='Provincia'
          id='provincia'
          size={2}
          isText={false}
          options={provincias}
        />
        <CustomField
          label='Número de Teléfono'
          id='telefono'
          size={2}
          isText={true}
        />
      </Form>
    </Formik>
  )
}

export default Shipment
