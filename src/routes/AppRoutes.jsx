import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import VisualPage from '../pages/VisualPage'
import InputPage from '../pages/InputPage'
import TextPage from '../pages/TextPage'


const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Navigate to="/visualPage" />} />
                    <Route path='/visualPage' element={<VisualPage />}/>
                        {/* <Route path='/visualPage/InputPage' element={<InputPage />} /> */}
                    <Route path='/TextPage' element={<TextPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes