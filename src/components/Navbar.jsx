import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-red-600 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Doimiy Shop</h1>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 ">
          <Link to="/" className="hover:underline">Home</Link>
        </div>

        {/* Mobile hamburger */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* 3 ta chiziq */}
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Mobile menu ochilganda */}
      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <Link 
            to="/" 
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          
        </div>
      )}
    </nav>
  )
}

export default Navbar
