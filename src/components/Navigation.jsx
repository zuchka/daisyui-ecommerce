import { Link } from 'react-router-dom'

function Navigation({ theme, setTheme, themes }) {
  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link to="/">New & Featured</Link></li>
            <li><Link to="/men">Men</Link></li>
            <li><a>Women</a></li>
            <li><a>Kids</a></li>
            <li><a>Sale</a></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl font-bold">🏀 HOOPS</Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/" className="btn btn-ghost">New & Featured</Link></li>
          <li><Link to="/men" className="btn btn-ghost">Men</Link></li>
          <li><a className="btn btn-ghost">Women</a></li>
          <li><a className="btn btn-ghost">Kids</a></li>
          <li><a className="btn btn-ghost">Sale</a></li>
          <li><Link to="/admin" className="btn btn-ghost">Admin</Link></li>
        </ul>
      </div>
      
      <div className="navbar-end">
        <div className="form-control hidden lg:flex">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>

        {/* Theme Switcher */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle pr-1.5">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
          </div>
          <ul tabIndex={0} className="dropdown-content bg-base-100 rounded-box z-[1] w-48 p-2 shadow max-h-80 overflow-y-auto">
            {themes.map((themeName) => (
              <li key={themeName}>
                <button
                  className={`w-full text-left px-3 py-2 hover:bg-base-200 rounded-md capitalize ${theme === themeName ? 'bg-primary text-primary-content' : ''}`}
                  onClick={() => setTheme(themeName)}
                >
                  {themeName}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
              <span className="badge badge-sm indicator-item">3</span>
            </div>
          </div>
        </div>

        <a className="btn btn-primary">Sign In</a>
      </div>
    </div>
  )
}

export default Navigation
