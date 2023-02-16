import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import { Routes, Route } from "react-router-dom";
import Contacts from './components/contacts/Contacts';
import Product from './components/product/Product';
import items from './components/items';
import SpecialDeals from './components/specialDeals/SpecialDeals';


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/about" element={<About />} />
          <Route path="/specialDeals" element={<SpecialDeals />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/product/:id" element={<Product items={items} />} />

        </Routes>
      <Footer />
    </div>
  );
}



export default App;
