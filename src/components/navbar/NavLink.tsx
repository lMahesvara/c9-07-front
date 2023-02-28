import Link from 'next/link'

type props = {
  href: string
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  hoverStyle?: string
}

const NavLink = ({
  href,
  children,
  onClick,
  hoverStyle = 'hover:bg-secondary',
}: props) => {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-4 py-2 text-white ${hoverStyle}`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default NavLink
