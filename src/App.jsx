import { useState } from 'react'
import Title from "./components/Title"
import Card from "./components/Card"
import Case from './components/Case'

export default function App() {
  const [name, setName] = useState('PPLG')

  return (
    <Case>
      <div className='bg-gray-900 flex flex-col items-center justify-center min-h-screen'>
          <div className="bg-gray-800 border-t border-gray-600 shadow rounded-lg max-w-lg w-full p-6">
              <Title name="Dashboard" page="Home" lang="ReactJS"/>
              <h4 className='text-white text-2xl'>Hello {name}</h4>
              <p className='text-lg text-gray-400 leading-relaxed'>A JavaScript library for building user interfaces</p>
          </div>
          <br />
          <div className="bg-gray-800 border-t border-gray-600 shadow rounded-lg max-w w-full p-6">
              <Card judul="produktif" content="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."/>
          </div>
      </div>
    </Case>
  )
}