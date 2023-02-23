import styled from "styled-components";

//Components
import ScrollPrompt from "./ScrollPrompt";
import WorkCircle from "./wrappers/RotatingBadge";

//Fonts
import { ShrikhandFont } from "../utils/FancyFont";

const Hero = () => {
	return (
		<Container>
			<Strap>
				<span className={ShrikhandFont.className}>
					I'm Aaron, I create visual experiences.
				</span>
			</Strap>

			<PromptContainer>
				<WorkCircle>
					<ScrollPrompt />
				</WorkCircle>
			</PromptContainer>
		</Container>
	);
};

const Container = styled.section`
	display: flex;
	height: 100vh;
	align-items: flex-start;
	justify-content: space-between;
	flex-direction: column;
	@media only screen and (min-width: 768px) {
	}
`;
const Strap = styled.h1`
	padding: 2rem;
	max-width: 100%;
	text-align: center;
	margin: auto;
	color: var(--primaryBackground);
	font-size: 10vw;
	& > h2 {
		text-align: center;
	}
	@media only screen and (min-width: 768px) {
		max-width: 75%;
		font-size: 8vw;
	}
`;
const PromptContainer = styled.div`
	position: relative;
	bottom: 0;
	right: 0;
	align-self: center;
	justify-content: center;
	align-items: center;
	display: flex;
	height: 10rem;
	width: 10rem;
	margin-bottom: 2rem;
`;

export default Hero;
