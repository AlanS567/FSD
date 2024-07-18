import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextInput from './components/TextInput'
import ApiGet from './components/ApiGet'
import Cardapi from './components/Cardapi'
import PokemonList from './components/PokemonList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <TextInput/> */}
     {/* <ApiGet/> */}
     <Cardapi/>
     <PokemonList/>
    </>
    
  )
}

export default App
