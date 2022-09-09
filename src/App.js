import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Pricing from './components/Pricing/Pricing';
import Story from './components/CustomerStories/Story';
import Blog from './components/Blog/Blog';
import Features from './components/Features/Features';

function App() {
  return (
    <div className='main'>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/features' element={<Features />} />
      <Route path='/stories' element={<Story />} />
      <Route path='/pricing' element={<Pricing/>} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/signup' element={<button className='btn btn-outline-success rounded-0 m-5'>Sign Up</button>} />
    </Routes>
    </div>
  );
}

export default App;
