import { useState } from "react"
import { db, auth } from "./firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

export default function Register(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

async function register(){

try{

await createUserWithEmailAndPassword(auth,email,password)

alert("Регистрация успешна")

navigate("/")

}catch(err){

alert(err.message)

}

}

return(

<div style={{padding:"40px"}}>

<h1>Регистрация</h1>

<input
placeholder="email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button onClick={register}>
Зарегистрироваться
</button>

</div>

)

}