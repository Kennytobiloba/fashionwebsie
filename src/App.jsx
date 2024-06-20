import { Route, Routes } from 'react-router-dom';
import './App.css';
import Head from './Components/Head/Head';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Product from './Components/Product/Product';
import Footer from './Components/Footer/Footer';
import Carts from './Pages/Carts/Carts';
import About from './Pages/About/About';
import Shop from './Pages/Shop/Shop';
import ShopDetails from './Pages/ShopSection/ShopDetails/ShopDetails';
import Team from './Pages/Team/Team';
import Blog from './Pages/Blog/Blog';
import BlogDetails from './Pages/BlogDetails/BlogDetails';
import Contact from './Pages/Contact/Contact';
import Checkout from './Pages/Checkout/Checkout';
import Breadcrums from './Components/Breadcrums/Breadcrums';


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head />
      <Navbar />
      <Breadcrums/>
      <div className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Product/:id' element={<Product />} />
          <Route path='/Cart' element={<Carts />} />
          <Route path='/About us' element={<About />} />
          <Route path='/Product' element={<Shop/>} />
          <Route path='/Product Detail' element={<ShopDetails/>} />
          <Route path='/Team' element={<Team/>} />
          <Route path='/Our Blog' element={<Blog/>} />
          <Route path='/Blog Detail' element={<BlogDetails/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Checkout' element={<Checkout/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
