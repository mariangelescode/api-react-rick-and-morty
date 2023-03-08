import { useEffect, useState } from 'react'
import './Container.css'
import Characters from '../Characters/Characters';


const url = 'https://rickandmortyapi.com/api/character'

export default function Container() {
    const [characters, setCharacters] = useState<{
        name: string,
        image: string,
        status: string}[]>([]);
    

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
                    <Characters 
                        name={character.name}
                        img={character.image}
                        status={character.status}
                    />
                )
            })
        }
        </div>
    
    )
}