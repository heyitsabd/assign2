import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import NewYork from './NewYork';
import London from './London';
import Paris from './Paris';
import Mumbai from './Mumbai';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    <Routes>
        <Route path='/' element={<NewYork/>}>
    
        </Route>

        <Route path='/London' element={<London/>}/>
        <Route path='/Paris' element={<Paris/>}/>
        <Route path='/Mumbai' element={<Mumbai/>}/>
        
    </Routes>
    </Router>
);

reportWebVitals();
