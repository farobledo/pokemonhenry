import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import nav from './nav.module.css';
import pokeButton from '../images/close-pokeball.png';
// import cielo from '../images/pokemon/picachu2.jpg';

const Nav = () => {

    const [search, setSearch] = React.useState('');
    const navigate = useNavigate();

    const handleClick = (event) => {
        if (event.target.id === 'landing') navigate('/');
        if (event.target.id === 'home') navigate('/home');
        if (event.target.id === 'create') navigate('/create');
        if (event.target.id === 'search') navigate(`home/detail?name=${search.toLowerCase()}`);
    };

    return (
        <div className={nav.header}>
            {/* <img src={cielo} className={nav.cielo} alt="Img not found" /> */}
            <div className={nav.containSearch}>
                <input type="search" placeholder='Escribe tu Nombre...' onChange={(event) => setSearch(event.target.value)} />
                <button onClick={handleClick} id='search'>
                    <b>Buscar</b>
                </button>
            </div>
            <div className={nav.containHome}>
                <p onClick={handleClick} id='landing'>Landig</p>
            </div>
            <div className={nav.containHome}>
                <p onClick={handleClick} id='home'>Home</p>
            </div>
            <div className={nav.containCreate}>
                <button onClick={handleClick} id='create'>Crea tu Pokemon!!
                    <img src={pokeButton} className={nav.img1} alt="Img not found" />
                    <img src={pokeButton} className={nav.img2} alt="Img not found" />
                </button>
            </div>
            <Outlet />
        </div>
    )
};

export default Nav;