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
	height: calc(100vh - (8rem + 8px));
`;
const Container = styled.div`
	position: fixed;
	bottom: 0;
	height: 8rem;
	right: 2rem;
`;

export default Footer;
