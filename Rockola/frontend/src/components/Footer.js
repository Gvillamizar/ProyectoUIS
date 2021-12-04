import React from "react";
import {
Box,
Container,
Row,
Column,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "0px" }}>
		La Rockola.com
	</h1>
	<Container>
		<Row>
		<Column>
        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.LaRockola.com"> LaRockola.com </a>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
