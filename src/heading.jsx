import React,{ useState } from 'react'
import JsonData from './data.json'

function Heading(){
    
    const [desp,setDesp] = useState(JsonData);

    return(
        <>
        <h1 style={{width:'40%',marginLeft:'auto',marginRight:'auto',textAlign:'center'}}>{desp.heading}</h1>
        <p style={{width:'40%',marginLeft:'auto',marginRight:'auto',textAlign:'center'}}>{desp.description}</p>
        </>
    )
}

export default Heading;