import styled from "styled-components";

//Components
import ScrollPrompt from "@components/ScrollPrompt";
import WorkCircle from "@components/wrappers/RotatingBadge";
import Heading from "@components/Heading";
import BigRibbon from "@components/BigRibbon";

const Hero = () => {
	const marqueeContent = "UI . Web Design . Branding . Frontend Dev .";

	return (
		<Container>
			<Headline>
				<PreTitle>
					I&apos;m Aaron <span>&#128075;</span>
				</PreTitle>
				<Heading headingLevel="h2">I help create frontend experiences.</Heading>
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
	padding: calc(var(--headerH) + 2rem) 2rem 0 2rem;
`;

const Headline = styled.div`
	position: relative;
	padding: 3rem 0 0 0;
	margin: 0 0 5rem 0;
	max-width: 100%;
	@media screen and (min-width: 768px) {
		max-width: 50vw;
	}
`;

const PreTitle = styled.div`
	text-transform: uppercase;
	font-weight: 300;
	font-size: 1.5rem;
	justify-content: center;
	width: 100%;
	align-items: center;
	color: var(--pink);
	padding-left: 3px;
	& span {
		-webkit-filter: grayscale(100%);
		filter: grayscale(100%);
	}
`;

const PromptContainer = styled.div`
	position: absolute;
	bottom: 250px;
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
