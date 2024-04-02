import React from 'react'
import AppRoutes from './routes/AppRoutes'
import CreateContext from './context/CreateContext'

const App = () => {
  return (
    <CreateContext>
      <AppRoutes />
    </CreateContext>
  )
}
export default App
