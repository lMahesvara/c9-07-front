import React, { useState } from 'react'
import Steps from '../steps/Steps'
import Title from '../shared/Title'
import RadioBtn from '../shared/RadioBtn'
import { OpcionesPago } from '@/types/Enums'
import { Compra } from '@/types/Compra'

type SecondStepProps = {
  handlePrevStep: (steps?: number | undefined) => void
  handleNextStep: () => void
  compra: Compra
}

const SecondStep = ({
  handlePrevStep,
  handleNextStep,
  compra,
}: SecondStepProps) => {
  const [picked, setPicked] = useState('')

  const handlePick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPicked(e.target.value)
  }

  const handleClick = () => {
    if (picked === OpcionesPago.MercadoPago) {
      compra.tipoPago = OpcionesPago.MercadoPago
    } else {
      compra.tipoPago = OpcionesPago.Efectivo
    }
    handleNextStep()
  }

  return (
    <div className='flex flex-col justify-between flex-1 min-h-checkout'>
      <div>
        <div className='mb-2'>
          <Steps numberStep={2} />
        </div>
        <div>
          <Title>Seleccionar Método de Pago</Title>
          <div className='flex flex-col gap-4 mt-4'>
            <RadioBtn
              img='icons/Mercado-pago.svg'
              label={OpcionesPago.MercadoPago}
              onChange={handlePick}
            />
            <RadioBtn
              img='icons/Efectivo.svg'
              label={OpcionesPago.Efectivo}
              onChange={handlePick}
            />
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <button
          className='w-full h-12 bg-primary text-white disabled:text-[#D9D9D9] disabled:bg-[#999999] text-base leading-6 font-medium text-center rounded-lg '
          disabled={picked === ''}
          onClick={handleClick}
        >
          Elegir método de pago
        </button>
        <button
          className='bg-[#0F0F0F] text-white border-2 border-primary rounded-lg text-base leading-4 font-medium track-[-0.17px] h-12 w-full mt-4 '
          onClick={() => handlePrevStep(1)}
        >
          Volver
        </button>
      </div>
    </div>
  )
}

export default SecondStep
