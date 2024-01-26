import styled from 'styled-components';

const Container = styled.div`
    background: #FFF;
    width: 90rem;
    height: 25rem;
    display: flex;
    gap: 18vw;
    padding: 3vw;
    margin-left: 13vw;
    margin-top: -1vw;
`;
const ContainerText = styled.div`
    background: #FFF;
    display: flex;
    gap: 10px;
    align-self: center;
`;
const TextoEstilo1 = styled.span`
color: var(--Primarios-Personas-01-002EFF, #002EFF);
font-variant: Barlow;
font-size: 3.5rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

const TextoEstilo2 = styled.span`
color: var(--Primarios-Personas-01-002EFF, #002EFF);
font-variant: Barlow;
font-size: 3.5rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`;

const LogoImage = styled.img`
width: 26.5rem;
height: 26.5rem;
padding: 1rem;
flex-direction: column;
align-items: flex-start;
flex-shrink: 0;
`;



function Content (){
    return(
        <Container>
            <ContainerText>
                <TextoEstilo1>Formulario</TextoEstilo1>
                <TextoEstilo2>De Prueba</TextoEstilo2>
            </ContainerText>
            <LogoImage src="Laptop.png" alt="Descripción de la imagen" />
        </Container>
    )
}

export default Content