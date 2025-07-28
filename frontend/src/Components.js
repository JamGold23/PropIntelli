import React, { useState } from 'react';

// Header Component
export const Header = ({ darkMode, setDarkMode }) => {
  const [activeTab, setActiveTab] = useState('buy');

  return (
    <header className={`sticky top-0 z-50 border-b ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-1 rounded-lg font-bold text-xl">PI</div>
                <span className={`ml-2 text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>ropIntelli</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => setActiveTab('buy')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeTab === 'buy'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => setActiveTab('rent')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeTab === 'rent'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Rent
              </button>
              <button
                onClick={() => setActiveTab('sell')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeTab === 'sell'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Sell
              </button>
              <button className={`px-3 py-2 text-sm font-medium ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>
                Home Loans
              </button>
              <button className={`px-3 py-2 text-sm font-medium ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>
                Agent finder
              </button>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-colors ${darkMode ? 'text-yellow-400 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button className={`px-4 py-2 text-sm font-medium ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>
              Sign in
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Search Component
export const HeroSearch = ({ darkMode }) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState('buy');

  return (
    <div 
      className="relative h-96 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1542208480-1b251f025175?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGV4dGVyaW9yfGVufDB8fHxibHVlfDE3NTM2MTU3NjV8MA&ixlib=rb-4.1.0&q=85')`
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl w-full px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
            Find it. Tour it. Own it.
          </h1>
          
          {/* Search Type Toggle */}
          <div className="flex justify-center mb-4">
            <div className="bg-white rounded-lg p-1 flex">
              <button
                onClick={() => setSearchType('buy')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  searchType === 'buy' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => setSearchType('rent')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  searchType === 'rent' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Rent
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-xl p-2">
            <div className="flex">
              <input
                type="text"
                placeholder="Try: '3-bedroom house near good schools under $800k' - Natural language search powered by AI"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="flex-1 px-4 py-3 text-lg border-none outline-none rounded-l-lg"
              />
              <button className="bg-blue-600 text-white px-8 py-3 rounded-r-lg hover:bg-blue-700 transition-colors font-medium">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center mt-6 space-x-6 text-white">
            <button className="hover:underline text-sm">🤖 AI Recommendations</button>
            <button className="hover:underline text-sm">Price reduced</button>
            <button className="hover:underline text-sm">Open houses</button>
            <button className="hover:underline text-sm">Smart Neighborhoods</button>
            <button className="hover:underline text-sm">Coming soon</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Property Card Component
export const PropertyCard = ({ property, darkMode }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className={`rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="relative">
        <img 
          src={property.image} 
          alt={property.address}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
        >
          <svg className={`w-5 h-5 ${liked ? 'text-red-500 fill-current' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        {property.status && (
          <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
            {property.status}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            ${property.price.toLocaleString()}
          </h3>
          <div className="flex items-center text-yellow-500">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <span className={`ml-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {property.rating}
            </span>
          </div>
        </div>
        
        <div className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {property.beds} bds • {property.baths} ba • {property.sqft.toLocaleString()} sqft
        </div>
        
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
          {property.address}
        </p>

        <div className={`text-xs mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
          Listed by {property.agent}
        </div>
      </div>
    </div>
  );
};

// Filters Component
export const Filters = ({ darkMode }) => {
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [beds, setBeds] = useState('Any');
  const [baths, setBaths] = useState('Any');
  const [homeType, setHomeType] = useState('Any');

  return (
    <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Filters
      </h3>
      
      {/* Price Range */}
      <div className="mb-6">
        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Price Range
        </label>
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="Min"
            className={`w-full px-3 py-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
          />
          <input
            type="number"
            placeholder="Max"
            className={`w-full px-3 py-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
          />
        </div>
      </div>

      {/* Bedrooms */}
      <div className="mb-6">
        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Bedrooms
        </label>
        <div className="grid grid-cols-4 gap-2">
          {['Any', '1+', '2+', '3+', '4+', '5+'].map((option) => (
            <button
              key={option}
              onClick={() => setBeds(option)}
              className={`px-3 py-2 text-sm rounded-md border transition-colors ${
                beds === option
                  ? 'bg-blue-600 text-white border-blue-600'
                  : darkMode
                  ? 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Bathrooms */}
      <div className="mb-6">
        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Bathrooms
        </label>
        <div className="grid grid-cols-4 gap-2">
          {['Any', '1+', '2+', '3+', '4+'].map((option) => (
            <button
              key={option}
              onClick={() => setBaths(option)}
              className={`px-3 py-2 text-sm rounded-md border transition-colors ${
                baths === option
                  ? 'bg-blue-600 text-white border-blue-600'
                  : darkMode
                  ? 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Home Type */}
      <div className="mb-6">
        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Home Type
        </label>
        <select
          value={homeType}
          onChange={(e) => setHomeType(e.target.value)}
          className={`w-full px-3 py-2 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
        >
          <option>Any</option>
          <option>House</option>
          <option>Townhome</option>
          <option>Condo</option>
          <option>Apartment</option>
          <option>Land</option>
        </select>
      </div>

      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
        Apply Filters
      </button>
    </div>
  );
};

// Map Component (Placeholder)
export const MapView = ({ darkMode }) => {
  return (
    <div className={`h-96 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} flex items-center justify-center`}>
      <div className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <p className="text-lg font-medium">Interactive Map View</p>
        <p className="text-sm">Explore properties on the map</p>
      </div>
    </div>
  );
};

// Footer Component
export const Footer = ({ darkMode }) => {
  return (
    <footer className={`mt-16 border-t ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-1 rounded-lg font-bold text-xl">PI</div>
              <span className={`ml-2 text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>ropIntelli</span>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              The intelligent real estate marketplace. Search millions of for-sale and rental listings with AI-powered insights.
            </p>
          </div>
          
          <div>
            <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Buy</h4>
            <ul className="space-y-2">
              <li><a href="#" className={`text-sm hover:underline ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Homes for sale</a></li>
              <li><a href="#" className={`text-sm hover:underline ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Open houses</a></li>
              <li><a href="#" className={`text-sm hover:underline ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>New homes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Rent</h4>
            <ul className="space-y-2">
              <li><a href="#" className={`text-sm hover:underline ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Rental listings</a></li>
              <li><a href="#" className={`text-sm hover:underline ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Apartments</a></li>
              <li><a href="#" className={`text-sm hover:underline ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Houses for rent</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Sell</h4>
            <ul className="space-y-2">
              <li><a href="#" className={`text-sm hover:underline ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Sell your home</a></li>
              <li><a href="#" className={`text-sm hover:underline ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>See your home's value</a></li>
              <li><a href="#" className={`text-sm hover:underline ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Find an agent</a></li>
            </ul>
          </div>
        </div>
        
        <div className={`mt-8 pt-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
          <p className={`text-sm text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 PropIntelli. All rights reserved. Intelligent real estate powered by AI.
          </p>
        </div>
      </div>
    </footer>
  );
};