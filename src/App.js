import React from 'react';
import './App.css';
import Header from './components/header';
import Navigation from './components/nav';
import Main from './components/main';
import Advertisement from './components/advertisement';

                
function App() {
  return (
    <div className="app">
        <Header className="header" />
        <div id="container">
        <Navigation />
        <div id="wrapper">
        <Main />
        <Advertisement />
        </div>
        </div>
    </div>
  );
}
                
export default App;

