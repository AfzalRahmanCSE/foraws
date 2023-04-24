import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
const App=()=>{
    return <div>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>    

            <Route path='*' element={<NotFound/>}/>
        </Routes>
        <hr/>
        <Footer/>
        </BrowserRouter>

    </div>
}

export default App;