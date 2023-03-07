import styled from "styled-components";

//Components
import Social from "./Social";
import StickyTitleBlock from "./StickyTitleBlock";

//Fonts
import { ShrikhandFont } from "../utils/FancyFont";

const Footer = () => {
	return (
		<>
			<Container>
				<SocialContainer>
					<Social />
				</SocialContainer>

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
const Spacer = styled.div`
	width: 100%;
	height: calc(100vh - (var(--headerH) + var(--borderWidth)));
	display: grid;
`;
const SocialContainer = styled.div`
	position: fixed;
	z-index: 10;
	bottom: 0;
	right: 2rem;
`;

export default Footer;
