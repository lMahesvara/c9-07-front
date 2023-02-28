type Props = {
  category: string
  productName: string
}

const Breadcrumbs = ({ category, productName }: Props) => {
  return (
    <div className="text-sm breadcrumbs text-[#808080]">
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>{category}</a>
        </li>
        <li className="text-[#E8E8E8]">{productName}</li>
      </ul>
    </div>
  )
}

export default Breadcrumbs
