import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './Component/Login';
import Register from './Component/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addbook from './Component/Addbook';
import View from './Component/View';

function App() {
  
  return (
    
    <div>
     
   <BrowserRouter>
   <Routes>
     <Route path="/"exact element={<Login/>}/>
     <Route path="/register"exact element={<Register/>}/>
     <Route path="/add"exact element={<Addbook/>}/>
     <Route path="/view"exact element={<View/>}/>
   </Routes>
   
   </BrowserRouter>
    </div>
  );
}

export default App;
