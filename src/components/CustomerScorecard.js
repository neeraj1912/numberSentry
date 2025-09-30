import React from 'react';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomerScorecard = () => {
  // Current Distribution Data
  const currentData = [
    { name: 'Active', value: 50, color: '#4CAF50' },
    { name: 'Warm Up', value: 17, color: '#FF9800' },
    { name: 'Pending', value: 17, color: '#2196F3' },
    { name: 'Cool', value: 16, color: '#9E9E9E' }
  ];

  // Baseline Distribution Data
  const baselineData = [
    { name: 'This Month', value: 50, color: '#2196F3' },
    { name: 'Last Month', value: 25, color: '#4CAF50' },
    { name: 'Warm Up', value: 0, color: '#FF9800' },
    { name: 'Pending Ready', value: 25, color: '#FFC107' }
  ];

  // Utilization Line Chart Data
  const utilizationData = [
    { month: 'Mon', line1: 60, line2: 45, line3: 30 },
    { month: 'Tue', line1: 70, line2: 50, line3: 35 },
    { month: 'Wed', line1: 85, line2: 70, line3: 45 },
    { month: 'Thu', line1: 65, line2: 55, line3: 40 },
    { month: 'Fri', line1: 75, line2: 60, line3: 42 },
    { month: 'Sat', line1: 70, line2: 58, line3: 38 },
    { month: 'Sun', line1: 68, line2: 52, line3: 35 }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-8">
      {/* Inventory Overview Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Inventory Overview</h2>
        
        <div className="grid grid-cols-2 gap-8">
          {/* Current Distribution Chart */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium text-gray-700">Current Distribution</h3>
              <select className="text-xs border border-gray-300 rounded px-2 py-1">
                <option>This Week</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={currentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                  label={({ value }) => `${value}%`}
                >
                  {currentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Baseline Distribution Chart */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium text-gray-700">Baseline Distribution</h3>
              <select className="text-xs border border-gray-300 rounded px-2 py-1">
                <option>This Week</option>
              </select>
            </div>
            <div className="flex gap-8">
              <ResponsiveContainer width="50%" height={250}>
                <PieChart>
                  <Pie
                    data={baselineData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    dataKey="value"
                    label={({ value }) => `${value}%`}
                  >
                    {baselineData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              
              {/* Legend */}
              <div className="flex flex-col justify-center gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-blue-500"></div>
                  <span className="text-xs text-gray-600">This Month</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                  <span className="text-xs text-gray-600">Last Month</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-orange-400"></div>
                  <span className="text-xs text-gray-600">Warm Up</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-yellow-500"></div>
                  <span className="text-xs text-gray-600">Pending Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-gray-700"></div>
                  <span className="text-xs text-gray-600">Cool</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inventory Utilization Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Inventory Utilization</h2>
          <div className="flex gap-4">
            <select className="text-xs border border-gray-300 rounded px-2 py-1">
              <option>Weekly</option>
            </select>
            <select className="text-xs border border-gray-300 rounded px-2 py-1">
              <option>Summer</option>
            </select>
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={utilizationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis 
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="line1" 
              stroke="#2196F3" 
              strokeWidth={2}
              name="7% Usage $ (10/# expected)"
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="line2" 
              stroke="#4CAF50" 
              strokeWidth={2}
              name="Forwarded(DID) Numbers $"
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="line3" 
              stroke="#FF9800" 
              strokeWidth={2}
              name="Unbarred Number Inventory $"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
        
        {/* Chart Legend and Targets */}
        <div className="mt-4 flex items-center justify-end gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-xs text-gray-600">7% Usage $ (10/# expected)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs text-gray-600">Forwarded(DID) Numbers $</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-400"></div>
            <span className="text-xs text-gray-600">Unbarred Number Inventory $</span>
          </div>
          <span className="text-xs text-gray-500">Set Targets</span>
        </div>
        
        {/* Warning Message */}
        <div className="mt-2 text-center">
          <span className="text-xs text-red-500">⚠ Out of 943 Target</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerScorecard;