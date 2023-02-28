import ProductCard from "../cards/product-card/ProductCard"

const RecommendedProducts = () => {
  return (
    <div className="flex flex-col gap-4 mt-10">
      <h3 className="text-base font-medium text-white">
        Otros productos recomendados
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default RecommendedProducts
