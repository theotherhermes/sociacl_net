import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/messages" component={Dialogs} />           {/* exact path */}
          <Route path="/profile" component={Profile} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
