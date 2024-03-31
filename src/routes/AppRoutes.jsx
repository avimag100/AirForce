import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VisualPage from '../pages/VisualPage'

const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<h1>hhh</h1>} />
                    <Route path='/VisualPage' element={<VisualPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes