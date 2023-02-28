import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full pt-6 text-white bg-bgColor'>
      <div className='w-full px-4 py-2 bg-primary'>Logo</div>
      <div className='flex justify-around py-4 text-xs font-normal border-b md:text-base border-primary '>
        <ul className='flex flex-col space-y-2'>
          <Link className='hover:text-primary' href='/'>
            Home
          </Link>
          <Link className='hover:text-primary' href='/nuevos-ingresos'>
            Nuevos ingresos
          </Link>
          <Link className='hover:text-primary' href='/figuras'>
            Figuras de colección
          </Link>
          <Link className='hover:text-primary' href='/nuevos-ingresos'>
            Cartas
          </Link>
        </ul>
        <ul className='flex flex-col space-y-2'>
          <Link className='hover:text-primary' href='/comic-manga'>
            Comic y manga
          </Link>
          <Link className='hover:text-primary' href='/indumentaria'>
            Indumentaria
          </Link>
        </ul>
      </div>
      <div>
        <p className='py-4 mx-auto text-xs text-center text-text-footer'>
          © 2023 Comics SRL - Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}

export default Footer
