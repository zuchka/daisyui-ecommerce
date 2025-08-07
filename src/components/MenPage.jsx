import { useState } from 'react'
import Navigation from './Navigation'

function MenPage({ theme, setTheme, themes }) {
  const [selectedFilters, setSelectedFilters] = useState({
    sale: false,
    backToSchool: false,
    gender: 'all',
    color: 'all',
    priceRange: 'all'
  })

  const [sortBy, setSortBy] = useState('featured')

  const products = [
    {
      id: 1,
      name: "Nike Air Jordan Retro 11",
      category: "Basketball Shoes",
      price: 220,
      colors: ["Black", "White", "Red"],
      image: "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg",
      isOnSale: false
    },
    {
      id: 2,
      name: "Nike LeBron 21",
      category: "Basketball Shoes", 
      price: 200,
      colors: ["Purple", "Yellow", "Black"],
      image: "https://images.pexels.com/photos/10853637/pexels-photo-10853637.jpeg",
      isOnSale: true,
      originalPrice: 240
    },
    {
      id: 3,
      name: "Nike Air Force 1",
      category: "Basketball Shoes",
      price: 110,
      colors: ["White", "Black", "Blue"],
      image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg",
      isOnSale: false
    },
    {
      id: 4,
      name: "Nike KD Trey 5 X",
      category: "Basketball Shoes",
      price: 90,
      colors: ["Orange", "Gray", "Blue"],
      image: "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg",
      isOnSale: true,
      originalPrice: 120
    },
    {
      id: 5,
      name: "Nike Kyrie Infinity",
      category: "Basketball Shoes",
      price: 130,
      colors: ["Blue", "Black", "White"],
      image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg",
      isOnSale: false
    },
    {
      id: 6,
      name: "Nike Zoom Freak 5",
      category: "Basketball Shoes",
      price: 120,
      colors: ["Green", "Orange", "Black"],
      image: "https://images.pexels.com/photos/10853637/pexels-photo-10853637.jpeg",
      isOnSale: false
    }
  ]

  const categories = [
    "Shoes",
    "Tops and T-Shirts", 
    "Jerseys",
    "Hoodies and Pullovers",
    "Shorts",
    "Pants and Tights",
    "NBA",
    "WNBA",
    "College Teams",
    "Socks",
    "Accessories and Equipment"
  ]

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  const filteredProducts = products.filter(product => {
    if (selectedFilters.sale && !product.isOnSale) return false
    return true
  })

  return (
    <div className="min-h-screen bg-base-100">
      <Navigation theme={theme} setTheme={setTheme} themes={themes} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Men's Basketball ({filteredProducts.length})</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="btn btn-ghost btn-sm">
              Hide Filters
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
              </svg>
            </button>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                Sort By
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-48 p-2 shadow">
                <li><button onClick={() => setSortBy('featured')} className={sortBy === 'featured' ? 'active' : ''}>Featured</button></li>
                <li><button onClick={() => setSortBy('newest')} className={sortBy === 'newest' ? 'active' : ''}>Newest</button></li>
                <li><button onClick={() => setSortBy('priceHigh')} className={sortBy === 'priceHigh' ? 'active' : ''}>Price: High-Low</button></li>
                <li><button onClick={() => setSortBy('priceLow')} className={sortBy === 'priceLow' ? 'active' : ''}>Price: Low-High</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-80 flex-shrink-0">
            <div className="space-y-6">
              {/* Pick Up Today */}
              <div>
                <h3 className="font-semibold mb-3 text-sm">Pick Up Today</h3>
                <div className="form-control">
                  <label className="label cursor-pointer justify-start gap-3">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    <span className="label-text">Available for pickup</span>
                  </label>
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-semibold mb-3 text-sm">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="text-left text-sm hover:text-primary transition-colors">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sale & Offers */}
              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" defaultChecked />
                <div className="collapse-title text-sm font-semibold p-0 min-h-0">
                  Sale & Offers
                </div>
                <div className="collapse-content p-0 pt-3">
                  <div className="space-y-2">
                    <div className="form-control">
                      <label className="label cursor-pointer justify-start gap-3">
                        <input 
                          type="checkbox" 
                          className="checkbox checkbox-sm"
                          checked={selectedFilters.backToSchool}
                          onChange={(e) => handleFilterChange('backToSchool', e.target.checked)}
                        />
                        <span className="label-text text-sm">Back to School Sale</span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer justify-start gap-3">
                        <input 
                          type="checkbox" 
                          className="checkbox checkbox-sm"
                          checked={selectedFilters.sale}
                          onChange={(e) => handleFilterChange('sale', e.target.checked)}
                        />
                        <span className="label-text text-sm">Sale</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gender */}
              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" defaultChecked />
                <div className="collapse-title text-sm font-semibold p-0 min-h-0">
                  Gender (1)
                </div>
                <div className="collapse-content p-0 pt-3">
                  <div className="space-y-2">
                    <div className="form-control">
                      <label className="label cursor-pointer justify-start gap-3">
                        <input type="radio" name="gender" className="radio radio-sm" checked />
                        <span className="label-text text-sm">Men</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Color */}
              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-sm font-semibold p-0 min-h-0">
                  Color
                </div>
                <div className="collapse-content p-0 pt-3">
                  <div className="grid grid-cols-6 gap-2">
                    {['Black', 'White', 'Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange'].map((color) => (
                      <button 
                        key={color}
                        className={`w-8 h-8 rounded-full border-2 border-base-300 hover:border-primary transition-colors ${
                          color === 'Black' ? 'bg-black' :
                          color === 'White' ? 'bg-white' :
                          color === 'Red' ? 'bg-red-500' :
                          color === 'Blue' ? 'bg-blue-500' :
                          color === 'Green' ? 'bg-green-500' :
                          color === 'Yellow' ? 'bg-yellow-500' :
                          color === 'Purple' ? 'bg-purple-500' :
                          'bg-orange-500'
                        }`}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Shop by Price */}
              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-sm font-semibold p-0 min-h-0">
                  Shop by Price
                </div>
                <div className="collapse-content p-0 pt-3">
                  <div className="space-y-2">
                    <div className="form-control">
                      <label className="label cursor-pointer justify-start gap-3">
                        <input type="checkbox" className="checkbox checkbox-sm" />
                        <span className="label-text text-sm">$0 - $50</span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer justify-start gap-3">
                        <input type="checkbox" className="checkbox checkbox-sm" />
                        <span className="label-text text-sm">$50 - $100</span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer justify-start gap-3">
                        <input type="checkbox" className="checkbox checkbox-sm" />
                        <span className="label-text text-sm">$100 - $150</span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer justify-start gap-3">
                        <input type="checkbox" className="checkbox checkbox-sm" />
                        <span className="label-text text-sm">$150+</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="card bg-base-100 shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
                  <figure className="aspect-square">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </figure>
                  <div className="card-body p-4">
                    {product.isOnSale && (
                      <div className="badge badge-error badge-sm mb-2">Sale</div>
                    )}
                    <h3 className="card-title text-base font-medium">{product.name}</h3>
                    <p className="text-sm text-base-content/70 mb-2">{product.category}</p>
                    <p className="text-sm text-base-content/70 mb-3">{product.colors.length} Colors</p>
                    <div className="flex items-center gap-2">
                      {product.isOnSale ? (
                        <>
                          <span className="font-semibold">${product.price}</span>
                          <span className="text-sm text-base-content/50 line-through">${product.originalPrice}</span>
                        </>
                      ) : (
                        <span className="font-semibold">${product.price}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="btn btn-outline btn-wide">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenPage
