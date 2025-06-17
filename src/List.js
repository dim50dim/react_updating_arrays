import { useState } from "react";

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function List() {
    const[name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    return(
        <>
        <h1>Inspiring sculptors: </h1>
        <input 
         value={name} onChange={e => setName(e.target.value)} />
        


           <ul>
            {artists.map(artist => (
                <li key={artist.id} > {artist.name} </li>
            ))}
           </ul>

        </>
    )
}