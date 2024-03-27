import React from 'react';
import layout from './components/Layout/layout';
import header from './components/Header/header';
import body from './components/Body/body';
import footer from './components/Footer/footer';
import './App.css';
function App() {
  return (
    <layout>
      <header />
      <body />
      <footer />  
    </layout>
  );
}

export default App;
