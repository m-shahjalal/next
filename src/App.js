import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import About from './pages/About';
import Service from './pages/Service'
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Route path='/service' component={Service} />
          <Route path='/contact' component={Contact} />
          <Route path="/login" component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
