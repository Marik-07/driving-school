import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { db, auth } from "./firebase"
import { collection, addDoc, getDocs } from "firebase/firestore"

export default function Dashboard(){

const instructors = [
{ id:1, name:"Азамат", price:1000 },
{ id:2, name:"Руслан", price:1000 },
{ id:3, name:"Бакыт", price:1000 }
]

const times = [
"09:00","10:00","11:00",
"12:00","13:00","14:00",
"15:00","16:00","17:00"
]

const [selectedDate,setSelectedDate] = useState("")
const [bookings,setBookings] = useState([])

const bookingsCollection = collection(db,"bookings")

useEffect(()=>{
loadBookings()
},[])

async function loadBookings(){

const data = await getDocs(bookingsCollection)

setBookings(data.docs.map(doc=>({...doc.data(),id:doc.id})))

}

async function book(instructorName,time){

if(!selectedDate){
alert("Выберите дату")
return
}

const user = auth.currentUser

if(!user){
alert("Вы не вошли")
return
}

const exists = bookings.find(
b => b.instructor===instructorName && b.date===selectedDate && b.time===time
)

if(exists){
alert("Это время уже занято")
return
}

await addDoc(bookingsCollection,{
instructor: instructorName,
date: selectedDate,
time: time,
userId: user.uid
})

loadBookings()

}

return(

<div style={{padding:"40px"}}>

<h1>Инструкторы</h1>

<Link to="/bookings">Мои записи</Link>

<br/><br/>

<input
type="date"
value={selectedDate}
onChange={(e)=>setSelectedDate(e.target.value)}
/>

{instructors.map((inst)=>(

<div key={inst.id} style={{
border:"1px solid black",
padding:"20px",
marginTop:"20px"
}}>

<h2>{inst.name}</h2>
<p>{inst.price} сом / час</p>

<div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>

{times.map((time)=>{

const taken = bookings.find(
b => b.instructor===inst.name && b.date===selectedDate && b.time===time
)

return(

<button
key={time}
disabled={taken}
onClick={()=>book(inst.name,time)}
>

{taken ? "занято" : time}

</button>

)

})}

</div>

</div>

))}

</div>

)

}