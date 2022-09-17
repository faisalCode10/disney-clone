import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';

import { BrowserRouter, Routes, Route,} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Header />
    <BrowserRouter>
    <Routes>
        <Route path='/detail' element={<Detail />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
