import styled from 'styled-components';

const Container = styled.div`
    background: #FFF;
    width: 90rem;
    height: 25rem;
    display: flex;
    gap: 18vw;
    padding: 3vw;
    margin-left: 14vw;
    margin-top: -1vw;
    @media (max-width: 600px) {
        margin-top: 14vw;
        width: 5rem;
        height: 15rem;
        gap: 8vw;
      }
    
`;
const ContainerText = styled.div`
    background: #FFF;
    display: flex;
    gap: 10px;
    align-self: center;
    @media (max-width: 600px) {
        display:grid;
        margin-top: -29vw;
        margin-left: -5vw;
        gap: 0;
      }
`;
const TextoEstilo1 = styled.span`
color: var(--Primarios-Personas-01-002EFF, #002EFF);
font-variant: Barlow;
font-size: 3.5rem;
font-style: normal;
font-weight: 400;
line-height: normal;
@media (max-width: 600px) {
    font-size: 1.7rem;
    font-weight: 370;

  }
`;

const TextoEstilo2 = styled.span`
color: var(--Primarios-Personas-01-002EFF, #002EFF);
font-variant: Barlow;
font-size: 3.5rem;
font-style: normal;
font-weight: 600;
line-height: normal;
@media (max-width: 600px) {
    white-space: nowrap;
    font-size: 1.7rem;
    line-height: 100%;
    font-weight: 650;

  }
`;

const LogoImage = styled.img`
width: 26.5rem;
height: 26.5rem;
padding: 1rem;
flex-direction: column;
align-items: flex-start;
flex-shrink: 0;
@media (max-width: 600px) {
    display: flex;
    width: 10.5rem;
    height: 10.5rem;
    padding: 0.3rem;
  }
`;



function Content (){
    return(
        <Container>
            <ContainerText>
                <TextoEstilo1>Formulario</TextoEstilo1>
                <TextoEstilo2>de Prueba</TextoEstilo2>
            </ContainerText>
            <LogoImage src="src/assets/Laptop.png" alt="Descripción de la imagen" />
        </Container>
    )
}

export default Content