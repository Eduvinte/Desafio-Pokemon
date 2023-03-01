import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function ListPokemon() {

    const [data, setData] = useState({})
    const { name } = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [name])
    return (
        <div>
            {data.abilities && data.abilities.length > 0 &&
                <div className='container_listPokemon'>
                    <div className="container_secondary_list">
                    <div id="container_img">
                        <h1 className='name'>{data.name}</h1>
                        <img src={data.sprites.other.dream_world.front_default} alt={data.name} width={200} height={200} />
                    </div>
                    <div id="container_info">
                        <p>{data.stats[0].stat.name}: {data.stats[0].base_stat}</p>
                        <p>{data.stats[1].stat.name}: {data.stats[0].base_stat}</p>
                        <p>{data.stats[2].stat.name}: {data.stats[0].base_stat}</p>
                        <p>{data.stats[3].stat.name}: {data.stats[0].base_stat}</p>
                        <p>{data.stats[5].stat.name}: {data.stats[0].base_stat}</p>
                        <p>Type: {data.types[0].type.name}</p>
                        <p>Peso: {data.weight}</p>
                    </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ListPokemon