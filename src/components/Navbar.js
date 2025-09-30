import React from 'react';
import logo from '../assets/Number-Sentry-Horizontal-Logo-1.png'; // make sure this path is correct

const Navbar = ({ activePage, setActivePage }) => {
  return (
    <nav className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo with text */}
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Number Sentry Logo" 
            className="w-16 h-16 object-contain"
          />
          <div className="text-sm">
            <div className="font-bold text-gray-800">NUMBER</div>
            <div className="text-blue-900 font-semibold">SENTRY</div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <button 
            onClick={() => setActivePage('account')} 
            className={`${activePage === 'account' ? 'text-orange-400' : 'text-gray-600'} hover:text-orange-400 text-sm`}
          >
            Account
          </button>
          <button 
            onClick={() => setActivePage('customer-scorecard')} 
            className={`${activePage === 'customer-scorecard' ? 'text-orange-400' : 'text-gray-600'} hover:text-orange-400 text-sm`}
          >
            Customer Scorecard
          </button>
          <button 
            onClick={() => setActivePage('test-summary')} 
            className={`${activePage === 'test-summary' ? 'text-orange-400' : 'text-gray-600'} hover:text-orange-400 text-sm`}
          >
            Test Summary
          </button>
          <button 
            onClick={() => setActivePage('traffic-summary')} 
            className={`${activePage === 'traffic-summary' ? 'text-orange-400' : 'text-gray-600'} hover:text-orange-400 text-sm`}
          >
            Traffic Summary
          </button>
          <button 
            onClick={() => setActivePage('contact')} 
            className={`${activePage === 'contact' ? 'text-orange-400' : 'text-gray-600'} hover:text-orange-400 text-sm`}
          >
            Contact Support
          </button>
          <button 
            onClick={() => setActivePage('logout')} 
            className={`${activePage === 'logout' ? 'text-orange-400' : 'text-gray-600'} hover:text-orange-400 text-sm`}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
