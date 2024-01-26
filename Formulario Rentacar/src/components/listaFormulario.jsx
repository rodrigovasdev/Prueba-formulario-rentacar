import styled from 'styled-components';
import Table from './table';

const ContainerTitulo = styled.div`
    background: #FFF;
    gap: 1vw;
    display: flex;
    flex-direction: column;
  
`;
const Container = styled.div`
    background: #FFF;
    width: 55rem;
    height: 25rem;
    gap: 1vw;
    display: flex;
    flex-direction: column;
    padding: 15vw;
    margin-left: 13vw;
    margin-top: -17vw;
`;
const ContainerElementos = styled.div`
    background: #FFF;
    gap: 1vw;
    display: flex;
    flex-direction: row;

`;
const HeaderText = styled.span`
    color: #191919;
    font-variant: Barlow;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;
const Text = styled.span`
    color: #191919;
    font-variant: Barlow;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  

`;

const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

function ListaFormulario (){
    return(
        <Container>
            <ContainerTitulo>
                <HeaderText>Lista Formulario</HeaderText>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the bed industry's standard dummy text ever since.</Text>
            </ContainerTitulo>
            <Table></Table>
        </Container>      
        
    )
}

export default ListaFormulario;