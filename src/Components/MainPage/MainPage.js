import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")
const [validaEmail, setValidaEmail] = useState("")
const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

const onChangeName = (event) => {
  console.log(event.target.value)
  setName(event.target.value)
}

const onChangeAge = (event) => {
  console.log(event.target.value)
  setAge(event.target.value)
}

const onChangeEmail = (event) => {
  console.log(event.target.value)
  setEmail(event.target.value)
}

const onChangeValidaEmail = (event) => {
  console.log(event.target.value)
  setValidaEmail(event.target.value)
}

const sendData = () => {
  //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos
  if (name.length < 10  || age < 18 || !email.includes("@") || email!==validaEmail){
    alert("Um ou mais pré-requisitos não foram cumpridos!")
   
    setName("")
    setAge("")
    setEmail("")
    setValidaEmail("")
    setFormFlow(1)
  }else{
    setFormFlow(2)
    console.log("Seja bem vindo! Só precisamos de mais alguns dados.")
  }

  
}
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
      name={name}
      age={age}
      email={email}
      formFlow={formFlow}
      setName={setName}
      setAge={setAge}
      setEmail={setEmail}
      setFormFlow={setFormFlow}
      onChangeName={onChangeName}
      onChangeAge={onChangeAge}
      onChangeEmail={onChangeEmail}
      onChangeValidaEmail={onChangeValidaEmail}
      sendData={sendData}
      validaEmail={validaEmail}
      setValidaEmail={setValidaEmail}

      // insira aqui suas props
      /> : <ConfirmationForm 
      name={name}
      age={age}
      email={email}
      formFlow={formFlow}
      setName={setName}
      setAge={setAge}
      setEmail={setEmail}
      setFormFlow={setFormFlow}
      onChangeName={onChangeName}
      onChangeAge={onChangeAge}
      onChangeEmail={onChangeEmail}
      onChangeValidaEmail={onChangeValidaEmail}
      sendData={sendData}
      validaEmail={validaEmail}
      setValidaEmail={setValidaEmail}/>}
    </MainContainer>
  )
}

export default MainPage