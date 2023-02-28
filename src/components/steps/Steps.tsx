type StepsProps = {
  numberStep: 1 | 2 | 3
}

const Steps = ({ numberStep }: StepsProps) => {
  const isActive = 'step-primary after:!bg-primary before:!bg-primary !text-xs'
  const size = 'after:!w-5 after:!h-5 before:!h-1'
  const reset = 'after:!bg-white before:!bg-white'
  return (
    <div className='mx-auto w-min'>
      <ul className={`steps`}>
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <li
              className={`step ${numberStep > i ? isActive : reset} ${size} `}
              data-content={numberStep > i ? i + 1 : ''}
              key={i}
            ></li>
          ))}
      </ul>
    </div>
  )
}

export default Steps
