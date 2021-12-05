import styled from 'styled-components';

export const Box = styled.div`
padding: 1px 5px;
background: black;
position: relative;
bottom: 0;
width: 100%;
text-align: center;


@media (max-width: 1000px) {
	padding: 35px 15px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	background: white; 
	padding: 5px 5px;
	text-align: center;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
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
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;
