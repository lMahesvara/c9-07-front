import React, { useRef, useState } from 'react'
import Title from '../shared/Title'
import { OpcionesEnvio } from '@/types/Enums'
import RadioBtn from '../shared/RadioBtn'
import Steps from '../steps/Steps'
import { Compra } from '@/types/Compra'
import { useRouter } from 'next/router'
import Shipment from '../forms/Shipment'
import { FormikValues } from 'formik'
import { TipoEnvio } from '@/types/TipoEnvio'

type FirstStepProps = {
  handleNextStep: () => void
  compra: Compra
}

const FirstStep = ({ handleNextStep, compra }: FirstStepProps) => {
  const [picked, setPicked] = useState<string>('')
  const route = useRouter()
  const formRef = useRef<FormikValues>(null)

  const handlePick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPicked(e.target.value)
  }

  const handleClick = () => {
    if (picked === OpcionesEnvio.EnvioDomicilio) {
      console.log(formRef.current)
      if (!formRef.current?.isValid || !formRef.current?.dirty) return

      const { values } = formRef.current

      console.log(values)

      compra.tipoEnvio = {
        tipo: OpcionesEnvio.EnvioDomicilio,
        costo: 500,
        datos: {
          ...values,
        },
      } as TipoEnvio

      console.log(compra)
    } else {
      compra.tipoEnvio = {
        tipo: OpcionesEnvio.RecogerTienda,
        costo: 0,
      }
    }
    handleNextStep()
  }

  const handleCancel = () => {
    route.push('/')
  }

  return (
    <div className='flex flex-col justify-between flex-1 min-h-checkout'>
      <div>
        <div className='mb-2'>
          <Steps numberStep={1} />
        </div>
        <Title>Opciones de envío</Title>
        <div className='flex flex-col gap-4 mt-4'>
          <RadioBtn
            img='icons/Car-shipping.svg'
            label={OpcionesEnvio.EnvioDomicilio}
            amount={500}
            onChange={handlePick}
          />
          {picked === OpcionesEnvio.EnvioDomicilio ? (
            <Shipment innerRef={formRef} />
          ) : null}
          <RadioBtn
            img='icons/Basket.svg'
            label={OpcionesEnvio.RecogerTienda}
            amount={0}
            onChange={handlePick}
          />
        </div>
      </div>
      <div className='mt-4'>
        <button
          className='w-full h-12 bg-primary text-white disabled:text-[#D9D9D9] disabled:bg-[#999999] text-base leading-6 font-medium text-center rounded-lg '
          disabled={picked === ''}
          onClick={handleClick}
        >
          Elegir opción de envío
        </button>
        <button
          className='bg-[#0F0F0F] text-white border-2 border-primary rounded-lg text-base leading-4 font-medium track-[-0.17px] h-12 w-full mt-4 '
          onClick={handleCancel}
        >
          Cancelar
        </button>
      </div>
    </div>
  )
}

export default FirstStep
