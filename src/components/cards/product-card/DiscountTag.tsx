type props = {
  discount: number
  textSize?: string
  w?: string
  h?: string
}

const DiscountTag = ({
  discount,
  textSize = 'text-[9px]',
  w = 'w-8',
  h = 'h-4',
}: props) => {
  if (discount === 0) return null
  return (
    <span
      className={`p-1 px-2 text-text-discount bg-bgDiscount rounded-lg ${textSize} ${w} ${h} flex items-center justify-center ml-3`}
    >
      -{discount}%
    </span>
  )
}

export default DiscountTag
