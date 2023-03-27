import styled from "styled-components";
import { motion } from "framer-motion";

//Components
import ScrollPrompt from "@components/ScrollPrompt";
import WorkCircle from "@components/wrappers/RotatingBadge";
import Heading from "@components/Heading";
import BigRibbon from "@components/BigRibbon";

const Hero = () => {
	const marqueeContent = "UI Design Web Design Branding Frontend Dev";

	return (
		<Container>
			<Headline
				initial={{ opacity: 0.1 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
			>
				<PreTitle>
					I&apos;m Aaron <span aria-hidden="true">&#128075;</span>
				</PreTitle>
				<Heading headingLevel="h1">
					I Help Create
					<br />
					<span style={{ color: "var(--green)" }}>Visual Web Based</span>
					<br />
					Experiences.
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

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;

	max-width: 1200px;
	margin: auto;
	padding: var(--headerH) var(--sitePadding) 7rem var(--sitePadding);
`;

const Headline = styled(motion.div)`
	position: relative;
	height: calc(100% - 150px);

	@media screen and (min-width: 768px) {
		height: calc(100% - 250px);
	}
`;

const PreTitle = styled.div`
	margin-bottom: 1rem;
	color: var(--white);
	font-size: var(--fs-sm);
	font-weight: 800;
	text-transform: uppercase;
	padding-left: 0.2rem;
	& span {
		-webkit-filter: grayscale(100%);
		filter: grayscale(100%);
	}
`;

const PromptContainer = styled.div`
	position: absolute;
	left: 0;
	bottom: 7rem;
	width: 100%;
	display: grid;
	place-items: center;
	@media screen and (min-width: 768px) {
		bottom: 7rem;
	}
`;

export default Hero;
