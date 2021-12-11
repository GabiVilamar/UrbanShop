import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import sobre from '../images/sobre.jpg';

const Sobre = () =>{
  return (
    <div>
    <Navbar/>
    <img src={sobre} width={'1200px'} alt="sobre-em-construção"/>
    </div>
  );
}

export default Sobre;