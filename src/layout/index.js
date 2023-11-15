import React, { useEffect, useState } from 'react';
import Header from './header';
import GridItems from './grid';
import { getPokemons } from '../utils/query';
import Footer from './footer';

const count_per_page_default = 12;

const Layout = () => {

    const [pokemons, setPokemons] = useState([]);
    
    useEffect(() =>{
        getAllPokemons();
    }, [])
    
    const getAllPokemons = async() =>{
    
        try {
            const res =await getPokemons(count_per_page_default);
            if(res) {
                setPokemons(res);
            }
        }catch (e) {
            console.log(e);
        }
        
    }
    return (
        <div className='container'>
            <Header />
            <GridItems pokemons = {pokemons}/>
            <Footer />
        </div>
    );
};

export default Layout;