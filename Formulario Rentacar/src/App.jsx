import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import Content from './components/content.jsx'
import Form from './components/form.jsx'
import ListaFormulario from './components/listaFormulario.jsx'
function App() {
  const [count, setCount] = useState(0)
  const [childProp, setChildProp] = useState(true);

  const handleProp = (newChildProp) => {
    setChildProp(newChildProp);
    console.log(childProp)
  };
  return (
    <>
    <Navbar prop={handleProp}></Navbar>
    {childProp && <Content/>}
    {childProp && <Form/>}
    {!childProp && <ListaFormulario></ListaFormulario>}
    </>
  )
}

export default App
