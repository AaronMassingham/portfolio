import styled from "styled-components";

const Project = ({ children, staticChildren, background }: Props) => {
	return (
		<Container>
			<Sticky>{children}</Sticky>
			<StaticContent>{staticChildren}</StaticContent>
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

	pointer-events: none;
`;

const StaticContent = styled.div<ContentProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	gap: 5vh;

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
