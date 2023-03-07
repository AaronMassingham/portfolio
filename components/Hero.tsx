import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";

//Components
import ScrollPrompt from "./ScrollPrompt";
import WorkCircle from "./wrappers/RotatingBadge";

//Fonts
import { ShrikhandFont } from "../utils/FancyFont";
import TextMarquee from "./TextMarqueeAlt";

const Hero = () => {
	const marqueeContent = [
		"UI Design",
		"Web design",
		"Branding",
		"Frontend Dev",
	];

	return (
		<Container>
			<Headline>
				<Strapline>I&apos;m Aaron</Strapline>
				<h1>I help create visual frontend experiences.</h1>
			</Headline>
			<PromptContainer>
				<WorkCircle>
					<ScrollPrompt />
				</WorkCircle>
			</PromptContainer>
			<TextMarquee content={marqueeContent} />
		</Container>
	);
};

const Container = styled.section`
	display: flex;
	height: 75vh;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	padding: 2rem var(--sitePadding);
`;

const Headline = styled.div`
	position: relative;
	padding: 3rem 0 0 0;
	max-width: 100%;
	text-align: left;
	margin: auto 0;
	max-width: 60%;
`;

const Strapline = styled.div`
	text-transform: uppercase;
	font-weight: 300;
	font-size: 1.5rem;
	position: absolute;
	top: 0;
	left: 0;
	justify-content: center;
	width: 100%;
	align-items: center;
	color: var(--white);
	padding-left: 3px;
	opacity: 0.6;
`;

const PromptContainer = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	align-self: center;
	justify-content: center;
	align-items: center;
	display: flex;
	height: 25vh;
	width: 100%;
	display: grid;
	place-items: center;
`;

export default Hero;
