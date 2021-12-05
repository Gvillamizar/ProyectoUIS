import React from "react";
import {Box,Container,Row,Column,} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "violet",
				textAlign: "center",
				marginTop: "0px" }}>
		La Rockola.com
	</h1>

	<Container>
		<Row>
		<Column>
        &copy; {new Date().getFullYear()} Copyright: 
		<a href="#"> LaRockola.com </a>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
