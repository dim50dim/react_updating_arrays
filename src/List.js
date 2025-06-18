import { useState } from "react";



export default function List() {

    const [artists, setArtists] = useState(initialArtists);

    return(
        <>
            <h1>Inspiring sculptors:</h1>

            <ul>
                 {artists.map(artist => (
                    <li key={artist.id} > {artist.name} {' '}
                    <button onClick={() => {
                          setArtists(
                           artists.filter(elem => elem.id !== artist.id)
                          )
                    }} >delete</button>
                     </li>
                 ))}

            </ul>
        </>
    )
}