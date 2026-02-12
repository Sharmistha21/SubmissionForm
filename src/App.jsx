import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [contact,setContact]=useState("");
  const [gender,setGender]=useState("male");
  const [bestSubject,setBestSubject]=useState({
    English:true,
    Maths:false,
    Physics:false
  })

  const [resume,setResume]=useState("");
  const [url,setUrl]=useState("");
  const [choice,setChoice]=useState("");
  const [about,setAbout]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      bestSubject,
      resume,
      url,
      choice,
      about
    );
  };

  const handleSubjectChange=(sub)=>{
    setBestSubject((prev)=>({
         ...prev,[sub]:!prev[sub]
    }))
  }

  const handleRest=()=>{
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("")
    setGender("male");
    setBestSubject({
      English:true,
      Maths:false,
      Physics:false
    });
    setResume("");
    setUrl("");
    setChoice("");
    setAbout("");
  }

  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form action="#" method='GET'>
          <label htmlFor="firstname">
            First Name*
          </label>
          <input type="text" name="firstname" id="firstname" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder='Enter First Name' required/>
          <label htmlFor="lastname">
            Last Name*
          </label>
          <input type="text" name="lastname" id="lastname" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder='Enter Last Name'/>
          <label htmlFor="email">
             Enter Email*
          </label> 
          <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email' required/>
          <label htmlFor="tel">
            Contact*
          </label>
          <input type="tel"name="contact" id="contact" value={contact} onChange={(e)=>setContact(e.target.value)} placeholder='Enter Mobile number' required/> 
          <label htmlFor="gender">
            Gender*
          </label>
          
          <input type="radio" name="gender" id="male" value="male" checked={gender==="male"} onChange={(e)=>setGender(e.target.value)}/>
           Male
            <input type="radio" name="gender" id="female" value="female" checked={gender==="female"} onChange={(e)=>setGender(e.target.value)}/>
           Female
           <input type="radio" name="gender" id="other" value="other" checked={gender==="other"} onChange={(e)=>setGender(e.target.value)}/>
           Other


        </form>
      </fieldset>
       
    </div>
  )
}

export default App
