import { useState } from "react"
import { products } from "../data/products"
import ProductCard from "../components/ProductCard"

function Home() {
  const [search, setSearch] = useState("")

  // Title bo‘yicha filter
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-red-600 text-white py-6 shadow-md">
        <h1 className="text-3xl font-bold text-center">🛍️ Bizning Mahsulotlar</h1>
        <p className="text-center text-blue-100 mt-2">
          O‘zingizga yoqqanini tanlang va buyurtma bering
        </p>
      </header>

      {/* Search */}
      <div className="flex justify-center mt-6 m-2">
        <input
          type="text"
          placeholder="Mahsulot nomi bo‘yicha qidirish..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md border p-2 rounded shadow focus:ring-2 focus:ring-purple-400"
        />
      </div>

      {/* Products */}
      <main className="p-4 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {filteredProducts.map(product => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>

      </main>
    </div>
  )
}

export default Home
