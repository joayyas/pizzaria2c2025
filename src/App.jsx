import { useState } from "react"

function App (){

    const[nome, setNome] = useState('Joay')

    const Formulario = (props) => {
      return (
        <div>
          <input
            placeholder={props.sombra}
            className="nome"
            onChange={(e)=>{setNome(e.target.value)}}
            name="nome"
            type="text"/>
            <button
            onClick={()=>{(props.mensagem != null) ? alert (props.mensagem) : alert ("Padrão")}}
            className="botao">
           {(props.textoBotao != null) ? props.textoBotao : "Clique Aqui"} 
        </button>
        </div>
      )
    }
  return (
    <div>
      <h3>Pizzaria 2C</h3>
      <Formulario sombra="Digite seu Nome..." textoBotao="Enviar Nome" />
      <Formulario sombra="Digite seu Email..." textoBotao="E-Mail"/>
      <Formulario sombra="Digite seu Número..." textoBotao="Celular"/>
      <Formulario mensagem="Mensagem enviada pelo App" />
      <Formulario/>
    
    </div>
  )
}

export default App 