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
	height: 100vh;
	display: grid;
	@media screen and (min-width: 768px) {
		min-height: 100vh;
	}
`;

const Sticky = styled.div`
	position: sticky;
	top: 0;
	padding-top: var(--headerH);
	background: var(--primaryBackground);

	border-bottom: var(--borderWidth) solid var(--white);
	z-index: 2;
	& > div {
		height: 20vh;
		display: flex;
		justify-content: center;
		align-items: center;
		@media screen and (min-width: 768px) {
		}
	}
	@media screen and (min-width: 768px) {
		height: 10vh;
		& > div {
			height: 0;
		}
	}
`;

const Content = styled.div`
	width: 100%;
	place-items: center;
	padding: 0 var(--sitePadding);
`;

export default StickyTitleBlock;
