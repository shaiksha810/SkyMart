import React from 'react'
import Welcome from './components/Welcome'
import Form from './components/Form'

const App = () => {
  return (
    <div className='h-screen w-full flex'>
      <Welcome />
      <Form />
    </div>
  )
}

export default App