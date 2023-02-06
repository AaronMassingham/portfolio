import styled from "styled-components";

//Components
import ScrollPrompt from "./ScrollPrompt";
import Drips from "./visuals/Drips";
import WorkCircle from "./wrappers/WorkCircle";

const Hero = () => {
	return (
		<Container>
			<HeroMascot></HeroMascot>
			<Strap>
				I'm Aaron, a creative designer
				<br />
				and web developer.
			</Strap>
			<PromptContainer>
				<WorkCircle>
					<ScrollPrompt />
				</WorkCircle>
			</PromptContainer>
		</Container>
	);
};

const HeroMascot = styled.div`
	@media only screen and (min-width: 768px) {
		width: 100%;
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
const Container = styled.section`
	display: flex;
	height: -webkit-fill-available;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	@media only screen and (min-width: 768px) {
		align-items: flex-start;
		justify-content: space-between;
		flex-direction: column;
	}
`;
const Strap = styled.h1`
	text-align: center;
	color: var(--darkGrey);
	@media only screen and (max-width: 768px) {
		padding-top: 2rem;
	}
	@media only screen and (min-width: 768px) {
		justify-self: flex-end;
		text-align: left;
		height: 8rem;
		display: flex;
		align-items: center;
		margin-bottom: 12rem;
	}
`;
const PromptContainer = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	justify-content: center;
	align-items: center;
	display: flex;
	height: 10rem;
	width: 100%;
	margin-bottom: 2rem;
`;

export default Hero;
