import React from 'react';
import Layout from './components/Layout/layout';
import Header from './components/Header/header';
import Body from './components/Body/body';
import Footer from "./components/Footer/footer";
import "./app.css";
function App() {
  return (
    <Layout>
      <Header />
      <Body />
      <Footer />
 </Layout>
  );
}

export default App;
