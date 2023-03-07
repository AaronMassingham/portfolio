import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";

//Components
import ScrollPrompt from "./ScrollPrompt";
import WorkCircle from "./wrappers/RotatingBadge";

//Fonts
import { ShrikhandFont } from "../utils/FancyFont";

const Hero = () => {
	return (
		<Container>
			<Headline>
				<Strapline>I&apos;m Aaron</Strapline>
				<h1 className={`${ShrikhandFont.className} strokedLightkBg`}>
					I help create
					<br />
					frontend
					<br />
					experiences.
				</h1>
			</Headline>
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
`;

const Headline = styled.div`
	position: relative;
	padding: 3rem 2rem 2rem 2rem;
	max-width: 100%;
	text-align: center;
	margin: auto;
	@media only screen and (min-width: 768px) {
		max-width: 75%;
	}
	& h1 {
		font-size: var(--fs-xlDisplay);
	}
`;

const Strapline = styled.div`
	text-transform: uppercase;
	font-weight: 500;
	font-size: 1.5rem;
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	justify-content: center;
	width: 100%;
	align-items: center;
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
