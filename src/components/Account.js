import React, { useState } from 'react';

const Account = () => {
  const [formData] = useState({
    firstName: 'Rushikesh',
    lastName: 'Samkhed',
    username: 'sarus.fc01',
    email: 'rushikesh.samkhed@cloudsutios.com',
    mobileNumber: '9428018352'
  });

  return (
    <div className="max-w-4xl mx-auto py-8 px-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Account</h1>
      
      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <div className="border-b border-gray-200 mb-6">
          <div className="flex gap-8">
            <button className="pb-3 border-b-2 border-blue-600 text-blue-600 font-medium text-sm">
              Profile
            </button>
            <button className="pb-3 text-gray-500 text-sm">
              Manage Users
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-6 mb-6">
          <div>
            <label className="block text-xs text-gray-600 mb-1">First Name</label>
            <div className="text-sm text-gray-800">{formData.firstName}</div>
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Last Name</label>
            <div className="text-sm text-gray-800">{formData.lastName}</div>
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Username</label>
            <div className="text-sm text-gray-800">{formData.username}</div>
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">E-mail</label>
            <div className="text-sm text-gray-800">{formData.email}</div>
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Organization</label>
            <div className="text-sm text-gray-800">Beta solutions Testers</div>
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Mobile Number</label>
            <div className="text-sm text-gray-800">{formData.mobileNumber}</div>
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Alternate Number</label>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-full text-sm">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Credentials Section */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-xl font-bold text-center mb-2 text-gray-800">
          Manage Your Account Credentials
        </h2>
        <p className="text-center text-xs text-gray-500 mb-8 uppercase">
          Manage your credentials for subscribed services. Protect your credentials like you would<br />
          your passwords.
        </p>

        <div className="max-w-md mx-auto">
          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded text-sm mb-4">
            Manage Credentials
          </button>
          
          <div className="text-center mb-3">
            <p className="text-sm text-gray-600">Your password was last changed: 12May2023</p>
          </div>

          <button className="w-full bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 px-6 py-2 rounded text-sm">
            Change Password Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;