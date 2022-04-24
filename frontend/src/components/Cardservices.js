import React from "react";
import Card from 'react-bootstrap/Card'
import servicesimg1 from '../images/servicesimg1.png';
export default function Cardservices (props){
  console.log(servicesimg1);
return (
    <Card style={{ width: '12rem'}}>
    <Card.Img variant="top" src={props.img} />
    <Card.Body className="p-0">

      <Card.Text className="bg-[#088E74] p-0 pt-2 pb-2 text-white">
        {props.text}
      </Card.Text>
     
    </Card.Body>
  </Card>
)
}