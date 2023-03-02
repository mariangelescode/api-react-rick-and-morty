import { useEffect, useState } from 'react'
import './Container.css'
import Character from '../Characters/Characters';


const url = 'https://rickandmortyapi.com/api/character'

export default function Container() {
    const [characters, setCharacters] = useState([]);

    useEffect( () => {
        
        const getCharacters = async() => {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            setCharacters(data.results);
        }
    
        getCharacters();

    }, [])
  
    return (
        <div className='container__characters'>
        {
            
            characters.map(character => {
                return (
                    <Character 
                        name={character.name}
                        img={character.image}
                    />
                )
            })
        }
        </div>
    
    )
}