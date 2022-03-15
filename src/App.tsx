import React, {FC} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar';
import TodosPage from './components/pages/TodosPage';
import AboutPage from './components/pages/AboutPage';


const App: FC = () => {

    return (
        <BrowserRouter>
            <Navbar/>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<TodosPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
};

export default App;