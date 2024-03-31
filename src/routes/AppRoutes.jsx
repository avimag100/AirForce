import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VisualPage from '../pages/VisualPage'
import InputPage from '../pages/InputPage'
import TextPage from '../pages/TextPage'

const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<h1>hhh</h1>} />
                    <Route path='/VisualPage' element={<VisualPage/>} />
                    <Route path='/InputPage' element={<InputPage/>} />
                    <Route path='/TextPage' element={<TextPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes