import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import sobre from '../images/sobre.jpg';
import { Footer } from '../Styled/footer';

const Sobre = () =>{
  return (
    <div>
    <Navbar/>
    <img src={sobre} width={'1200'} alt="sobre-em-construção"/>
    <Footer>uuu</Footer>  
    </div>
  );
}

export default Sobre;