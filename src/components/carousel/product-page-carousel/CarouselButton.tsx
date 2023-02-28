type Props = {
  href: string
}

const CarouselButton = ({ href }: Props) => {
  return (
    <a
      href={href}
      className='rounded-full bg-[#D9D9D9] w-2 h-2 hover:bg-primary active:bg-primary'
    ></a>
  )
}

export default CarouselButton
