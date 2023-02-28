import ProductCard from '@/components/cards/product-card/ProductCard'

const index = () => {
  return (
    <main className='p-6 bg-bgColor'>
      <section>
        <h1 className='text-2xl font-bold text-white'>¡Nuevos Ingresos!</h1>
        {/* filters */}
        <div className='grid content-center grid-cols-2 gap-4 mt-4 justify-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <ProductCard key={i} />
            ))}
        </div>
      </section>
    </main>
  )
}

export default index
