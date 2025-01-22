import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import { Routes, Route, Navigate } from "react-router-dom";
import Contacts from './components/contacts/Contacts';
import Product from './components/product/Product';
import items from './components/items';
import { BrowserRouter } from "react-router-dom";
import SpecialDeals from './components/specialDeals/SpecialDeals';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/toy-store.github.io" element={<Content />} />
        <Route exact path="/" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/specialDeals" element={<SpecialDeals />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/product/:id" element={<Product items={items} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}



export default App;
