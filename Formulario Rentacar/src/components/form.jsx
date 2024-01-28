import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
import { addAuto } from "../features/autoSlice";
import React, { useState } from 'react';
const Container = styled.div`
    width: 53.5625rem;
    background: #FFF;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-left: 28vw;
    margin-top: -4vw;
    @media (max-width: 600px) {
        width: 18rem;
        font-size: 4vw;
        margin-top: -15vw;
      }
`

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media (max-width: 600px) {
        margin-left: -17vw;
      }
`

const InputLabelCont =styled.div`
    position: relative;
`;

const ContainerInput = styled.div`
    background: #FFF;
    display: flex;
    flex-wrap: wrap;
    gap: 1.8rem;
    padding-bottom: 2vw;
    border-bottom: 1px solid #ccc;
    position: relative;
    @media (max-width: 600px) {
        border-bottom: 2px solid #ccc;
        width: 21rem;
      }
`

const HeaderText = styled.span`
    color: #191919;
    font-variant: Barlow;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media (max-width: 600px) {
        font-size: 1.8rem;
      }
`;

const AsteriscoText = styled.span`
    color: var(--Secundarios-09-Error-DC2020, #DC2020);
    font-variant: Barlow;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem; 
`;


const FormHeaderText = styled.span`
    color: var(--Neutral-Black, #0C0C0C);
    font-variant: Barlow;
    font-size: 1.25rem;
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

const Input = styled.input`
    flex: 1;
    width: 14rem;
    padding: 1rem;
    position: relative;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.5rem;
    border: 2px solid var(--Primarios-Personas-01-002EFF, #002EFF);
    background: var(--Grises-17-FFFFFF, #FFF);
    @media (max-width: 600px) {
        width: 18rem;
        font-size: 14px;
        padding: 1rem;
        justify-content: center;
        align-items: center;
      }
    
   
`;
const InputSelect = styled.select`
    flex: 1;
    width: 16rem;
    padding: 1rem;
    position: relative;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.5rem;
    border: 2px solid var(--Primarios-Personas-01-002EFF, #002EFF);
    background: var(--Grises-17-FFFFFF, #FFF);

  &:focus {
    border-color: #007bff;
    outline: none;
  }
  @media (max-width: 600px) {
    width: 20rem;
    font-size: 14px;
    padding: 1rem;
    justify-content: center;
    align-items: center;
  }

`;

const InputName = styled.input`
    position: relative;
    z-index: 1;
    display: flex;
    width: 31.75rem;
    padding: 1rem;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.5rem;
    border: 2px solid var(--Primarios-Personas-01-002EFF, #002EFF);
    background: var(--Grises-17-FFFFFF, #FFF);
    @media (max-width: 600px) {
        width: 18rem;
        font-size: 14px;
        padding: 1rem;
        justify-content: center;
        align-items: center;
      }
    
      
    
`;

const InputBlock = styled.input`
    display: block;
    width: 14rem;
    padding: 1rem;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.5rem;
    border: 2px solid var(--Primarios-Personas-01-002EFF, #002EFF);
    background: var(--Grises-17-FFFFFF, #FFF);
    @media (max-width: 600px) {
        width: 18rem;
        font-size: 14px;
        padding: 1rem;
        justify-content: center;
        align-items: center;
      }
    
`;

const Label = styled.label`
    position: absolute;
    top: -13px;
    left: 20px;
    padding: 4px;
    z-index: 2;
    pointer-events: none;
    background: var(--Grises-17-FFFFFF, #FFF);
    color: blue;
`;

const SubmitButton = styled.button`
    font-variant: Barlow;
    display: flex;
    color: rgba(255, 255, 255, 1);
    width: 8.75rem;
    margin-top: 1vw;
    margin-left: 35vw;
    margin-bottom: 2vw;
    justify-content: center;
    align-items: center;
    border-radius: 6.25rem;
    background: var(--Primary-Blue-01-100, #002EFF);
    /* Elevation/00 - None */
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.00);
    @media (max-width: 600px) {
        margin-top: 2vw;
        margin-left: 5vw;
        margin-bottom: 3vw;
      }
    
`;

function Form (){
    const dispatch = useDispatch()
    const [id, setId] = useState(1);
    const [nombre, setNombre] = useState("");
    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
        console.log(nombre)
      };
    const [rut, setRut] = useState("");
    const handleChangeRut = (event) => {
        setRut(event.target.value);
      };
    const [patente, setPatente] = useState("");
    const handleChangePatente = (event) => {
        setPatente(event.target.value);
      };

    const [opcion1, setOpcion1] = useState("");
    const [opcion2, setOpcion2] = useState("");
    const [marca, setMarca] = useState("");
    const handleChangeMarca = (event) => {
        setMarca(event.target.value);
            setOpcion1('');
            setOpcion2('');
        if (event.target.value == 'Mazda'){
            setOpcion1('Miata');
            setOpcion2('RX-8');
        }
        if (event.target.value == 'Nissan'){
            setOpcion1('March');
            setOpcion2('X-trail');
        }
        if (event.target.value == 'Toyota'){
            setOpcion1('Supra');
            setOpcion2('RAV 4');
        }
        if (event.target.value == 'Volvo'){
            setOpcion1('V40');
            setOpcion2('S60');
        }
      };

    const [modelo, setModelo] = useState("");
    const handleChangeModelo = (event) => {
        setModelo(event.target.value);
      };
    const [precio, setPrecio] = useState();
    const handleChangePrecio = (event) => {
        setPrecio(event.target.value);
        
      };
    const handleSendData = () =>{
        setId(Date.now());
        let faltaInfo = false;
        if (nombre == '')
            faltaInfo = true;
        if (rut == '')
            faltaInfo = true;
        if (patente == '')
            faltaInfo = true;
        if (marca == '')
            faltaInfo = true;
        if (modelo == '')
            faltaInfo = true;
        if (precio == '')
            faltaInfo = true;
        if (!faltaInfo){
            dispatch(addAuto({id,nombre,rut,patente,marca,modelo,precio}))
            setNombre('');
            setRut('');
            setPatente('');
            setMarca('');
            setModelo('');
            setPrecio('');
            setOpcion1('');
            setOpcion2('');
        }
    }
    
    
    return (
        <Container>
            <SubContainer>
                <HeaderText>Nuevo Formulario</HeaderText>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the bed industry's standard dummy text ever since.</Text>
            </SubContainer>

                <form>
                    <SubContainer>
                        <FormHeaderText> Datos del vendedor:</FormHeaderText> 
                        <ContainerInput>
                            <InputLabelCont>
                                <Label htmlFor="input1">Nombre completo <AsteriscoText>*</AsteriscoText></Label>
                                <InputName value={nombre} onChange={handleChangeNombre} id="input1" required></InputName>
                            </InputLabelCont>
                            <InputLabelCont> 
                                <Input value={rut} onChange={handleChangeRut} id="input2" required></Input>
                                <Label htmlFor="input2">Rut Vendedor <AsteriscoText>*</AsteriscoText></Label>
                            </InputLabelCont>
                        </ContainerInput> 
                        <FormHeaderText> Datos del vehículo:</FormHeaderText>  
                        <ContainerInput>
                            <InputLabelCont> 
                                    <Input value={patente} onChange={handleChangePatente} id="input3" required></Input>
                                    <Label htmlFor="input3">Patente del vehículo <AsteriscoText>*</AsteriscoText></Label>
                                </InputLabelCont>
                                <InputLabelCont> 
                                    <InputSelect  value={marca} onChange={handleChangeMarca} id="input4" required><option value="" disabled hidden>Elige una marca</option><option value={'Mazda'}>Mazda</option><option value={'Toyota'}>Toyota</option><option value={'Nissan'}>Nissan</option><option value={'Volvo'}>Volvo</option></InputSelect>
                                    <Label htmlFor="input4">Marca del vehículo <AsteriscoText>*</AsteriscoText></Label>
                                </InputLabelCont>
                                <InputLabelCont> 
                            
                                    <InputSelect value={modelo} onChange={handleChangeModelo} id="input5" required><option value="" disabled hidden>Elige un modelo </option><option value={opcion1}>{opcion1}</option><option value={opcion2}>{opcion2}</option></InputSelect>
                                    <Label htmlFor="input5">Modelo del vehículo <AsteriscoText>*</AsteriscoText></Label>
                                </InputLabelCont>
                                <InputLabelCont> 
                                    <InputBlock value={precio} onChange={handleChangePrecio} id="input6" required></InputBlock>
                                    <Label htmlFor="input6">Precio del vehículo <AsteriscoText>*</AsteriscoText> </Label>
                                </InputLabelCont>
                                
                        </ContainerInput> 
                    </SubContainer>
                    <SubmitButton onClick={handleSendData}>Enviar</SubmitButton>                   
            </form>
            
        </Container>
    )

}

export default Form