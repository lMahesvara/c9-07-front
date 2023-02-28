import { useCart } from '@/context/CartContext'
import { Product } from '@/types/Product'

type CartItemProps = {
  readOnly?: boolean
  product: Product
}

const CartItem = ({ readOnly, product }: CartItemProps) => {
  const { subQuantity, addQuantity, removeProducto } = useCart()

  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
  return (
    <article className='flex gap-4 border border-[#e8e8e8] rounded-2xl p-4 relative'>
      <div className='w-[88px] h-[88px] bg-white rounded-lg flex items-center justify-center my-auto'>
        <img src='/images/product-page.png' alt='product' className='w-full' />
      </div>
      <div className='flex flex-col gap-3'>
        <div>
          <h3 className='text-base font-medium leading-4 text-white'>
            {product.name}
          </h3>
          <p className='text-xs font-normal text-[#d9d9d9] leading-3 mt-[6px]'>
            Ítem: {product.id}
          </p>
        </div>
        <div className='flex gap-4'>
          <div>
            <p className='text-xs font-normal leading-3 text-white'>Cantidad</p>
            {!readOnly ? (
              <div className='flex mt-[6px]'>
                <button
                  className='px-2 bg-[#d9d9d9] rounded-l-md w-6 h-6 text-[#0F0F0F]'
                  onClick={() => subQuantity(product)}
                >
                  -
                </button>
                <input
                  className='w-10 h-6 text-sm font-normal text-center text-[#0F0F0F] bg-white'
                  type='number'
                  value={product.quantity}
                  disabled
                  readOnly
                />
                <button
                  className='px-2 bg-[#d9d9d9] rounded-r-md w-6 h-6 text-[#0F0F0F]'
                  onClick={() => addQuantity(product)}
                >
                  +
                </button>
              </div>
            ) : (
              <div className='flex mt-[6px]'>
                <input
                  className='w-12 h-6 text-sm font-normal text-center text-[#0F0F0F] bg-white rounded-lg'
                  type='number'
                  value={product.quantity}
                  disabled
                  readOnly
                />
              </div>
            )}
          </div>
          <div>
            <p className='text-xs font-normal leading-3 text-white'>Precio</p>
            <p className='mt-[6px] text-2xl font-medium leading-6 text-white '>
              {formatter.format(
                product.price - (product.price * product.discount) / 100
              )}
            </p>
          </div>
        </div>
      </div>
      {!readOnly && (
        <button
          className='absolute right-4 top-4'
          onClick={() => removeProducto(product)}
        >
          <img src='icons/Trash.svg' alt='trash icon' />
        </button>
      )}
    </article>
  )
}

export default CartItem
