import styled from 'styled-components';
const NavbarContainer = styled.nav`
  background-color: white;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-left: 75vw;
  font-variant: Barlow;
  font-size: 1.125rem;
  font-style: Barlow;
  font-weight: 900;
  line-height: 1.5rem; 
  @media (max-width: 600px) {
    font-size: 1rem;
    gap: 0rem;
    margin-left: 30vw;
    
  }
  c
`;

const NavbarButton = styled.button`
background: var(--Variantes-01-F3F5FF, #F3F5FF);
  color: var(--Primary-Blue-01-100, #002EFF);
  border-radius: 1.5rem;
  @media (max-width: 600px) {
    background: none;
    color: var(--Neutral-Black, #0C0C0C);
    font-variant: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; 
    letter-spacing: 0.0025rem;
    text-decoration-line: underline;
  }
`;


function Navbar ({prop}) {
  const handleButtonForm = () => {
    prop(true);
    };
    const handleButtonList = () => {
      prop(false);
      };
  return (
    <NavbarContainer>
      <ButtonContainer>
        <NavbarButton onClick={handleButtonForm}>Formulario</NavbarButton>
        <NavbarButton onClick={handleButtonList}>Lista Formulario</NavbarButton>
      </ButtonContainer>
    </NavbarContainer>
  );
};

export default Navbar
