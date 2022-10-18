import React, {useState} from 'react'
import { Form} from '../MainPage/styles'

const ConfirmationForm = (props) => {

  const [data,setData] = useState("")
  const [telefone,setTelefone] = useState("")
  const [genero,setGenero] = useState("")
  const [etnia,setEtnia] = useState("")
  const [periodo,setPeriodo] = useState("")
  const [escolaridade,setEscolaridade] = useState("")
  const [disponibilidade,setDisponibilidade] = useState("")

  const onChangeData =(event) =>{
    setData(event.target.value)
    console.log(event.target.value)
  }

  const onChangeTelefone =(event) =>{
    setTelefone(event.target.value)
    console.log(event.target.value)
  }

  const onChangeGenero =(event) =>{
    setGenero(event.target.value)
    console.log(event.target.value)
  }

  const onChangeEtnia =(event) =>{
    setEtnia(event.target.value)
    console.log(event.target.value)
  }

  const onChangePeriodo =(event) =>{
    setPeriodo(event.target.value)
    console.log(event.target.value)
  }

  const onChangeEscolaridade =(event) =>{
    setEscolaridade(event.target.value)
    console.log(event.target.value)
  }

  const onChangeDisponibilidade =(event) =>{
    setDisponibilidade(event.target.value)
    console.log(event.target.value)
  }

  function enviarFormulario(){
    if (data === "" || telefone === ""){
      alert("Todos os campos devem ser preenchidos")
    }
      alert("Cadastro Finalizado!")
      props.setName("")
      props.setAge("")
      props.setEmail("")
      props.setValidaEmail("")
      setData("")
      setTelefone("")
      setGenero("")
      setEtnia("")
      setPeriodo("")
      setEscolaridade("")
      setDisponibilidade("")
  }

  
  
  return (
    <Form>
      <label>
        Data de Nascimento:
        <input value={data} placeholder="dd/mm/aaaa" onChange={onChangeData}/>
      </label>
      <label>
        Data de Telefone:
        <input value={telefone} placeholder="(_)____-____" onChange={onChangeTelefone}/>
      </label>
      <label>
        Qual o seu genêro?
        <select value={genero} onChange={onChangeGenero}>
          <option value="Homem cisgênero">Homem cisgênero</option>
          <option value="Mulher cisgênero">Mulher cisgênero</option>
          <option value="Homem trans">Homem trans</option>
          <option value="Mulher trans">Mulher trans</option>
          <option value="Prefiro não dizer">Prefiro não dizer</option>
        </select>
      </label>

      <label>
        Qual sua etnia?
        <select value={etnia} onChange={onChangeEtnia}>
          <option value="Negro">Negro</option>
          <option value="Branco">Branco</option>
          <option value="Pardo">Pardo</option>
          <option value="Indigena">Indigena</option>
          <option value="Prefiro não dizer">Prefiro não dizer</option>
        </select>
      </label>

      <p>Qual a modalidade do Curso?</p>
      <label>
        <input type="radio" name="curso" value={periodo} onChange={onChangePeriodo}/>
        <label for="integral" value="Curso Integral Web Full Stack">Curso Integral Web Full Stack</label>
        <input type="radio" name="curso" value={periodo} onChange={onChangePeriodo}/>
        <label for="noturno" value="Curso Noturno Web Full Stack">Curso Noturno Web Full Stack</label>
      </label>

      <p>Qual o seu grau de escolaridade?</p>
      <label>
        <input type="checkbox" name="escolaridade" value={escolaridade} onChange = {onChangeEscolaridade}/>
        <label for="Ensino Médio">Tenho Ensino Médio Completo</label>
        <input type="checkbox" name="disponibilidade" value={disponibilidade} onChange = {onChangeDisponibilidade}/>
        <label for="Ensino Médio">Tenho Disponibilidade</label>
      </label>
        
      <button onClick={enviarFormulario}>Enviar dados</button>


      </Form>
  )
}

export default ConfirmationForm