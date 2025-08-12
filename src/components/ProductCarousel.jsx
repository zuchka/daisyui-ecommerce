import React from 'react'

const ProductCarousel = () => {
  const products = [
    {
      id: 1,
      name: 'Air Jordan 1 Retro High',
      category: "Men's Shoes",
      price: '$189.99',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/3ca95391c6fdf5136ee9117684ec9b157f79d0f7?width=656',
      rating: 4
    },
    {
      id: 2,
      name: 'Nike Air Max 90',
      category: "Men's Shoes", 
      price: '$129.99',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/81986b4be6128ca651cd12569cee1f117f920207?width=656',
      rating: 4
    },
    {
      id: 3,
      name: 'Nike Air Force 1',
      category: "Men's Shoes",
      price: '$110.99',
      image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg',
      rating: 5
    },
    {
      id: 4,
      name: 'Jordan Retro 11',
      category: "Men's Shoes",
      price: '$220.99',
      image: 'https://images.pexels.com/photos/10853637/pexels-photo-10853637.jpeg',
      rating: 5
    }
  ]

  const saleCard = {
    title: 'SALE',
    subtitle: 'End of Summer',
    discount: '50% OFF',
    isHotDeal: true
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
      >
        <path
          d="M7.10534 3.20922C7.38799 2.344 8.61199 2.344 8.89464 3.20922L9.14148 3.96485C9.52081 5.12605 10.6038 5.91161 11.8254 5.91161H12.6201C13.5331 5.91161 13.9113 7.08089 13.1714 7.61563L12.546 8.06757C11.551 8.78656 11.1346 10.066 11.5158 11.2329L11.7555 11.9665C12.0384 12.8327 11.0481 13.5554 10.3095 13.0216L9.65377 12.5477C8.66663 11.8344 7.33334 11.8344 6.34622 12.5477L5.69046 13.0216C4.95185 13.5554 3.96158 12.8327 4.24455 11.9665L4.48421 11.2329C4.86539 10.066 4.44898 8.78656 3.45404 8.06757L2.82863 7.61563C2.08864 7.08089 2.46691 5.91161 3.37988 5.91161H4.17454C5.39612 5.91161 6.47916 5.12605 6.85849 3.96486L7.10534 3.20922Z"
          fill={index < rating ? "#5B616E" : "#D8DBDF"}
        />
      </svg>
    ))
  }

  return (
    <div className="py-16 px-4 bg-base-200">
      <div className="max-w-7xl mx-auto">
        <div className="carousel carousel-center max-w-full space-x-4 bg-base-200 rounded-box p-4">
          
          {/* Sale Card */}
          <div className="carousel-item">
            <div className="card w-80 h-[32rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
              <div className="card-body h-full bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-white relative">
                
                {/* Decorative circles */}
                <div className="absolute w-10 h-10 bg-white/20 rounded-full top-16 left-9"></div>
                <div className="absolute w-6 h-6 bg-white/15 rounded-full top-12 right-18"></div>
                <div className="absolute w-4 h-4 bg-white/25 rounded-full top-64 right-18"></div>
                
                {/* Hot Deal Badge */}
                {saleCard.isHotDeal && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    HOT DEAL
                  </div>
                )}
                
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <h2 className="text-5xl font-bold mb-4">{saleCard.title}</h2>
                  <p className="text-2xl mb-6">{saleCard.subtitle}</p>
                  <div className="bg-white text-red-500 px-6 py-3 rounded-full text-2xl font-bold">
                    {saleCard.discount}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Cards */}
          {products.map((product) => (
            <div key={product.id} className="carousel-item">
              <div className="card w-80 h-[32rem] bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <figure className="px-4 pt-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-lg w-full h-80 object-cover bg-gray-200"
                  />
                </figure>
                
                <div className="card-body p-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    {renderStars(product.rating)}
                  </div>
                  
                  {/* Price */}
                  <div className="flex justify-end">
                    <span className="text-lg font-bold text-gray-800">{product.price}</span>
                  </div>
                  
                  {/* Product Name */}
                  <h3 className="text-base font-normal text-gray-800 mb-1">{product.name}</h3>
                  
                  {/* Category */}
                  <p className="text-sm text-gray-500 mb-3">{product.category}</p>
                  
                  {/* Quantity and Add to Cart */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="dropdown">
                      <div tabIndex={0} role="button" className="btn btn-outline border-gray-400 bg-white text-gray-800 btn-sm min-h-11 px-4">
                        1
                        <svg className="w-3 h-2 ml-2" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.07354 0.428589H2.92647C2.16284 0.428589 1.78041 1.35185 2.32038 1.89183L5.39391 4.96535C5.72865 5.30009 6.27136 5.30009 6.6061 4.96535L9.67963 1.89183C10.2196 1.35185 9.83717 0.428589 9.07354 0.428589Z" fill="currentColor"/>
                        </svg>
                      </div>
                      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-16 p-2 shadow border">
                        <li><a>1</a></li>
                        <li><a>2</a></li>
                        <li><a>3</a></li>
                        <li><a>4</a></li>
                        <li><a>5</a></li>
                      </ul>
                    </div>
                    
                    <button className="btn bg-slate-800 text-white hover:bg-slate-700 border-0 flex-1 min-h-11">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: products.length + 1 }, (_, index) => (
            <button
              key={index}
              className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-500 transition-colors"
              onClick={() => {
                const carousel = document.querySelector('.carousel')
                const item = carousel.children[index]
                item.scrollIntoView({ behavior: 'smooth', inline: 'center' })
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductCarousel
