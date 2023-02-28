import ProductCard from '@/components/cards/product-card/ProductCard'
import ImageSkeleton from '@/components/skeleton/ImageSkeleton'
import Link from 'next/link'

export default function Home() {
  return (
    <main className=' bg-bgColor md:mt-14'>
      <section className='max-w-[1440px] mx-auto bg-cover min-h-wNav md:min-h-[calc(100vh-208px)] md:bg-hero-pattern-desktop bg-hero-pattern md:px-[120px]'></section>
      <section className='w-full max-w-[1440px] md:px-[120px] mx-auto flex flex-col md:flex-row gap-4 md:gap-8 mt-10 px-4 md:justify-evenly md:items-center'>
        <Link href='/category/new-releases'>
          <img src='/images/Home-promo-image1.png' alt='promo1' />
        </Link>
        <Link href='/category/new-releases'>
          <img src='/images/Home-promo-image2.png' alt='promo2' />
        </Link>
      </section>
      <section className='p-4 bg-bgColor max-w-[1440px] mx-auto md:px-[120px]'>
        <h3 className='text-2xl font-bold text-white'>¡Nuevos Ingresos!</h3>
        <div className='grid content-center grid-cols-2 gap-4 mt-4 justify-items-center sm:grid-cols-4 md:grid-cols-5 md:gap-8'>
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <ProductCard key={i} />
            ))}
        </div>
      </section>
      <section className='max-w-[1440px] md:px-[120px] mx-auto mt-4 md:mt-8 px-4'>
        <Link href='/category/new-releases' className='mx-auto'>
          <img
            className='mx-auto'
            src='/images/Home-hero-promo.png'
            alt='promo1'
          />
        </Link>
      </section>
    </main>
  )
}
