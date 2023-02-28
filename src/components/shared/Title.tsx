type TitleProps = {
  children: React.ReactNode
}

const Title = ({ children }: TitleProps) => {
  return (
    <h2 className='text-xl font-semibold leading-6 text-white'>{children}</h2>
  )
}

export default Title
