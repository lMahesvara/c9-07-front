type Props = {
  handlePrevStep: (steps?: number | undefined) => void
  prevStep: number
  title: string
  subtitle: string
  text: string
  description: string
}

const ConfirmCard = ({
  handlePrevStep,
  title,
  subtitle,
  text,
  description,
  prevStep,
}: Props) => {
  return (
    <article className='rounded-2xl border border-[#e8e8e8] '>
      <div className='w-full p-4 m-0 border-2 border-primary rounded-2xl'>
        <div className='flex justify-between'>
          <p className='text-base font-medium leading-4 text-white'>{title}</p>
          <button
            className='text-base font-normal leading-4 text-white underline'
            onClick={() => handlePrevStep(prevStep)}
          >
            Editar
          </button>
        </div>
      </div>
      <div className='flex flex-col gap-2 p-4 pt-2'>
        <div className='flex justify-between'>
          <p className='text-base font-normal leading-6 text-[#CDCDCD]'>
            {subtitle}
          </p>
          <p className='text-base font-semibold leading-6 text-[#CDCDCD]'>
            {text}
          </p>
        </div>
        <div>
          <p className='text-sm font-normal leading-6 text-[#CDCDCD]'>
            {description}
          </p>
        </div>
      </div>
    </article>
  )
}

export default ConfirmCard
