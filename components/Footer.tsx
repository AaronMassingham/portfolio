import styled from "styled-components";

//Components
import BlockQuote from "./blocks/BlockQuote";
import Heading from "./Heading";

const Footer = () => {
	return (
		<>
			<Container>
				<SectionTitle>
					<BlockQuote
						title={<Heading headingLevel="h2" children="Reach Out" />}
					>
						Starting an exciting project
						<br />
						and need a hand? I&apos;m your guy.
					</BlockQuote>
				</SectionTitle>
				<SectionTitleExtended>
					<BlockQuote
						title={<Heading headingLevel="h2" children="Reach Out" />}
					>
						Contact details here
						<br />
						<br />
					</BlockQuote>
				</SectionTitleExtended>
			</Container>
		</>
	);
};

const Container = styled.div`
	width: stretch;
	transform: translateY(-var(--borderWidth));
	height: 200vh;
	place-self: end;

	position: relative;
`;

const SectionTitle = styled.section`
	z-index: 1;
	width: 100%;
	height: 200vh;

	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	margin: 0 0 -200vh 0;

	& > div {
		background-color: var(--primaryBackground);
		position: sticky;
		top: calc(var(--headerH) - 4px);
		height: calc(100vh - var(--headerH));
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	& div > * {
		margin: 0 auto;
		text-align: center;
		padding: 1rem 0;
	}
`;

const SectionTitleExtended = styled(SectionTitle)`
	background: var(--pink);
	position: absolute;
	bottom: 0;
	height: 60vh;

	top: unset;
	z-index: 10;
	clip-path: inset(0 0 0 0);

	margin: 0;
	& > div {
		background-color: transparent;
		position: fixed;
		color: var(--primaryBackground);
	}
	& h2,
	p {
		color: var(--primaryBackground);
	}
`;

export default Footer;
