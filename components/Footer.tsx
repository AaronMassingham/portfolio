import styled from "styled-components";

//Components
import Social from "./Social";

const Footer = () => {
	return (
		<Spacer>
			<Container>
				<Social />
			</Container>
		</Spacer>
	);
};

const Spacer = styled.div`
	width: 100%;
	height: calc(100vh - (8rem + var(--borderWidth)));
`;
const Container = styled.div`
	position: fixed;
	z-index: 10;
	bottom: 0;
	right: 2rem;
`;

export default Footer;
