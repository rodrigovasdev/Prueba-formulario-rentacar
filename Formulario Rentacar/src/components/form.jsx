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
    margin-left: 25vw;
    margin-top: -4vw;

`

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

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
`

const HeaderText = styled.span`
    color: #191919;
    font-variant: Barlow;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
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
   
`;
const InputSelect = styled.select`
flex: 1;
width: 14rem;
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
display: flex;
color: rgba(255, 255, 255, 1);
width: 8.75rem;
margin-top: -2vw;
margin-left: 35vw;
margin-bottom: 1vw;
justify-content: center;
align-items: center;
border-radius: 6.25rem;
background: var(--Primary-Blue-01-100, #002EFF);
/* Elevation/00 - None */
box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.00);
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

    const [opcion1, setOpcion1] = useState("Miata");
    const [opcion2, setOpcion2] = useState("RX-8");
    const [marca, setMarca] = useState("Mazda");
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
        dispatch(addAuto({id,nombre,rut,patente,marca,modelo,precio}))
    }
    
    
    return (
        <Container>
            <SubContainer>
                <HeaderText>Nuevo Formulario</HeaderText>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the bed industry's standard dummy text ever since.</Text>
            </SubContainer>
            <SubContainer>
                <FormHeaderText> Datos del vendedor:</FormHeaderText> 
                <ContainerInput>
                    <InputLabelCont>
                        <Label htmlFor="input1">Nombre completo</Label>
                        <InputName value={nombre} onChange={handleChangeNombre} id="input1"></InputName>
                    </InputLabelCont>
                     <InputLabelCont> 
                        <Input value={rut} onChange={handleChangeRut} id="input2"></Input>
                        <Label htmlFor="input2">Rut Vendedor</Label>
                     </InputLabelCont>
                </ContainerInput> 
                <FormHeaderText> Datos del vehículo:</FormHeaderText>  
                <ContainerInput>
                    <InputLabelCont> 
                            <Input value={patente} onChange={handleChangePatente} id="input3"></Input>
                            <Label htmlFor="input3">Patente del vehículo</Label>
                        </InputLabelCont>
                        <InputLabelCont> 
                            <InputSelect  value={marca} onChange={handleChangeMarca} id="input4"><option value={'Mazda'}>Mazda</option><option value={'Toyota'}>Toyota</option><option value={'Nissan'}>Nissan</option><option value={'Volvo'}>Volvo</option></InputSelect>
                            <Label htmlFor="input4">Marca del vehículo</Label>
                        </InputLabelCont>
                        <InputLabelCont> 
                      
                            <InputSelect value={modelo} onChange={handleChangeModelo} id="input5"><option>{opcion1}</option><option>{opcion2}</option></InputSelect>
                            <Label htmlFor="input5">Modelo del vehículo</Label>
                        </InputLabelCont>
                        <InputLabelCont> 
                            <InputBlock value={precio} onChange={handleChangePrecio} id="input6"></InputBlock>
                            <Label htmlFor="input6">Precio del vehículo</Label>
                        </InputLabelCont>
                        
                </ContainerInput> 
            </SubContainer>
            
            <SubmitButton onClick={ handleSendData}>Enviar</SubmitButton>
        </Container>
    )

}

export default Form