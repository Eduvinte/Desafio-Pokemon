import React, { useEffect, useState } from 'react'
import axios from 'axios'
import pokemons from '../../images/pokemons.png'
import { useNavigate } from 'react-router-dom'

function Pokemons() {

  const [data, setData] = useState([])
  const [pokemon, setPokemon] = useState('')
  const navigate = useNavigate();



  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon`)
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [pokemon])

  const handlePokemon = (event) => {
    setPokemon(event.target.value)
  }


  const irAPokemons = () => {
    navigate(`/ListPokemons/${pokemon}`)
  }


  return (
    <div className='container_Pokemons'>
      <img src={pokemons} alt="pokemons" width={400} id='banner_pokemon'/>
      <h6 id='selection_pokemon'>Selecciona un pokemon</h6>
      <select name="pokemons" id="selec_pokemon" onChange={handlePokemon}>
        <option>Seleccione un pokemon</option>
        {data.results && data.results.map(pokemon => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <button className='btn btn-primary' id='button' onClick={irAPokemons}>Buscar</button>
    </div>
  )
}

export default Pokemons