import React from 'react'
import CarouselItem from './CarouselItem'
import CarouselButton from './CarouselButton'

const SingleProductCarousel = () => {
  return (
    <>
      <div className='w-full carousel'>
        <CarouselItem id='item1' src='/images/product-page.png' />
        <CarouselItem id='item2' src='/images/product-page.png' />
        <CarouselItem id='item3' src='/images/product-page.png' />
        <CarouselItem id='item4' src='/images/product-page.png' />
      </div>
      <div className='flex justify-center w-full gap-2 py-2'>
        <CarouselButton href='#item1' />
        <CarouselButton href='#item2' />
        <CarouselButton href='#item3' />
        <CarouselButton href='#item4' />
      </div>
    </>
  )
}

export default SingleProductCarousel
