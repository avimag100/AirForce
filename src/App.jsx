import React from 'react'

const App = () => {
  return (
    <div className='h-[100vh] flex justify-center items-center'>
      <h1 className='cursor-pointer text-7xl font-extrabold text-teal-600 tracking-wide leading-tight transition-transform transform hover:scale-110'>
        <span className='bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text'>
          <a href='https://vitejs.dev/' target='_blank'> vite</a> + <a href='https://tailwindcss.com/' target='_blank'> tailwind </a> + <a href='https://www.flowbite-react.com/' target='_blank'>flowbite</a>
        </span>
      </h1>
    </div>
  )
}
export default App
