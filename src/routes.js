import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import NavbarComponent from './components/Navbar/Navbar';

// Pages
import Home from './components/Home/Home';
import Pokemons from './components/Pokemons/Pokemons';
import ListPokemon from './components/Pokemons/ListPokemon';


function RouteApp() {
    return (
        <BrowserRouter>
         <NavbarComponent />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Pokemons' element={<Pokemons />} />
                <Route path='/ListPokemons/:name' element={<ListPokemon />} />
            </Routes>
        </BrowserRouter>
    )
}
export default RouteApp;