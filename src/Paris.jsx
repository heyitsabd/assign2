import React, { useEffect, useState } from 'react'
import Buttons from './Buttons';
import { Card,Button,Carousel } from 'react-bootstrap';
import { card_data_Paris } from './data_comp';
import { AiOutlineHeart,AiOutlineDrag } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BsFillBuildingsFill } from "react-icons/bs";
import { BiSolidBed,BiBath } from "react-icons/bi";
import ClipLoader from "react-spinners/ClipLoader";
import Heading from './heading';

function Paris() {
  const [items,setItems]=useState(card_data_Paris);
  const [visible,setVisible]= useState(6);
  const [loading,setloading]= useState(false);

  useEffect(()=>{
    fetch(card_data_Paris)
    .then((res)=>res.json())
    .then((data)=>setItems(data))
  })

  const fetchdata = async () =>{
    setloading(true)
    setTimeout(() => {
      setloading(false);
      setVisible((prevValue)=>prevValue+3)
    }, 1000);
  }

  return (
    <div className='App'>
    <Heading/>
    <Buttons/>
    <div style={{display:'flex',flexWrap:'wrap'}}>
    {items.slice(0,visible).map((item,idx)=>{
        return(
      <Card key={idx} style={{ width: '25rem',margin:'5vh 0',marginLeft:'auto',marginRight:'auto',background:'#F2F6FC',border:'1px white', boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
      <img
        className="d-block w-100"
        src={item.imageSource}
        alt="First slide"
        style={{ height: '200px', width: '500px' }}
      />
   
      <h5
        style={{
          backgroundColor: '#FFFFFE',
          color: '#3A3DE4',
          width: '100px',
          position: 'absolute',
          top: '10px',
          left: '10px',
          textAlign:'center',
          borderRadius:'10px'
        }}
      >
        {item.RentTag}
      </h5>
      <AiOutlineHeart style={{
          backgroundColor: '#FFFFFE',
          color: '#3A3DE4',
          width: '30px',
          height: '30px',
          padding:'5px',
          position: 'absolute',
          top: '10px',
          right: '10px',
          textAlign:'center',
          borderRadius:'15px'
        }} />
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100"
        src={item.imageSource}
        alt="First slide"
        style={{ height: '200px', width: '500px' }}
      />
   
      <h5
        style={{
          backgroundColor: '#FFFFFE',
          color: '#3A3DE4',
          width: '100px',
          position: 'absolute',
          top: '10px',
          left: '10px',
          textAlign:'center',
          borderRadius:'10px'
        }}
      >
        {item.RentTag}
      </h5>
      <AiOutlineHeart style={{
          backgroundColor: '#FFFFFE',
          color: '#3A3DE4',
          width: '30px',
          height: '30px',
          padding:'5px',
          position: 'absolute',
          top: '10px',
          right: '10px',
          textAlign:'center',
          borderRadius:'15px'
        }} />
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100"
        src={item.imageSource}
        alt="First slide"
        style={{ height: '200px', width: '500px' }}
      />
   
      <h5
        style={{
          backgroundColor: '#FFFFFE',
          color: '#3A3DE4',
          width: '100px',
          position: 'absolute',
          top: '10px',
          left: '10px',
          textAlign:'center',
           borderRadius:'10px'
        }}
      >
        {item.RentTag}
      </h5>
      <AiOutlineHeart style={{
          backgroundColor: '#FFFFFE',
          color: '#3A3DE4',
          width: '30px',
          height: '30px',
          padding:'5px',
          position: 'absolute',
          top: '10px',
          right: '10px',
          textAlign:'center',
          borderRadius:'15px'
        }} />
      </Carousel.Item>
      </Carousel>
                <Card.Body>
                  <Card.Title><div style={{fontSize:'12px'}}><IoLocationOutline style={{color:'#9E8046'}}/>{item.Pin}</div></Card.Title>
                  <Card.Text>
                      <b>{item.Address}</b>
                  </Card.Text>
                        <div style={{display:'flex',flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between'}}>
                          <div style={{display:'flex',flexDirection:'column'}}>
                          <div><BsFillBuildingsFill/>  </div>
                          <div>{item.Bath}</div>   
                          </div>

                          <div>
                          <div><BiSolidBed/>  </div>
                          <div>{item.Bed}</div>  
                          </div>

                          <div>
                          <div><BiBath/>  </div>
                          <div>{item.Bath}</div> 
                          </div> 

                          <div>
                          <div><AiOutlineDrag/>  </div>
                          <div>{item.Area}</div> 
                          </div>                 
                        </div>
                        <hr style={{ borderStyle: 'dashed', borderColor: 'gray', borderWidth: '1px', width: '100%' }} />
                  <div style={{display:'flex',justifyContent:'space-between'}}>
                    <p><b style={{color:'#0A58CA'}}>{item.EMI}</b>/<b>month</b></p>
                  <Button variant="primary"><b>Read More</b></Button>
                  </div>
                </Card.Body>
              </Card>
            );
          }
        )}
        
    </div>
    <div style={{marginLeft:'auto',marginRight:'auto',textAlign:'center'}}>
    <Button onClick={fetchdata}>{
      loading?<ClipLoader
      color="#fff"
      speedMultiplier={1}
      size={15}
    />:''
      }Show More</Button>
      </div>
    </div>
  )
}

export default Paris
