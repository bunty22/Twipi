import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainContainer/>
      <Footer/>
    </div>
  );
}

export default App;
