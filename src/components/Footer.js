import React from 'react';
import logo from '../assets/Number-Sentry-Horizontal-Logo-1.png'; // make sure your logo file exists inside src/assets/

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Number Sentry Logo" className="w-12 h-12 object-contain" />
              <div className="text-sm">
                <div className="font-bold text-gray-800">NUMBER</div>
                <div className="text-blue-900 font-semibold">SENTRY</div>
              </div>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Number Sentry is a full-service, licensed carrier delivering an enhanced call blocking 
              and call center solution that is unmatched in the industry. Contact center communications 
              and labeling solutions continue to be unnecessarily hampered by intrusive call blocking labels.
            </p>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="font-bold text-sm mb-3 text-gray-800">Contact</h4>
            <p className="text-xs text-gray-600">+(1) (616) 916-3001</p>
            <p className="text-xs text-gray-600">sales@numbersentry.com</p>
          </div>
          
          {/* Hot Links */}
          <div>
            <h4 className="font-bold text-sm mb-3 text-gray-800">Hot Links</h4>
            <div className="space-y-1">
              <p className="text-xs text-gray-600 hover:text-blue-600 cursor-pointer">Account</p>
              <p className="text-xs text-gray-600 hover:text-blue-600 cursor-pointer">Customer Scorecard</p>
              <p className="text-xs text-gray-600 hover:text-blue-600 cursor-pointer">Test Summary</p>
              <p className="text-xs text-gray-600 hover:text-blue-600 cursor-pointer">Traffic Summary</p>
              <p className="text-xs text-gray-600 hover:text-blue-600 cursor-pointer">Contact Support</p>
              <p className="text-xs text-gray-600 hover:text-blue-600 cursor-pointer">Logout</p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">Copyright 2025 Number Sentry, LLC. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
