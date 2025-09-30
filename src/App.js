import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Account from './components/Account';
import Contact from './components/Contact';
import CustomerScorecard from './components/CustomerScorecard';

function App() {
  const [activePage, setActivePage] = useState('account');

  const renderPage = () => {
    switch (activePage) {
      case 'account':
        return <Account />;
      case 'contact':
        return <Contact />;
      case 'customer-scorecard':
        return <CustomerScorecard />;
      default:
        return <Account />;
    }
  };

  return (
    <div className="App">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <div className="min-h-screen bg-gray-50">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;