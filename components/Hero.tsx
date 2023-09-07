import styled from "styled-components";

<<<<<<< Updated upstream
//Components
import ScrollPrompt from "./ScrollPrompt";
import WorkCircle from "./wrappers/RotatingBadge";
import Heading from "./Heading";

//Fonts
import BigRibbon from "./BigRibbon";

const Hero = () => {
	const marqueeContent = "UI Design Web Design Branding Frontend Dev";

	return (
		<Container>
			<Headline>
				<Strapline>
					I&apos;m Aaron <span>&#128075;</span>
				</Strapline>
				<Heading headingLevel="h1">
					I help build visual frontend experiences.
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
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	padding: 2rem var(--sitePadding) 25vh var(--sitePadding);
`;

const Headline = styled.div`
	position: relative;
	padding: 3rem 0 0 0;
	max-width: 100%;
	text-align: left;
	margin: auto 0;
	@media screen and (max-width: 768px) {
		text-align: center;
	}
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
	color: var(--pink);
	padding-left: 3px;
	& span {
		-webkit-filter: hue-rotate(-75deg);
		filter: hue-rotate(-75deg);
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
	height: 25vh;
	width: 100%;
	display: grid;
	place-items: center;
	@media screen and (max-width: 768px) {
		bottom: 7rem;
	}
`;

=======
type Props = {
	children: React.ReactNode;
	customHeight?: string;
};
type ContainerProps = {
	$height?: string;
};

const Hero = ({ children, customHeight }: Props) => {
	return <Container $height={customHeight}>{children}</Container>;
};

const Container = styled.section<ContainerProps>`
	height: ${({ $height }) => ($height ? $height : "100svh")};
	position: relative;
	padding: 0 7.5%;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	gap: 5%;
	& h1 {
		text-transform: uppercase;
		font-weight: 800;
		line-height: clamp(55px, 8vw, 100px);

		word-wrap: balance;
		@media only screen and (max-width: 378px) {
			font-size: clamp(45px, 6vw, 110px);
		}
		@media only screen and (min-width: 379px) {
			font-size: clamp(50px, 8vw, 110px);
		}
	}
	@media only screen and (min-width: 1200px) {
		padding: 0 7.5%;
	}
`;

>>>>>>> Stashed changes
export default Hero;
