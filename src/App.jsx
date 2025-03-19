import { useState } from "react"

function App (){

    const[nome, setNome] = useState('Joay')

    const Formulario = () => {

      return (
        <div>
          <input
      className="nome"
      onChange={(e)=>{setNome(e.target.value)}}
      name="nome"
      type="text"/>
      <button
      onClick={()=>{alert(nome)}}
      className="botao">
        Clique Aqui
        </button>
        </div>
      )
    }
  return (
    <div>
      <h3>Pizzaria 2C</h3>
      <Formulario/>
    </div>
  )

}

export default App 