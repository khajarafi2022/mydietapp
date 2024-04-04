import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import Courses from './Components/Courses';
import Login from './Components/Login';
import Home from './Components/Home';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
     <Header/>
     <Navbar/>
     {/*routing logic */}
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
