import { Routes,Route } from 'react-router-dom';
import './App.css';
import Categories from './Components/Pages/Categories/Categories';
import Home from './Components/Pages/Home/Home';
import Header from './Components/Shared/Header';
import TopNav from './Components/Shared/TopNav';
function App() {
  return (
    <div className="">
        <TopNav />
        <Header/>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/categories'  element={<Categories/>}/>
        </Routes>
    </div>
  );
}

export default App;
