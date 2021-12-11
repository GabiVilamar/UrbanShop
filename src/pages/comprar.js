import React from 'react';
import Navbar from '../components/Navbar';
import { Footer } from '../Styled/footer';
import { Heading } from '../Styled/footer';
import MenuProdutos from '../images/menu-produtos.svg';

import '../estilosCss/home.css';
import '../estilosCss/App.css';

const Comprar = () =>{
  return (
    <div className="App">
      <Navbar/>
      <div className='banner-header'>
        <Heading>Frete grátis em compras acima de R$30!</Heading>
      </div>
      <h1 className='title-produtos'>Produtos</h1>
      <img src= {MenuProdutos} 
           alt="menu-de-produtos"/>
   
    
    </div>
  );
}

export default Comprar;