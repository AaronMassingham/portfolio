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
			<Headline
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
			>
				<PreTitle {...fadeInUpMotionVariants}>
					I&apos;m Aaron <span>&#128075;</span>
				</PreTitle>
				<Heading headingLevel="h1">
					I help create <span style={{ color: "var(--green)" }}>frontend</span>{" "}
					experiences.
				</Heading>
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
	height: 100dvh;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;

	max-width: 1200px;
	margin: auto;
	padding: var(--headerH) var(--sitePadding) 7rem var(--sitePadding);
`;

const Headline = styled(motion.div)`
	position: relative;
	height: calc(100% - 150px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media screen and (max-width: 768px) {
		text-align: center;
	}
	@media screen and (min-width: 768px) {
		max-width: 50vw;
		height: calc(100% - 250px);
	}
`;

const PreTitle = styled(motion.div)`
	margin-bottom: 1rem;
	color: var(--white);
	font-size: var(--fs-sm);
	font-weight: 800;
	& span {
		-webkit-filter: grayscale(100%);
		filter: grayscale(100%);
	}
`;

const PromptContainer = styled.div`
	position: absolute;
	left: 0;
	bottom: 7rem;
	height: 250px;
	width: 100%;
	display: grid;
	place-items: center;
`;

export default Hero;
