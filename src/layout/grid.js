import React from 'react';
import Card from '../components/card';
const GridItems = ({pokemons}) => {
    return (
        <div className='grid'>
            
            <div className='grid__pokemon'>
                {
                    pokemons.map(poke => (
                        <Card key={poke.name} pokemon={poke}></Card>
                    ))
                }
            </div>
        </div>
    );
};

export default GridItems;