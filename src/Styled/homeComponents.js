import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import bannerHome from '../images/bannerHome.svg';
import bannerHomeFooter from '../images/bannerHomeFooter.svg';

export const Banner = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
    width: 100%;
    height: 600px;
    
    ${props => props.top && css` 
    background-image: url(${bannerHome});
  `}
    ${props => props.bottom && css`
    background-image: url(${bannerHomeFooter});
  `}
  
  

  
  `;
  export const LogoText = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  margin-bottom: 15px;
  
  img {
        width: 200px;
        margin-bottom: 10px;
        text-align: center;
    }
`;
export const Section = styled.section`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-content: stretch;
justify-content: space-around;
align-items: normal;
width: 100%;
height: 500px;
margin: 20px;
padding: 20px;

    img {
        width: 400px;
    }
    
    
    `;
    export const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #E4ABFF;
    color: #E4ABFF;
    padding: 10px;
    width: 150px;
    height: 40px;
    left: 0px;
    margin-top: 30px;
    transition-duration: 0.4s;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    cursor: pointer;
    
    :hover {
        background-color: #E4ABFF;
        color: #fff;
    }
    `;
    
    export const Footer = styled.footer`
	position: absolute;
	bottom: 0;
	background-color: #E4ABFF;
	color: #fff;
	width: 100%;
	heigth: 150px;
	text-align: center;
    line-height: 150px;
    `;	
    
    Button.propTypes = {
      rounded: PropTypes.bool,
      outline: PropTypes.bool
    }