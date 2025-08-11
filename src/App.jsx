import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import MenPage from './components/MenPage'
import AdminPage from './components/AdminPage'
import Navigation from './components/Navigation'

function HomePage({ theme, setTheme, themes }) {

  return (
    <div className="min-h-screen">
      <Navigation theme={theme} setTheme={setTheme} themes={themes} />

      {/* DaisyUI Hero */}
      <div className="hero min-h-screen bg-gradient-to-br from-primary to-secondary">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-5xl lg:text-7xl font-bold text-primary-content">
              DOMINATE THE<br />
              <span className="text-accent">COURT</span>
            </h1>
            <p className="mb-5 text-xl text-primary-content/90 max-w-2xl mx-auto">
              Elevate your game with the latest basketball shoes designed for performance and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-accent btn-lg">Shop Basketball</button>
              <button className="btn btn-outline btn-lg">View Collection</button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section with DaisyUI Cards */}
      <div className="py-16 px-8 bg-base-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-xl text-base-content/70">Find your perfect basketball shoe</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Men's Basketball Card */}
          <div className="card bg-gradient-to-br from-primary to-secondary shadow-xl hover:shadow-2xl transition-shadow image-full">
            <figure className="h-80">
              <img
                src="https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg"
                alt="White and red basketball sneakers with an orange basketball"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body justify-end">
              <h2 className="card-title text-white text-2xl">Men's Basketball</h2>
              <p className="text-white/90">Performance meets style</p>
              <div className="card-actions justify-start">
                <Link to="/men" className="btn btn-accent">Shop Now</Link>
              </div>
            </div>
          </div>

          {/* Women's Basketball Card */}
          <div className="card bg-gradient-to-br from-secondary to-accent shadow-xl hover:shadow-2xl transition-shadow image-full">
            <figure className="h-80">
              <img
                src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg"
                alt="Pair of modern white sneakers with laces"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body justify-end">
              <h2 className="card-title text-white text-2xl">Women's Basketball</h2>
              <p className="text-white/90">Designed for athletes</p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">Shop Now</button>
              </div>
            </div>
          </div>

          {/* Kids Basketball Card */}
          <div className="card bg-gradient-to-br from-accent to-info shadow-xl hover:shadow-2xl transition-shadow image-full">
            <figure className="h-80">
              <img
                src="https://images.pexels.com/photos/10853637/pexels-photo-10853637.jpeg"
                alt="High-cut Nike Air Jordan 1 sneaker with unique multi-color design"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body justify-end">
              <h2 className="card-title text-white text-2xl">Kids Basketball</h2>
              <p className="text-white/90">Future champions start here</p>
              <div className="card-actions justify-start">
                <button className="btn btn-secondary">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products with DaisyUI Cards */}
      <div className="py-16 px-8 bg-base-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Featured Basketball</h2>
              <p className="text-xl text-base-content/70">The hottest drops this season</p>
            </div>
            <button className="btn btn-primary hidden md:block">View All</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product 1 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="px-6 pt-6">
                <img
                  src="https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg"
                  alt="White and red basketball sneakers"
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Nike Air Jordan Retro</h2>
                <p className="text-base-content/70">Men's Basketball Shoes</p>
                <div className="badge badge-primary badge-lg font-bold">$220</div>
                <div className="flex gap-1 mt-2">
                  <div className="w-4 h-4 bg-neutral rounded-full"></div>
                  <div className="w-4 h-4 bg-error rounded-full"></div>
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary btn-sm">Add to Cart</button>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="px-6 pt-6">
                <img
                  src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg"
                  alt="Modern white sneakers with laces"
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Nike Air Force Classic</h2>
                <p className="text-base-content/70">Unisex Basketball Shoes</p>
                <div className="badge badge-secondary badge-lg font-bold">$200</div>
                <div className="flex gap-1 mt-2">
                  <div className="w-4 h-4 bg-secondary rounded-full"></div>
                  <div className="w-4 h-4 bg-warning rounded-full"></div>
                  <div className="w-4 h-4 bg-success rounded-full"></div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-secondary btn-sm">Add to Cart</button>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="px-6 pt-6">
                <img
                  src="https://images.pexels.com/photos/10853637/pexels-photo-10853637.jpeg"
                  alt="High-cut Nike Air Jordan 1 sneaker with multi-color design"
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Air Jordan 1 High</h2>
                <p className="text-base-content/70">Basketball Shoes</p>
                <div className="badge badge-accent badge-lg font-bold">$170</div>
                <div className="flex gap-1 mt-2">
                  <div className="w-4 h-4 bg-warning rounded-full"></div>
                  <div className="w-4 h-4 bg-neutral rounded-full"></div>
                  <div className="w-4 h-4 bg-info rounded-full"></div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-accent btn-sm">Add to Cart</button>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="px-6 pt-6">
                <img
                  src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg"
                  alt="White sneakers fashion style"
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Nike Court Legacy</h2>
                <p className="text-base-content/70">Lifestyle Sneakers</p>
                <div className="badge badge-info badge-lg font-bold">$130</div>
                <div className="flex gap-1 mt-2">
                  <div className="w-4 h-4 bg-info rounded-full"></div>
                  <div className="w-4 h-4 bg-neutral rounded-full"></div>
                  <div className="w-4 h-4 bg-base-300 border border-base-content/20 rounded-full"></div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-info btn-sm">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16 bg-neutral text-neutral-content">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay in the Game</h2>
          <p className="text-xl mb-8 text-neutral-content/80">Get the latest basketball gear drops and exclusive offers</p>
          
          <div className="join max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="input input-bordered join-item flex-1"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </div>
      </div>

      {/* DaisyUI Footer */}
      <footer className="footer footer-center p-10 bg-primary text-primary-content">
        <aside>
          <div className="text-3xl font-bold mb-4">🏀 HOOPS</div>
          <p className="font-bold">Your ultimate destination for basketball shoes and gear</p>
          <p>Copyright © 2024 - All rights reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a className="btn btn-ghost btn-circle" aria-label="Twitter">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a className="btn btn-ghost btn-circle" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a className="btn btn-ghost btn-circle" aria-label="Discord">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.174.372.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const themes = ['light', 'dark', 'cupcake']

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage theme={theme} setTheme={setTheme} themes={themes} />} />
        <Route path="/men" element={<MenPage theme={theme} setTheme={setTheme} themes={themes} />} />
        <Route path="/admin" element={<AdminPage theme={theme} setTheme={setTheme} themes={themes} />} />
      </Routes>
    </Router>
  )
}

export default App
