type RadioBtnProps = {
  img: string
  label: string
  amount?: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioBtn = ({ img, label, amount, onChange }: RadioBtnProps) => {
  return (
    <div className='border border-[#e8e8e8] form-control rounded-2xl px-4 py-3'>
      <label className='p-0 cursor-pointer label'>
        <div className='flex items-center gap-4'>
          <img src={img} alt='option icon' />
          <span className='text-base font-medium leading-4 text-white'>
            {label}
          </span>
        </div>
        <div className='flex items-center gap-4'>
          <span
            className={`text-base font-semibold leading-4 text-white ${
              amount ?? 'hidden'
            }`}
          >
            ${amount}
          </span>
          <input
            type='radio'
            name='radio-10'
            className='radio radio-xs checked:bg-primary border-[#f3f3f3] !shadow-inner'
            onChange={onChange}
            value={label}
          />
        </div>
      </label>
    </div>
  )
}

export default RadioBtn
