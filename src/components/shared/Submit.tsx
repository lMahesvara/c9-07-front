type Props = {
  label: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Submit = ({ label, onClick }: Props) => {
  return (
    <button
      type="submit"
      className="rounded-lg bg-primary py-3 grid place-content-center w-full text-white leading-[19px] font-medium tracking-[-0.165px] mt-6 h-12"
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Submit
