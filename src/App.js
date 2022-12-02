import React from 'react';
import Header from './Components/Header';
import Howitwork from './Components/Howitwork';
import About from './Components/About';
import Supportive from './Components/Supportive';
import Vision from './Components/Vision';
import Contact from './Components/Contact';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Howitwork/>
      <About/>
      <Supportive/>
      <Vision/>
      <Contact/>
    </div>
  );
}

export default App;
