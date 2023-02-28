import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Sidebar from './Sidebar'
import SearchInput from './SearchInput'
import { useCart } from '@/context/CartContext'
import NavLink from './NavLink'
import { HiOutlineUserCircle } from 'react-icons/hi'
import NavCategories from './NavCategories'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const router = useRouter()
  const { productos } = useCart()

  const toggleMenu = (
    e:
      | React.MouseEvent<HTMLDivElement>
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
    setIsSearch(false)
  }

  const toggleSearch = () => {
    setIsSearch(!isSearch)
    setIsOpen(false)
  }

  return (
    <>
      <nav className='flex items-center justify-between px-4 py-2 mx-auto border-b border-white max-w-[1440px] md:border-none'>
        <div className='flex items-center justify-center gap-4 md:hidden'>
          <button onClick={toggleMenu}>
            {isOpen ? (
              <img src='/icons/Close.svg' alt='CloseMenu' />
            ) : (
              <img src='/icons/HamburgerMenu.svg' alt='HamburgerMenu' />
            )}
          </button>
          <Link href='/' onClick={() => setIsOpen(false)}>
            Logo
          </Link>
        </div>
        <div className='flex items-center justify-center gap-4 md:hidden'>
          <button onClick={toggleSearch}>
            <img src='/icons/Search.svg' alt='Search' />
          </button>
          <button className='relative' onClick={() => router.push('/cart')}>
            <img src='/icons/Cart.svg' alt='ShoppingCart' />
            <span className='absolute -top-2 -right-3 badge badge-xs'>
              {productos.length}
            </span>
          </button>
        </div>
        <div className='items-center justify-around hidden w-full md:flex'>
          <Link href='/' onClick={() => setIsOpen(false)}>
            Logo
          </Link>
          <div className='relative flex items-center w-1/3'>
            <div className='absolute pointer-events-none right-4'>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-primary'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </div>
            <input
              type='text'
              id='simple-search'
              className='block w-full p-2 pr-10 text-sm text-black placeholder-gray-400 bg-white rounded-lg'
              placeholder='Buscar productos'
              required
            />
          </div>
          <NavLink href='/login' hoverStyle=''>
            <HiOutlineUserCircle className='w-6 h-6' /> Log In / Sign Up
          </NavLink>
        </div>
        <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
      </nav>
      {isSearch && <SearchInput />}
      <NavCategories toggleMenu={toggleMenu} />
    </>
  )
}

export default Navbar
