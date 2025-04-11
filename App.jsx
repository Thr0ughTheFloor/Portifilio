import style from './App.module.css'
import { cards } from './assets/mock/cards'
import { Menu } from './components/menu'
// import img01 from './assets/images/img01.jpg'
import { useState } from 'react'

function App() {
  const defaultPhoneNumber = "5541999999999" 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
 
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleZap = () => {
    const {name, email, message} = formData;

    const urlZAPZAP = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
    Nome:%20${name}%0D%0A
    Email:%20${email}%0D%0A
    Mensagem:%20${message}%0D%0A`;

    window.open(urlZAPZAP, "_blank")
  }


  return (
    <>
    <Menu option01='Oi'/>
    </>
  )
}

export default App
