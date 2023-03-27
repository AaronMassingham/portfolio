import styled from "styled-components";

const Project = ({ children, staticChildren, background }: Props) => {
	return (
		<Container>
			<Sticky>{children}</Sticky>
			<StaticContent $backgroundColor={background}>
				{staticChildren}
			</StaticContent>
		</Container>
	);
};

type Props = {
	children: React.ReactNode;
	staticChildren: React.ReactNode;
	background: string;
};

type ContentProps = {
	$backgroundColor?: string;
};

const Container = styled.section`
	width: 100%;
	display: grid;
	position: relative;
	z-index: 4;
	& > * {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}
`;

const Sticky = styled.div`
	width: 100%;
	height: 100vh;
	position: sticky;
	top: 0;
	z-index: 3;
	padding: var(--headerH) var(--sitePadding) 1rem;
	pointer-events: none;
	@media screen and (min-width: 768px) {
		padding: var(--headerH) 2rem 1rem;
	}
`;

const StaticContent = styled.div<ContentProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	gap: 5vh;
	background-color: ${(props) =>
		props.$backgroundColor
			? props.$backgroundColor
			: "var(--primaryBackground)"};
	color: var(--primaryBackground);
	padding: var(--headerH) calc(var(--sitePadding) + 1rem) var(--headerH)
		var(--sitePadding);
	@media screen and (min-width: 600px) {
		padding: var(--headerH) var(--sitePadding) var(--headerH)
			calc(var(--sitePadding) + 3rem);
	}
	& > div:first-of-type {
		padding-top: 0;
		padding-bottom: 10vh;
		@media screen and (min-width: 1200px) {
			padding-top: 25vh;
			padding-bottom: 25vh;
		}
	}
`;

export default Project;
