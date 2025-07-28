import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, HeroSearch, PropertyCard, Filters, MapView, Footer } from './Components';

// Mock property data
const mockProperties = [
  {
    id: 1,
    price: 750000,
    beds: 4,
    baths: 3,
    sqft: 2450,
    address: "1234 Oak Street, Los Angeles, CA 90210",
    image: "https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxob3VzZSUyMGV4dGVyaW9yfGVufDB8fHxibHVlfDE3NTM2MTU3NjV8MA&ixlib=rb-4.1.0&q=85",
    status: "New",
    rating: 4.8,
    agent: "Sarah Johnson, RE/MAX",
    aiScore: 92
  },
  {
    id: 2,
    price: 425000,
    beds: 3,
    baths: 2,
    sqft: 1850,
    address: "567 Pine Avenue, San Francisco, CA 94102",
    image: "https://images.unsplash.com/photo-1704143611270-c652643c9b2f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxob3VzZSUyMGV4dGVyaW9yfGVufDB8fHxibHVlfDE3NTM2MTU3NjV8MA&ixlib=rb-4.1.0&q=85",
    status: null,
    rating: 4.6,
    agent: "Michael Chen, Coldwell Banker",
    aiScore: 88
  },
  {
    id: 3,
    price: 890000,
    beds: 5,
    baths: 4,
    sqft: 3200,
    address: "890 Maple Drive, Beverly Hills, CA 90210",
    image: "https://images.unsplash.com/photo-1655025074116-119793238a0f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHw0fHxob3VzZSUyMGV4dGVyaW9yfGVufDB8fHxibHVlfDE3NTM2MTU3NjV8MA&ixlib=rb-4.1.0&q=85",
    status: "Price Drop",
    rating: 4.9,
    agent: "Jennifer Lopez, Compass",
    aiScore: 95
  },
  {
    id: 4,
    price: 625000,
    beds: 4,
    baths: 3,
    sqft: 2100,
    address: "234 Cedar Lane, Pasadena, CA 91101",
    image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlfGVufDB8fHxibHVlfDE3NTM2MTU3NzB8MA&ixlib=rb-4.1.0&q=85",
    status: null,
    rating: 4.7,
    agent: "David Wilson, Keller Williams",
    aiScore: 87
  },
  {
    id: 5,
    price: 320000,
    beds: 2,
    baths: 2,
    sqft: 1200,
    address: "345 Birch Street, Long Beach, CA 90802",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxyZWFsJTIwZXN0YXRlfGVufDB8fHxibHVlfDE3NTM2MTU3NzB8MA&ixlib=rb-4.1.0&q=85",
    status: "Open House",
    rating: 4.5,
    agent: "Emily Davis, Century 21",
    aiScore: 82
  },
  {
    id: 6,
    price: 1200000,
    beds: 6,
    baths: 5,
    sqft: 4500,
    address: "456 Willow Way, Malibu, CA 90265",
    image: "https://images.unsplash.com/photo-1532495142380-2f10c263c93d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxyZWFsJTIwZXN0YXRlfGVufDB8fHxibHVlfDE3NTM2MTU3NzB8MA&ixlib=rb-4.1.0&q=85",
    status: "Luxury",
    rating: 5.0,
    agent: "Robert Thompson, Sotheby's",
    aiScore: 98
  },
  {
    id: 7,
    price: 535000,
    beds: 3,
    baths: 2,
    sqft: 1950,
    address: "789 Elm Street, Santa Monica, CA 90401",
    image: "https://images.unsplash.com/photo-1567016251318-c85cc6f139c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxyZWFsJTIwZXN0YXRlfGVufDB8fHxibHVlfDE3NTM2MTU3NzB8MA&ixlib=rb-4.1.0&q=85",
    status: null,
    rating: 4.4,
    agent: "Amanda Rodriguez, Redfin",
    aiScore: 85
  },
  {
    id: 8,
    price: 975000,
    beds: 5,
    baths: 4,
    sqft: 3800,
    address: "123 Sunset Boulevard, Hollywood, CA 90028",
    image: "https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxob3VzZSUyMGV4dGVyaW9yfGVufDB8fHxibHVlfDE3NTM2MTU3NjV8MA&ixlib=rb-4.1.0&q=85",
    status: "Coming Soon",
    rating: 4.8,
    agent: "Kevin Park, Berkshire Hathaway",
    aiScore: 91
  }
];

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'map'
  const [sortBy, setSortBy] = useState('newest');

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSearch darkMode={darkMode} />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div className={`text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className="font-semibold">2,547</span> intelligent matches in Los Angeles, CA
            <div className="text-sm text-blue-600 mt-1">🤖 AI-powered search results</div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* View Toggle */}
            <div className="flex bg-white rounded-lg border border-gray-300 overflow-hidden">
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                List
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  viewMode === 'map' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Map
              </button>
            </div>
            
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            >
              <option value="newest">Newest</option>
              <option value="ai-recommended">🤖 AI Recommended</option>
              <option value="price-low">Price (Low to High)</option>
              <option value="price-high">Price (High to Low)</option>
              <option value="smart-match">Smart Match Score</option>
              <option value="beds">Bedrooms</option>
              <option value="baths">Bathrooms</option>
              <option value="sqft">Square Feet</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-80 flex-shrink-0">
            <Filters darkMode={darkMode} />
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {viewMode === 'list' ? (
              <>
                {/* Property Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {mockProperties.map((property) => (
                    <PropertyCard 
                      key={property.id} 
                      property={property} 
                      darkMode={darkMode} 
                    />
                  ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-8">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Load More Properties
                  </button>
                </div>
              </>
            ) : (
              <MapView darkMode={darkMode} />
            )}
          </div>
        </div>

        {/* Featured Neighborhoods */}
        <div className="mt-16">
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Explore Los Angeles neighborhoods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Beverly Hills", homes: "234 homes", avgPrice: "$1.2M" },
              { name: "Santa Monica", homes: "456 homes", avgPrice: "$850K" },
              { name: "Hollywood", homes: "789 homes", avgPrice: "$675K" },
              { name: "Manhattan Beach", homes: "123 homes", avgPrice: "$1.8M" }
            ].map((neighborhood, index) => (
              <div key={index} className={`p-6 rounded-lg cursor-pointer hover:shadow-lg transition-shadow ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}>
                <h3 className={`font-semibold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {neighborhood.name}
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {neighborhood.homes}
                </p>
                <p className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Avg: {neighborhood.avgPrice}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Market Insights */}
        <div className="mt-16">
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Los Angeles market insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Median Home Value
              </h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">$785,000</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                +5.2% from last year
              </p>
            </div>
            
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Days on Market
              </h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">28</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                -3 days from last month
              </p>
            </div>
            
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Price per Sq Ft
              </h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">$425</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                +8.1% from last year
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;