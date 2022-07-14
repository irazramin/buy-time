import { Routes,Route } from 'react-router-dom';
import './App.css';
import Categories from './Components/Pages/Categories/Categories';
import Home from './Components/Pages/Home/Home';
import Header from './Components/Shared/Header';
import SearchBar from './Components/Shared/SearchBar';
import TopNav from './Components/Shared/TopNav';
import ProductDetails from "./Components/Shared/Product/productDetails/ProductDetails";
import ViewCart from './Components/Pages/Cart/ViewCart';
function App() {
  return (
    <div className="">
        <TopNav />
        <Header/>
        <SearchBar/>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/categories'  element={<Categories/>}/>
          <Route path='/productDetails/:id'  element={<ProductDetails/>}/>
          <Route path='/viewCart'  element={<ViewCart/>}/>

        </Routes>
    </div>
  );
}

export default App;
