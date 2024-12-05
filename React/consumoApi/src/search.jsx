import { useState } from "react";

function SearchBar({onSearch}){
    const [query, setQuery] = useState('');

    const handLesSearch = (e) =>{
        e.preventDefault();
        onSearch(query);
    };

    return(
        <form onSubmit={handLesSearch} style={{marginBottom:'2px'}}>
            <input 
                type="text"
                placeholder="Buscar pelicula ..."
                value={query}
                onChange={(e)=> setQuery(e.target.value)}
                style={{width: '80%', padding: '10px'}}
            />
            <button type="submit" style={{padding: '10px', color: 'blue'}}> Buscar</button>
        </form>
    );
};

export default SearchBar;