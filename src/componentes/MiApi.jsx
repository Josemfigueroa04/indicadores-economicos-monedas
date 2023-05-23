import React, { useEffect, useState } from "react";

const Table = ({indicadorData,search,sortOption}) => {

    const [indicadores, setIndicadores] = useState([]);
      
    //  filtrado del array de indicadores por codigo de la API
    useEffect(() => {
        let filteredIndicadores = indicadorData;

        if (search !== "") {
          filteredIndicadores = indicadorData.filter((indicador) =>
            indicador.codigo.includes(search)
          );
        }
    
        setIndicadores(filteredIndicadores);
      }, [indicadorData, search]);
    
      useEffect(() => {
        setIndicadores(indicadorData);
      }, [indicadorData]);
        
     // ordenamiento del array de indicadores por codigo de la API
    const sortIndicador = (indicadores) => {
        const sortedIndicadores = [...indicadores];
        if (sortOption === "1") {
          sortedIndicadores.sort((a, b) => a.codigo.localeCompare(b.codigo));
        } else if (sortOption === "2") {
          sortedIndicadores.sort((a, b) => b.codigo.localeCompare(a.codigo));
        }
        return sortedIndicadores;
      };
        const sortedIndicadores = sortIndicador(indicadores);

        //  renderizado de la tabla de indicadores 
      
    return (
        <>
        <table className="table">
        <thead>
          <tr>                      
            <th scope="col">Nombre</th>
            <th scope="col">Unidad de Medida</th>
            <th scope="col">Valor</th>       
          </tr>
        </thead>
        <tbody>
          {sortedIndicadores.map((indicador) => (
                      
              <tr key={indicador.codigo}>
                <td>{indicador.nombre}</td>
                <td>{indicador.unidad_medida}</td>
                <td>{indicador.valor}</td>
              </tr>
            ))}
                  
        </tbody>
      </table>
        </>
    )
}

export default Table