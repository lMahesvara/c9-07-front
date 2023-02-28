import CartItem from '@/components/cards/CartItem'
import StepComponent from '@/components/pago/StepComponent'
import Title from '@/components/shared/Title'
import { useAuth } from '@/context/AuthContext'
import { useCart } from '@/context/CartContext'
import { Compra } from '@/types/Compra'
import { NextPageContext } from 'next'
import { useRouter } from 'next/router'
import { getCookie } from 'cookies-next'
import isAuth from '@/utils/fetch/fetchAuth'

const Index = () => {
  const { token } = useAuth()
  const router = useRouter()
  const { productos, getSubtotal } = useCart()
  const compra: Compra = {
    productos: productos,
    subtotal: getSubtotal(),
  }

  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  })

  /* useEffect(() => {
    if (!token) {
      router.push('/login')
    }
  }, [token])

  if (!token) {
    return null
  } */

  return (
    <main className='p-6 bg-bgColor'>
      {<StepComponent compra={compra} />}
      <div className='mt-10'>
        <Title>Tu compra</Title>
        <div className='flex flex-col gap-4 mt-4'>
          {productos.map(producto => (
            <CartItem key={producto.id} product={producto} readOnly />
          ))}
        </div>
      </div>
      <div>
        <div className='flex justify-between mt-4'>
          <p className='text-base font-normal leading-6 text-[#CDCDCD]'>
            Subtotal
          </p>
          <p className='text-base font-normal leading-6 text-[#CDCDCD]'>
            {formatter.format(getSubtotal())}
          </p>
        </div>
        <div className='flex justify-between mt-2'>
          <p className='text-base font-normal leading-6 text-[#CDCDCD]'>
            Envío
          </p>
          <p className='text-base font-normal leading-6 text-[#CDCDCD]'>$500</p>
        </div>
        <div className='flex justify-between mt-4'>
          <p className='text-base font-normal leading-6 text-white'>Total</p>
          <p className='text-base font-normal leading-6 text-white'>$7.552</p>
        </div>
      </div>
    </main>
  )
}

type Props = {
  req: NextPageContext['req']
  res: NextPageContext['res']
}

export async function getServerSideProps({ req, res }: Props) {
  const token = getCookie('Authorization', { req, res }) as string

  if (await isAuth(token)) {
    return {
      props: {},
    }
  }

  res?.writeHead(302, { Location: '/login' })
  res?.end()
  return { props: {} }
}

export default Index
