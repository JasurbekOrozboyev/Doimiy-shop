import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Barchasi");

  const categories = ["Barchasi", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "Barchasi" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-red-600 text-white py-6 shadow-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">
          🛍️ Bizning Mahsulotlar
        </h1>
        <p className="text-center text-blue-100 mt-2 text-sm sm:text-base">
          O‘zingizga yoqqanini tanlang va buyurtma bering
        </p>
      </header>

      {/* Search */}
      <div className="flex justify-center mt-4 px-2">
        <input
          type="text"
          placeholder="Mahsulot nomi bo‘yicha qidirish..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md border p-2 rounded shadow focus:ring-2 focus:ring-purple-400"
        />
      </div>

      {/* Category Buttons */}
      <div className="mt-4 px-2 space-y-2">
        {/* Birinchi “Barchasi” tugmasi – to‘liq eni */}
        <center>
        <button
          onClick={() => setSelectedCategory("Barchasi")}
          className={`w-full px-4 py-2 rounded-full border text-center text-sm sm:text-base font-bold ${
            selectedCategory === "Barchasi"
              ? "bg-red-600 text-white"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }`}
        >
          Barchasi
        </button>
        </center>
       

        {/* Qolgan kategoriyalar – mobil ekranda 2 ustun, kattaroqda auto */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
          {categories.slice(1).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-2 rounded-full border text-sm sm:text-base w-full sm:w-auto font-serif ${
                selectedCategory === cat
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
      <main className="p-4 sm:p-8">
        <div
          className="
            grid 
            grid-cols-1
            sm:grid-cols-3 
            md:grid-cols-4 
            lg:grid-cols-5 
            gap-3 sm:gap-4"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <p className="text-center mt-6 text-gray-500">Hech narsa topilmadi</p>
        )}
      </main>
    </div>
  );
}

export default Home;
