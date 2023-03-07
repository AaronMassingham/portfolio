import styled from "styled-components";

//Components
import StickyTitleBlock from "./StickyTitleBlock";

//Fonts
import { ShrikhandFont } from "../utils/FancyFont";

const Footer = () => {
	return (
		<>
			<Container>
				<StickyTitleBlock title="Let's talk!">
					<h3 className={`${ShrikhandFont.className} strokedLightkBg`}>
						Do I fit the bill?
					</h3>
					<a href="mailto:aaron.massingham@outlook.com">Email Me</a>
				</StickyTitleBlock>
			</Container>
		</>
	);
};

const Container = styled.div`
	background: var(--darkGrey);
	width: stretch;
	margin: 0 var(--borderWidth) 0 var(--borderWidth);
	transform: translateY(-var(--borderWidth));
	height: 100vh;
	place-self: end;

	position: relative;
`;

export default Footer;
