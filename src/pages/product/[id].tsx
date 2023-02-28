import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs'
import DiscountTag from '@/components/cards/product-card/DiscountTag'
import SingleProductCarousel from '@/components/carousel/product-page-carousel/SingleProductCarousel'
import RecommendedProducts from '@/components/shared/RecommendedProducts'
import Submit from '@/components/shared/Submit'
import { useCart } from '@/context/CartContext'
import { Product } from '@/types/Product'

type Props = {
  product: Product
}

const Product = ({ product }: Props) => {
  const { addProducto } = useCart()

  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  })

  const handleAddToCart = () => {
    console.log('add to cart')
    addProducto(product)
    //TODO: show toast with product added to cart
  }

  return (
    <main className='p-4 bg-bgColor'>
      <Breadcrumbs category='Figuras' productName='FUNKO POP Venom' />
      <div>
        {/* Carousel */}
        <div>
          <SingleProductCarousel />
        </div>
        <div>
          <h3 className='text-xl font-semibold text-white'>{product.name}</h3>
          <p className='mt-2 text-sm font-medium line-through text-discount'>
            {product.discount > 0 ? formatter.format(product.price) : ''}
          </p>
          <span className='flex items-center text-[32px] font-semibold text-white'>
            {formatter.format(
              product.price - (product.price * product.discount) / 100
            )}
            <DiscountTag
              discount={product.discount}
              textSize='text-xs'
              w='w-12'
              h='h-6'
            />
          </span>
          {/* <p className="text-sm font-normal text-description ">
            Lorem ipsum dolor sit amet consectetur. Nunc blan rem ipsum dolor
            sit amet consectetur. Nunc blan
          </p> */}
          <Submit label='Agregar al carrito' onClick={handleAddToCart} />
          <button className='rounded-lg bg-transparent py-3 grid place-content-center border-2 border-primary w-full text-white leading-[19px] font-medium tracking-[-0.165px] mt-4'>
            Compra ahora
          </button>
        </div>
        <div className='flex flex-col gap-4 mt-9'>
          <h3 className='text-base font-medium text-white'>Descripción</h3>
          <p className='text-sm font-normal text-description'>
            {product.description}
          </p>
        </div>
        <RecommendedProducts />
      </div>
    </main>
  )
}

export function getServerSideProps() {
  const product: Product = {
    id: Math.trunc(Math.random() * 10000000) + '',
    name: 'FUNKO POP Venom',
    price: 4300,
    discount: 18,
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc blan rem ipsum dolor sit amet consectetur. Nunc blan',
  }

  return {
    props: {
      product,
    },
  }
}

export default Product
