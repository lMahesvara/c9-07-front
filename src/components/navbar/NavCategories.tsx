import React from 'react'
import NavLink from './NavLink'

type Props = {
  toggleMenu: (
    e: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLAnchorElement>
  ) => void
}

const NavCategories = ({ toggleMenu }: Props) => {
  const hoverStyle = 'hover:text-primary'
  return (
    <div className='absolute left-0 hidden w-full md:block top-14 -z-10 bg-bgColor'>
      <div className='relative flex items-center justify-center gap-4 px-4 py-2 mx-auto'>
        <NavLink href='/category/new-releases' hoverStyle={hoverStyle}>
          <img src='/icons/Novedades.svg' alt='News' /> ¡Nuevos ingresos!
        </NavLink>
        <NavLink href='/category/figures' hoverStyle={hoverStyle}>
          <img src='/icons/Figura.svg' alt='Products' /> Figuras de colección
        </NavLink>
        <NavLink href='/category/cards' hoverStyle={hoverStyle}>
          <img src='/icons/Cartas-Desktop.svg' alt='Home' /> Cartas
        </NavLink>
        <NavLink href='/category/comics' hoverStyle={hoverStyle}>
          <img src='/icons/Comics.svg' alt='News' /> Comic y manga
        </NavLink>
        <NavLink href='/category/clothing' hoverStyle={hoverStyle}>
          <img src='/icons/Shirt.svg' alt='Products' /> Indumentaria
        </NavLink>
      </div>
    </div>
  )
}

export default NavCategories
