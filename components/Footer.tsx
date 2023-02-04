import styled from "styled-components";

//Components
import Social from "./Social";

const Footer = () => {
	return (
		<Container>
			<Social />
		</Container>
	);
};

const Container = styled.div`
	position: fixed;
	bottom: 2rem;
	left: 2rem;
`;

export default Footer;
