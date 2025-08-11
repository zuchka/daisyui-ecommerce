import Navigation from './Navigation'

function AdminPage({ theme, setTheme, themes }) {
  const salesData = [
    { month: 'Jan', value: 45, sales: 32000, color: 'progress-error' },
    { month: 'Feb', value: 52, sales: 38000, color: 'progress-warning' },
    { month: 'Mar', value: 38, sales: 28000, color: 'progress-error' },
    { month: 'Apr', value: 61, sales: 45000, color: 'progress-info' },
    { month: 'May', value: 55, sales: 41000, color: 'progress-warning' },
    { month: 'Jun', value: 67, sales: 49000, color: 'progress-info' },
    { month: 'Jul', value: 78, sales: 58000, color: 'progress-success' },
    { month: 'Aug', value: 82, sales: 61000, color: 'progress-success' },
    { month: 'Sep', value: 71, sales: 52000, color: 'progress-info' },
    { month: 'Oct', value: 85, sales: 63000, color: 'progress-success' },
    { month: 'Nov', value: 92, sales: 68000, color: 'progress-success' },
    { month: 'Dec', value: 88, sales: 65000, color: 'progress-success' },
  ]

  const recentOrders = [
    { id: '#1234', customer: 'John Doe', amount: 220, status: 'Delivered', date: '2024-01-15' },
    { id: '#1235', customer: 'Jane Smith', amount: 180, status: 'Shipped', date: '2024-01-14' },
    { id: '#1236', customer: 'Mike Johnson', amount: 340, status: 'Processing', date: '2024-01-14' },
    { id: '#1237', customer: 'Sarah Wilson', amount: 155, status: 'Delivered', date: '2024-01-13' },
    { id: '#1238', customer: 'Tom Brown', amount: 290, status: 'Shipped', date: '2024-01-13' },
  ]

  const topProducts = [
    { name: 'Nike Air Jordan Retro', sales: 145, revenue: 31900 },
    { name: 'Nike LeBron 21', sales: 98, revenue: 19600 },
    { name: 'Nike Air Force 1', sales: 87, revenue: 9570 },
    { name: 'Nike KD Trey 5 X', sales: 76, revenue: 6840 },
  ]

  return (
    <div className="min-h-screen bg-base-100">
      <Navigation theme={theme} setTheme={setTheme} themes={themes} />
      
      <div className="p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <div className="breadcrumbs text-sm">
            <ul>
              <li><a>Home</a></li>
              <li>Admin</li>
              <li>Dashboard</li>
            </ul>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="stat bg-primary text-primary-content rounded-box shadow-lg">
            <div className="stat-figure text-secondary">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="stat-title text-primary-content/80">Total Revenue</div>
            <div className="stat-value">$89.4k</div>
            <div className="stat-desc text-primary-content/60">↗︎ 400 (22%)</div>
          </div>

          <div className="stat bg-secondary text-secondary-content rounded-box shadow-lg">
            <div className="stat-figure text-accent">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="stat-title text-secondary-content/80">Orders</div>
            <div className="stat-value">2.6k</div>
            <div className="stat-desc text-secondary-content/60">↗︎ 90 (14%)</div>
          </div>

          <div className="stat bg-accent text-accent-content rounded-box shadow-lg">
            <div className="stat-figure text-info">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </div>
            <div className="stat-title text-accent-content/80">Customers</div>
            <div className="stat-value">1.3k</div>
            <div className="stat-desc text-accent-content/60">↗︎ 120 (18%)</div>
          </div>

          <div className="stat bg-success text-success-content rounded-box shadow-lg">
            <div className="stat-figure text-warning">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="stat-title text-success-content/80">Products</div>
            <div className="stat-value">456</div>
            <div className="stat-desc text-success-content/60">↗︎ 12 (3%)</div>
          </div>
        </div>

        {/* Monthly Sales Chart */}
        <div className="mb-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="mb-6">
                <h2 className="card-title">Monthly Sales Chart</h2>
                <p className="text-base-content/70">2024 Sales Performance Overview</p>
              </div>

              {/* Performance Chart and Metrics */}
              <div className="space-y-6">
                {/* Performance by Month */}
                <div>
                  <h3 className="font-semibold mb-4">Performance by Month</h3>
                  <div className="space-y-3">
                    {salesData.map((item) => (
                      <div key={item.month} className="flex items-center gap-4">
                        <div className="w-12 text-sm font-medium">{item.month}</div>
                        <div className="flex-1">
                          <progress
                            className={`progress ${item.color} h-6`}
                            value={item.value}
                            max="100"
                          ></progress>
                        </div>
                        <div className="w-16 text-sm text-right font-medium">{item.value}%</div>
                        <div className="w-20 text-xs text-right text-base-content/70">${(item.sales/1000).toFixed(0)}k</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Metrics - Horizontal Layout */}
                <div>
                  <h3 className="font-semibold mb-4">Key Metrics</h3>
                  <div className="stats shadow bg-base-200 w-full">
                    <div className="stat">
                      <div className="stat-title">Best Month</div>
                      <div className="stat-value text-success">Nov</div>
                      <div className="stat-desc">${salesData.find(item => item.value === Math.max(...salesData.map(d => d.value)))?.sales.toLocaleString()}</div>
                    </div>

                    <div className="stat">
                      <div className="stat-title">Avg Monthly</div>
                      <div className="stat-value text-info">${Math.round(salesData.reduce((sum, item) => sum + item.sales, 0) / salesData.length).toLocaleString()}</div>
                      <div className="stat-desc">Per month in 2024</div>
                    </div>

                    <div className="stat">
                      <div className="stat-title">Growth Rate</div>
                      <div className="stat-value text-warning">15.3%</div>
                      <div className="stat-desc">Year over year</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center mb-4">
                <h2 className="card-title">Recent Orders</h2>
                <button className="btn btn-ghost btn-sm">View All</button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id}>
                        <td className="font-mono text-sm">{order.id}</td>
                        <td className="font-medium">{order.customer}</td>
                        <td className="font-semibold">${order.amount}</td>
                        <td>
                          <div className={`badge badge-sm ${
                            order.status === 'Delivered' ? 'badge-success' :
                            order.status === 'Shipped' ? 'badge-info' :
                            order.status === 'Processing' ? 'badge-warning' :
                            'badge-ghost'
                          }`}>
                            {order.status}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center mb-4">
                <h2 className="card-title">Top Products</h2>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                    This Month
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow">
                    <li><a>This Week</a></li>
                    <li><a>This Month</a></li>
                    <li><a>This Year</a></li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={product.name} className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="badge badge-primary badge-lg">{index + 1}</div>
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-base-content/70">{product.sales} sales</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">${product.revenue.toLocaleString()}</div>
                      <div className="text-sm text-base-content/70">Revenue</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total Revenue</span>
                  <span className="text-xl font-bold text-primary">
                    ${topProducts.reduce((sum, product) => sum + product.revenue, 0).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-6">Performance Metrics</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="radial-progress text-primary mb-4" style={{"--value": 85}} role="progressbar">85%</div>
                  <div className="font-medium">Customer Satisfaction</div>
                  <div className="text-sm text-base-content/70">Based on reviews</div>
                </div>

                <div className="text-center">
                  <div className="radial-progress text-secondary mb-4" style={{"--value": 70}} role="progressbar">70%</div>
                  <div className="font-medium">Order Fulfillment</div>
                  <div className="text-sm text-base-content/70">On-time delivery</div>
                </div>

                <div className="text-center">
                  <div className="radial-progress text-accent mb-4" style={{"--value": 92}} role="progressbar">92%</div>
                  <div className="font-medium">Inventory Turnover</div>
                  <div className="text-sm text-base-content/70">Stock efficiency</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">

          {/* Quick Actions */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Quick Actions</h2>

              <div className="space-y-3 mt-4">
                <button className="btn btn-primary btn-block">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add Product
                </button>

                <button className="btn btn-secondary btn-block">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                  View Customers
                </button>

                <button className="btn btn-accent btn-block">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                  </svg>
                  Reports
                </button>

                <button className="btn btn-info btn-block">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  Settings
                </button>
              </div>

              <div className="divider"></div>

              <div className="alert alert-info">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">5 orders pending review</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage
