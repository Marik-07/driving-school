import { useState } from "react"
import { auth } from "./firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate, Link } from "react-router-dom"

export default function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

async function login(){

try{

await signInWithEmailAndPassword(auth,email,password)

navigate("/dashboard")

}catch(err){

alert("Ошибка входа")

}

}

return(

<div style={{padding:"40px"}}>

<h1>Вход</h1>

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

<button onClick={login}>
Войти
</button>

<br/><br/>

<Link to="/register">
Регистрация
</Link>

</div>

)

}