import styled from "styled-components";
import { motion } from "framer-motion";

//Components
import ScrollPrompt from "@components/ScrollPrompt";
import WorkCircle from "@components/wrappers/RotatingBadge";
import Heading from "@components/Heading";
import BigRibbon from "@components/BigRibbon";

// Framer Const
import { fadeInUpMotionVariants } from "@constants/FramerConstants";

const Hero = () => {
	const marqueeContent = "UI - Web Design - Branding - Frontend Dev - ";

	return (
		<Container>
			<Headline>
				<PreTitle {...fadeInUpMotionVariants}>
					I&apos;m Aaron <span>&#128075;</span>
				</PreTitle>
				<Heading headingLevel="h1">I help create frontend experiences.</Heading>
			</Headline>
			<PromptContainer>
				<WorkCircle>
					<ScrollPrompt />
				</WorkCircle>
			</PromptContainer>
			<BigRibbon content={marqueeContent} />
		</Container>
	);
};

const Container = styled.section`
	display: flex;
	height: 100vh;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	max-width: 1200px;
	margin: auto;
	padding: calc(var(--headerH) + 2rem) var(--sitePadding) 0 var(--sitePadding);
`;

const Headline = styled.div`
	position: relative;
	padding: 3rem 0 0 0;
	max-width: 100%;
	@media screen and (min-width: 768px) {
		max-width: 50vw;
		margin: 0 0 5rem 0;
	}
`;

const PreTitle = styled(motion.div)`
	text-transform: uppercase;
	font-weight: 300;

	justify-content: center;
	width: 100%;
	align-items: center;
	color: var(--white);
	padding-left: 3px;
	& span {
		-webkit-filter: grayscale(100%);
		filter: grayscale(100%);
	}
`;

const PromptContainer = styled.div`
	position: absolute;
	bottom: 7rem;
	right: 0;
	align-self: center;
	justify-content: center;
	align-items: center;
	display: flex;
	height: 250px;
	width: 100%;
	display: grid;
	place-items: center;
	@media screen and (max-width: 768px) {
		bottom: 7rem;
	}
`;

export default Hero;
