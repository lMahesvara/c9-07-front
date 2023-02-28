import Link from 'next/link'
import DiscountTag from './DiscountTag'

const ProductCard = () => {
  return (
    <Link
      className='flex flex-col w-full h-full gap-4 p-2 pb-4 bg-white rounded-2xl'
      href='/product/123123'
    >
      <div className='pt-4'>
        <img
          className='object-contain w-full mx-auto max-h-36'
          src='/images/Figura.png'
          alt='Funko Venom'
          loading='lazy'
        />
      </div>
      <div className='flex flex-col justify-center mx-auto w-max'>
        <h3 className='text-sm font-semibold text-text-primary'>
          FUNKO POP Venom
        </h3>
        <p className='text-xs font-normal text-description w-36'>
          Lorem ipsum dolor sit amet consectetur. Nunc blan
        </p>
        <p className='mt-2 text-xs font-medium line-through text-discount'>
          $4.300
        </p>
        <span className='flex items-center text-base font-semibold text-text-primary'>
          $3.526
          <DiscountTag discount={18} />
        </span>
      </div>
    </Link>
  )
}

export default ProductCard
