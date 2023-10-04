import React from 'react';
import Button from 'react-bootstrap/Button'; // Renamed import
import { useState } from 'react';
import JsonData from './data.json'
import { Link } from 'react-router-dom';

function Buttons() {
  const [desp,setDesp] = useState(JsonData);

  return (
    <>
        <Button className='navBtn' style={{width:'100px',backgroundColor:'#EBEBFB',color:'black',border:'none',margin:'10px 10px'}}><Link to={'/'} style={{textDecoration:'none' , color:'black'}}><b>{desp.button1}</b></Link></Button>
        <Button className='navBtn' style={{width:'100px',backgroundColor:'#EBEBFB',color:'black',border:'none',margin:'10px 10px'}}><Link style={{textDecoration:'none' , color:'black'}} to={'/Mumbai'}><b>{desp.button2}</b></Link></Button>
        <Button className='navBtn' style={{width:'100px',backgroundColor:'#EBEBFB',color:'black',border:'none',margin:'10px 10px'}}><Link style={{textDecoration:'none' , color:'black'}} to={'/Paris'}><b>{desp.button3}</b></Link></Button>
        <Button className='navBtn active' style={{width:'100px',backgroundColor:'#EBEBFB',color:'black',border:'none',margin:'10px 10px'}}><Link style={{textDecoration:'none' , color:'black'}} to={'/London'}><b>{desp.button4}</b></Link></Button>
    </>
    );
        }

export default Buttons;
