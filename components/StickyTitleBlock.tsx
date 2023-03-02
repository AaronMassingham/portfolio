import styled from "styled-components";

import BlockQuote from "./blocks/BlockQuote";

const StickyTitleBlock = ({ title, children }: Props) => {
	return (
		<Container>
			<Sticky>
				<div>
					<BlockQuote title={title} />
				</div>
			</Sticky>
			<Content>{children && children}</Content>
		</Container>
	);
};

type Props = {
	title: string;

	children?: React.ReactNode;
};

const Container = styled.section`
	height: 150vh;
	display: grid;
	@media screen and (min-width: 768px) {
		min-height: 100vh;
	}
`;

const Sticky = styled.div`
	height: 10vh;
	width: 100%;
	position: sticky;
	top: var(--headerH);
	background: var(--primaryBackground);
	margin-bottom: 10vh;
	border-bottom: var(--borderWidth) solid var(--darkGrey);
	z-index: 2;
	& > div {
		height: 20vh;
		display: flex;
		justify-content: center;
		align-items: center;
		@media screen and (min-width: 768px) {
			height: 40vh;
		}
		& h2 {
			position: relative;
			&:before {
				position: absolute;
				top: -30%;
				left: -20%;
				width: 140%;
				height: 140%;
				background: var(--primaryBackground);
				content: " ";
				z-index: -1;
				border-radius: 5rem;
				border: var(--border);
			}
		}
	}
	@media screen and (min-width: 768px) {
		height: 10vh;
		& > div {
			height: 20vh;
		}
	}
`;

const Content = styled.div`
	width: 100%;
	place-items: center;
	padding: 0 var(--sitePadding);
`;

export default StickyTitleBlock;
