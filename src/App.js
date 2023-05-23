import './App.css';
import Nav from './componentes/Nav';
import MiApi from './componentes/MiApi';
import React, { useState, useEffect } from 'react';


function App() {

  const [indicadores, setIndicadores] = useState([])
  const [search, setSearch] = useState('')
  const [sortOption, setSortOption] = useState("1");

  useEffect(() => {
    const fetchIndicadores = async () => {
      try {
        const response = await fetch('https://mindicador.cl/api')
        let indicadores = await response.json();
        indicadores = Object.values(indicadores); 
        console.log(indicadores)
        indicadores = indicadores.filter(indicador=> typeof indicador==='object');
        setIndicadores(indicadores)

      } catch (error) {
        console.log(error)
      }
    }
    fetchIndicadores()
  }, [])


const handleSearchChange = (value) => {
  console.log(value)
  setSearch(value);
}
const handleChangeSort = (event) => {
  setSortOption(event.target.value);
};
  return (
    <>
    <Nav onSearchChange={handleSearchChange} onSortOption={handleChangeSort}  />
    <div className="container">
      <MiApi indicadorData= {indicadores} search={search} sortOption={sortOption}/>
    </div>
    </>
   
    
  );
}

export default App;
