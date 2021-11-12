import React from 'react'
import {BrowserRouter as Router, 
    Routes,
    Route} 
    from 'react-router-dom';
import { Form } from '../components/Form';
import { List } from '../components/List';
import { Navbar } from '../components/Navbar';
import { Home } from '../components/Home';

export const AppRouter = () => {
    return (
        <div>
            <Router>
            <Navbar/>
                <Routes>
                    <Route exact path="/Registro" element={<Form/>}/>
                    <Route exact path="/Todos" element={<List/>}/>
                    <Route exact path="/Home" element={<Home/>}/>
                </Routes>
            </Router>
        </div>
    )
}
