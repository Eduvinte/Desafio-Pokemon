import React from 'react'
import Pikachu from '../../images/pikachu.png';

function Home() {
  return (
    <div className='container_home'>
      <h2>BienVenido maestro pokemon</h2>
      <img src={Pikachu} width={250} height={250} />
      <a href="/pokemons"><button className='btn btn-primary' id='button'>Buscar Pokemons</button> </a>
    </div>
  )
}

export default Home