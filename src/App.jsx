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

  return (
    <>
      
       
    </>
  )
}

export default App
