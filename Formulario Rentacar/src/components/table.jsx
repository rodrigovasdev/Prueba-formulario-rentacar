import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { removeAuto } from '../features/autoSlice';

const Tabla = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }

  tr:hover {
    background-color: #f5f5f5;
  }
`;
const TableTitle = styled.th`
  white-space: nowrap; 
  th {
    text-align: center; // Centrar texto en los encabezados
    background-color: #f4f4f4; // Opcional: un fondo diferente para los encabezados
  }
  &.break-word::after {
    content: attr(data-title) " ";
    display: block;
    white-space: pre-line;
  }
`;


function Table (){
    const cars = useSelector((state) => state.auto.list);
    const dispatch = useDispatch()
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
        {cars.map((car) => (
          <tr key={car.id}>
            <td>{car.nombre}</td>
            <td>{car.rut}</td>
            <td>{car.patente}</td>
            <td>{car.marca}</td>
            <td>{car.modelo}</td>
            <td>{car.precio}</td>
            <td>
              <button onClick={()=>{dispatch(removeAuto(car.id))}}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
            
            </Tabla>
        </>
    )
}

export default Table;