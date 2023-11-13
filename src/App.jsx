import './App.css'
import {puppyList} from './data.js'
import { useState } from 'react'

function App() {

  const [puppies, setPuppies] = useState(puppyList);

  console.log(puppies)
  return (
    <>
      <div>
        {
          puppies.map((puppies) => {
            return <p>{puppies.name}</p>
          })
        }
      </div>
    </>
  )
}

export default App
