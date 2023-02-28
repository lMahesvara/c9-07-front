type Props = {
  id: string
  src: string
}

const CarouselItem = ({ id, src }: Props) => {
  return (
    <div id={id} className='w-full carousel-item'>
      <img src={src} className='w-full rounded-lg' />
    </div>
  )
}

export default CarouselItem
