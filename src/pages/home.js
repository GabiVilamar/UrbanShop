import Navbar from '../components/Navbar';
import { Heading } from '../Styled/footer';
import { Banner, LogoText, Section, Button, Footer } from '../Styled/homeComponents';
import Logo from '../images/urbanShop.svg';
import Product1 from '../images/homeProduct1.svg';
import Product2 from '../images/homeProduct2.svg';

import '../estilosCss/home.css';


function Home() {
  return (
    <div className="App">
      <Navbar/>
      <div className='banner-header'>
        <Heading>Frete grátis em compras acima de R$30!</Heading>
      </div>
      <Banner top />
      <LogoText>
        <img src={Logo}
             alt="Logo"/>
        um ponto de encontro na cidade grande
      </LogoText>
      <div className='content'>
      <Section>
        <img src={Product1}
             alt="Produto 1"/>
        <div className='textProduct'>
          <h3>Modelos Unissex</h3>
          <p>Seu estilo confortável para qualquer evento</p>
        <Button> Compre agora</Button></div>
      </Section>
      <Section>
       <div className="textProduct2">
         <h3>Calças para todes</h3>
         <p>Seu estilo confortável para qualquer evento</p>
         <Button> Compre agora</Button>
        <img src={Product2}
             alt="Produto 2"/>
       </div>
      </Section>
      </div>
      <Banner bottom />
      <Footer> Ou entre em contato conosco</Footer>
    </div>

  );
}

export default Home;
