import React from 'react';
import Navbar from '../components/Navbar';
import { Footer } from '../Styled/footer';
import { Heading } from '../Styled/footer';
import MenuProdutos from '../images/menu-produtos.svg';

import { ImgProduto , Title, Price } from '../Styled/produtos';
import produto from '../images/produtoLista.svg';
import '../estilosCss/produtos.css';

const Comprar = () =>{
  return (
    <div className='produtos'>
      <Navbar/>
      <div className='banner-header'>
        <Heading>Frete grátis em compras acima de R$30!</Heading>
      </div>
      <h1 className='title-produtos'>Produtos</h1>
      <img src= {MenuProdutos} alt="menu-de-produtos"/>
      <div className='lista-produtos'>

        <div> 
          <ImgProduto src={produto} alt='camisa'/>
            <Title>Opa</Title>
              <Price> 35,00</Price>
        </div>
        <div> 
          <ImgProduto src={produto} alt='camisa'/>
            <Title>Opa</Title>
              <Price> R$35,00</Price>
        </div>
        <div> 
          <ImgProduto src={produto} alt='camisa'/>
            <Title>Opa</Title>
              <Price> 35,00</Price>
        </div>
        <div> 
          <ImgProduto src={produto} alt='camisa'/>
            <Title>Opa</Title>
              <Price> 35,00</Price>
        </div>
        <div> 
          <ImgProduto src={produto} alt='camisa'/>
            <Title>Opa</Title>
              <Price> 35,00</Price>
        </div>
        <div> 
          <ImgProduto src={produto} alt='camisa'/>
            <Title>Opa</Title>
              <Price> 35,00</Price>
        </div>
        <div> 
          <ImgProduto src={produto} alt='camisa'/>
            <Title>Opa</Title>
              <Price> 35,00</Price>
        </div>
        <div> 
          <ImgProduto src={produto} alt='camisa'/>
            <Title>Opa</Title>
              <Price> 35,00</Price>
        </div>
        <div> 
          <ImgProduto src={produto} alt='camisa'/>
            <Title>Opa</Title>
              <Price> 35,00</Price>
        </div>
       </div> 
       <Footer>hahah</Footer>
    </div>
  );
}

export default Comprar;