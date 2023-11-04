import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';

import './App.css';
import { useState } from 'react';

function App() {
  //js code 
    const[Intrest , setIntrest]= useState(0)
    const[Principle , setPrinciple]= useState(0)
    const[Rate , setRate]= useState(0)
    const[year , setyear] = useState(0)
    const[isPrinciple , setIsPrinciple]= useState(true)
    const[isRate , setIsRate]= useState(true)
    const[isYear , setIsYear]= useState(true)
   
   
   
    const Validate =(e)=>{
      const {name ,value}= e.target
     /* console.log(name,value);
      */
    /*console.log(value.match( /^[0-9]+$/));*/
  if(!!value.match(/^[0-9]+$/))
  {//TO CONVERT INTO BOOLEAN VALE
    if(name==='principle'){
      setPrinciple(value)
      setIsPrinciple(true)
    }
    else if(name==='rate')
    {
      setRate(value)
      setIsRate(true)
    }
    else 
    {
      setyear(value)
      setIsYear(true)
    }
    
  }
    else{
          if(name==='principle')
          {
            setPrinciple(value)
            setIsPrinciple(false)
          }
      else if(name==='rate')
      {
            setRate(value)
            setIsRate(false)
      }
      else 
      {
        setyear(value)
        setIsYear(false)
      }
    
    }
  
  }
  const handlecalculate =(e)=>{
      e.preventDefault()
    if(!Principle || !Rate|| !year){
      alert('please fill the form')
    }else{
      //alert('submitted')
      setIntrest(Principle*Rate*year/100)
    }
  }

  return (
    <div style={{height:`100vh`}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
     
     <div style={{width:`500px`}} className='bg-light p-5 rounded'>
        <h1>Simple Intrest App </h1>
        <p>claculate your simple intrest easily</p>
        <div style={{height:`130px`}} className='  flex-column
        mt-5 bg-warning d-flex justify-content-center align-items-center w-10 rounded'>
          <h1>₹ {``} {Intrest}</h1>
          <p>Total Simple Intrest</p>
        </div>
        <form className='mt-5' onSubmit={handlecalculate}>
          <div className='mb-3'>
          <TextField name='Principle' className='w-100 mt-3' 
          value={Principle|| ''} onChange={(e)=> Validate(e)}
           id="outlined-basic" label="principle Amount"
            variant="outlined" />
          </div>
          { !isPrinciple &&
            <div>
              <p className='text-danger fw-bolder'>Invalid input</p>
            </div>
          }
          <div className='mb-3'>
          <TextField className='w-100 mt-3' name='rate' value={Rate || ''}
            id="outlined-basic" label="Rate of Intrest(pm)" variant="outlined" />
          </div>
          { !isRate &&
            <div> 
              <p className='text-danger fw-bolder'>Invalid input</p>
            </div>
          }
          <div className='mb-3'>
          <TextField className='w-100 mt-3' name='year' value={year || ''} id="outlined-basic" label="year (yr-)" variant="outlined" />
          </div>
          { !isYear &&
            <div>
              <p className='text-danger fw-bolder'>Invalid input</p>
            </div>
          }
          <div className=' mt-5'>
          <Stack direction="row" spacing={2}>
           <Button type='submit' disabled={isPrinciple && isRate && isYear?false:true} className='bg-success' style={{width:`200px`,height:`50px`}} 
           variant="contained">Calculalate</Button>
            <Button style={{width:`200px`,height:`50px`}} variant="outlined">reset</Button>
          </Stack>
            </div>
        </form>
     </div>
      
    </div>
  );
}

export default App;
