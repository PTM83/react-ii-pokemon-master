import { useContext } from 'react'
//Context
import { PokemonContext } from '../context/ContextPokemon.jsx'
//CSS
import '../assets/TableDetails.css'

export const TableDetails = () => {

    const { pokemonDetails } = useContext(PokemonContext)
    const baseStat = pokemonDetails['stats'].map( base => base.base_stat)
    const nameStat = pokemonDetails['stats'].map( nameStat => nameStat.stat.name)

    return (
        <table>
          <thead>
            <tr>
              <th>Stat</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {nameStat.map((statName, index) => (
              <tr key={statName}>
                <td>{statName}</td>
                <td>{baseStat[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
  );
}