import styled from 'styled-components';

export const Footer = styled.footer`
	position: absolute;
	bottom: 0;
	background-color: #E4ABFF;
	color: #fff;
	width: 100%;
	heigth: 100%;
	text-align: center;line-height: 80px;
`;	

export const FooterLink = styled.a`
	color: #fff;
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;

	&:hover {
		color: green;
		transition: 200ms ease-in;
	}
	`;

export const Heading = styled.p`
	font-size: 18px;
	color: #fff;
	margin-bottom: 40px;
	font-weight: bold;
	`;
