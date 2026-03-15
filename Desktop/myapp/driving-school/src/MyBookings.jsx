import { useState, useEffect } from "react"
import { db, auth } from "./firebase"
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"
import { Link } from "react-router-dom"

export default function MyBookings(){

const [bookings,setBookings] = useState([])

const bookingsCollection = collection(db,"bookings")

useEffect(()=>{
loadBookings()
},[])

async function loadBookings(){

const user = auth.currentUser

const data = await getDocs(bookingsCollection)

setBookings(
data.docs
.map(doc=>({...doc.data(),id:doc.id}))
.filter(b=>b.userId===user.uid)
)

}

async function removeBooking(id){

await deleteDoc(doc(db,"bookings",id))

loadBookings()

}

return(

<div style={{padding:"40px"}}>

<h1>Мои записи</h1>

<Link to="/dashboard">Назад</Link>

<br/><br/>

{bookings.map((b)=>(
<div key={b.id} style={{
border:"1px solid black",
padding:"20px",
marginBottom:"10px"
}}>

<p>Инструктор: {b.instructor}</p>
<p>Дата: {b.date}</p>
<p>Время: {b.time}</p>

<button onClick={()=>removeBooking(b.id)}>
Удалить
</button>

</div>
))}

</div>

)

}