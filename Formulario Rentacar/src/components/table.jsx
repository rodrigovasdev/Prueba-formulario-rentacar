import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { removeAuto } from '../features/autoSlice';
import React from 'react';
const Tabla = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    text-align: center;
    padding: 13px;
    border-bottom: 1px solid #ddd;
  }

  tr:hover {
    background-color: #f5f5f5;
  }
`;
const TableTitle = styled.th`
  white-space: nowrap; 
  th {
    text-align: center; 
    background-color: #f4f4f4; 
  }
  &.break-word::after {
    content: attr(data-title) " ";
    display: block;
    white-space: pre-line;
  }
`;

const IconButton = styled.button`
  background: url('src/assets/Eliminar.png') center/contain no-repeat; 
  padding: 10px; 
  margin-left:1vw;
  border: none;
`;
const Span = styled.span`
  text-align: center;
  color: #000;
  font-variant: Barlow;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

function Table (){
    const cars = useSelector((state) => state.auto.list);
    const dispatch = useDispatch()
    const listaInvertida = [...cars].reverse();
    const cantidadAutos = listaInvertida.length;

    return(
        <>
            <Tabla>
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <TableTitle className='break-word' data-title="vendedor">Rut</TableTitle>
                    <TableTitle className='break-word' data-title="vehículo">Patente</TableTitle>
                    <TableTitle className='break-word' data-title="vehículo">Marca</TableTitle>
                    <TableTitle className='break-word' data-title="vehículo">Modelo</TableTitle>
                    <TableTitle className='break-word' data-title="vehículo">Precio</TableTitle>
                    <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                  {listaInvertida.slice(0,10).map((car) => (
                    <tr key={car.id}>
                      <td>{car.nombre}</td>
                      <td>{car.rut}</td>
                      <td>{car.patente}</td>
                      <td>{car.marca}</td>
                      <td>{car.modelo}</td>
                      <td>{car.precio}</td>
                      <td>
                        <IconButton onClick={()=>{dispatch(removeAuto(car.id))}}></IconButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
            </Tabla>
            <Span>Mostrando registros del 1 al 10 de un total de {cantidadAutos} registros.</Span>
        </>
    )
}

export default Table;