import styled from "styled-components";
import { motion } from "framer-motion";

//Components
import ScrollPrompt from "@components/ScrollPrompt";
import WorkCircle from "@components/wrappers/RotatingBadge";
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
				<h1>
					I Help Create{" "}
					<span style={{ color: "var(--green)" }}>Visual Web Based</span>{" "}
					Experiences.
				</h1>
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
	height: 100svh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	gap: 4rem;
	max-width: 1200px;
	margin: auto;
	@media screen and (max-width: 768px) {
		padding: calc(var(--headerH) + 2rem) var(--sitePadding) 0 var(--sitePadding);
	}
	@media screen and (min-width: 768px) {
		gap: 4rem;
	}
	@media screen and (min-width: 1200px) {
		gap: 6rem;
	}
`;

const Headline = styled(motion.div)`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& h1 {
		font-size: var(--fs-xl);
		@media screen and (min-width: 400px) {
			font-size: var(--fs-xlDisplay);
		}
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
	@media screen and (min-width: 768px) {
		font-size: var(--fs-md);
	}
`;

const PromptContainer = styled.div`
	width: 100%;
	display: grid;
	place-items: center;
`;

export default Hero;
