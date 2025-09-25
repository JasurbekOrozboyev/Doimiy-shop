function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col h-full">
      {/* Rasm */}
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-70 object-cover rounded"
      />

      {/* Ma'lumot */}
      <h2 className="text-[14px] font-semibold mt-3">{product.title}</h2> 
      <p className="text-red-400 font-bold text-[12px]">Asosiy xususiyatlar</p>
      <p className="text-gray-600 flex-grow text-[12px] text-justify">{product.description}</p>

      {/* Narx va tugma */}
      <div className="mt-4">
        <p className="text-red-600 font-bold">{product.price} so‘m</p>
        <a 
          href={product.flowLink} 
          className="mt-2 block bg-red-600 text-white text-center py-2 rounded hover:bg-red-700 transition"
          target="_blank"
        >
          Sotib olish
        </a>
      </div>
    </div>
  )
}

export default ProductCard
