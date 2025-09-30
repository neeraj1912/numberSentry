import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-8">
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h1>
      
      {/* Contact Info Cards */}
      <div className="grid grid-cols-2 gap-8 mb-12">
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-gray-700" />
            </div>
          </div>
          <h3 className="font-bold text-sm mb-2 text-gray-800">PHONE</h3>
          <p className="text-sm text-gray-600">+(1) (616) 916-3001</p>
        </div>
        
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-gray-700" />
            </div>
          </div>
          <h3 className="font-bold text-sm mb-2 text-gray-800">EMAIL</h3>
          <p className="text-sm text-gray-600">sales@numbersentry.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-100 rounded-lg p-8">
        <h2 className="text-xl font-bold text-center mb-8 text-gray-800">
          TELL US WHAT'S ON YOUR MIND
        </h2>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="First name" 
              className="w-full px-4 py-3 rounded bg-white border border-gray-300 text-sm focus:outline-none focus:border-blue-500"
            />
            <input 
              type="text" 
              placeholder="Email" 
              className="w-full px-4 py-3 rounded bg-white border border-gray-300 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <textarea 
            placeholder="Message" 
            rows="5"
            className="w-full px-4 py-3 rounded bg-white border border-gray-300 text-sm focus:outline-none focus:border-blue-500"
          ></textarea>
          
          <p className="text-xs text-gray-500">300 Characters Limit</p>
          
          <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-full text-sm font-medium">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;