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


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head />
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Product/:id' element={<Product />} />
          <Route path='/cart' element={<Carts />} />
          <Route path='/about' element={<About />} />
          <Route path='/shopProduct' element={<Shop/>} />
          <Route path='/ProductDetails' element={<ShopDetails/>} />
          <Route path='/Team' element={<Team/>} />
          <Route path='/Blog' element={<Blog/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
