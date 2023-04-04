import React from 'react';
import "./app.scss";
import FirstView from './components/FirstView/FirstView';
import Services from './components/Services/Services';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import SecondFooter from './components/Footer/SecondFooter';
const App = () => {
  return (
    <div>
      <FirstView />
      <Services />
      <About />
      <Footer />
      <SecondFooter />
    </div>
  )
}

export default App