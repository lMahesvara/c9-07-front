import { useAuth } from "@/context/AuthContext"
import NavLink from "./NavLink"
import { HiOutlineUserCircle } from "react-icons/hi"
import { useEffect, useState } from "react"

type props = {
  isOpen: boolean
  toggleMenu: (
    e: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLAnchorElement>
  ) => void
}

const Sidebar = ({ isOpen, toggleMenu }: props) => {
  const { isAuthenticated, user } = useAuth()
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (user) {
      setIsAuth(true)
      return
    }

    isAuthenticated().then(value => setIsAuth(value))
  }, [user, isAuthenticated])

  return (
    <>
      <div
        className={`${
          !isOpen ? "invisible" : "visible"
        }  fixed top-10 left-0 -z-10 h-full w-full bg-black/50`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`${
          isOpen ? "left-0 " : "-left-full"
        } fixed gap-2 top-10 -z-10 flex h-full w-3/4 flex-col bg-primary transition-all duration-500 ease-in-out py-4 divide-y divide-white`}
      >
        <div>
          {isAuth ? (
            <NavLink href="" onClick={toggleMenu}>
              <HiOutlineUserCircle className="w-6 h-6" /> {user}
            </NavLink>
          ) : (
            <NavLink href="/login" onClick={toggleMenu}>
              <HiOutlineUserCircle className="w-6 h-6" /> Log In / Sign Up
            </NavLink>
          )}
        </div>
        <div>
          <NavLink href="/" onClick={toggleMenu}>
            <img src="/icons/Home.svg" alt="Home" /> Inicio
          </NavLink>
          <NavLink href="/category/new-releases" onClick={toggleMenu}>
            <img src="/icons/Novedades.svg" alt="News" /> ¡Nuevos ingresos!
          </NavLink>
          <NavLink href="/category/figures" onClick={toggleMenu}>
            <img src="/icons/Figura.svg" alt="Products" /> Figuras de colección
          </NavLink>
          <NavLink href="/category/cards" onClick={toggleMenu}>
            <img src="/icons/Cartas.svg" alt="Home" /> Cartas
          </NavLink>
          <NavLink href="/category/comics" onClick={toggleMenu}>
            <img src="/icons/Comics.svg" alt="News" /> Comic y manga
          </NavLink>
          <NavLink href="/category/clothing" onClick={toggleMenu}>
            <img src="/icons/Shirt.svg" alt="Products" /> Indumentaria
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Sidebar
