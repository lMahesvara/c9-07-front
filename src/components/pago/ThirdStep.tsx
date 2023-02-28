import Steps from '../steps/Steps'
import Title from '../shared/Title'
import ConfirmCard from '../cards/ConfirmCard'
import { Compra } from '@/types/Compra'

type ThirdStepProps = {
  handlePrevStep: (steps?: number | undefined) => void
  compra: Compra
}

const ThirdStep = ({ handlePrevStep, compra }: ThirdStepProps) => {
  const handleClick = () => {
    compra.total = (compra.subtotal ?? 0) + (compra?.tipoEnvio?.costo ?? 0)
    console.log(compra)
    //parse to JSON
    console.log(JSON.stringify(compra, null, 2))
  }

  return (
    <div className='flex flex-col justify-between flex-1 min-h-checkout'>
      <div>
        <div className='mb-2'>
          <Steps numberStep={3} />
        </div>
        <div>
          <Title>Confirmación de Compra</Title>
          <div className='flex flex-col gap-4 mt-4'>
            <ConfirmCard
              handlePrevStep={handlePrevStep}
              title='Envío'
              subtitle='Método de envío'
              text='A domicilio'
              description=''
              prevStep={2}
            />
            <ConfirmCard
              handlePrevStep={handlePrevStep}
              title='Método de pago'
              subtitle='Forma de pago'
              text='Mercado Pago'
              description='Facturado a nombre de: Juan Perez'
              prevStep={1}
            />
          </div>
        </div>
      </div>
      <div className='mt-32'>
        <button
          className='w-full h-12 bg-primary text-white disabled:text-[#D9D9D9] disabled:bg-[#999999] text-base leading-6 font-medium text-center rounded-lg '
          onClick={handleClick}
        >
          Pagar
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

export default ThirdStep
