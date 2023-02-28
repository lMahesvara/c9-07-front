import { useState } from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import { Compra } from '@/types/Compra'

type Props = {
  compra: Compra
}

const StepComponent = ({ compra }: Props) => {
  const [step, setStep] = useState(1)

  const handleNextStep = () => {
    console.log('handleNextStep')
    console.log(step)
    setStep(step + 1)
  }

  const handlePrevStep = (steps: number = 1) => {
    console.log('handlePrevStep')
    console.log(step, steps)

    setStep(step - steps)
  }

  switch (step) {
    case 1:
      return <FirstStep handleNextStep={handleNextStep} compra={compra} />
    case 2:
      return (
        <SecondStep
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
          compra={compra}
        />
      )
    case 3:
      return <ThirdStep handlePrevStep={handlePrevStep} compra={compra} />
    default:
      return <FirstStep handleNextStep={handleNextStep} compra={compra} />
  }
}

export default StepComponent
