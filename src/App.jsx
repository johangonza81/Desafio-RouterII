import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes, Route } from "react-router-dom"
import Navigator from "./components/Navigator"
import { Home } from "./views/Home";
import { Pokemons } from "./views/Pokemons";
import { Personajes } from "./views/Personajes";
import { NotFound } from "./views/NotFound";






function App() {
 

  return (
    <div>
      <BrowserRouter>
      <Navigator/>
      
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/pokemons" element={<Pokemons/>}/>
        <Route path="/personajes/:id" element={<Personajes/>}/>
        <Route path="/*" element={<NotFound/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
