import styled from "styled-components";
import { motion } from "framer-motion";

const Project = ({ children, staticChildren, color, background }: Props) => {
	return (
		<Container>
			<Sticky>{children}</Sticky>
			<Static>
				<StaticContent $textColor={color} $backgroundColor={background}>
					{staticChildren}
				</StaticContent>
			</Static>
		</Container>
	);
};

type Props = {
	children: React.ReactNode;
	staticChildren: React.ReactNode;
	color: string;
	background: string;
};

type ContentProps = {
	$textColor?: string;
	$backgroundColor?: string;
};

const Container = styled.div`
	height: auto;
	width: 100%;
	display: grid;
	position: relative;
	z-index: 4;

	& > * {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}
`;

const Sticky = styled(motion.div)`
	width: 100%;
	height: 100vh;
	position: sticky;
	top: 0;
	z-index: 3;
	padding: var(--headerH) var(--sitePadding) 2rem;
	pointer-events: none;
	@media screen and (min-width: 768px) {
		padding: var(--headerH) 2rem 2rem;
	}
`;

const Static = styled.div`
	z-index: 2;
	height: auto;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	top: 0;
`;

const StaticContent = styled.div<ContentProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;

	flex-direction: column;
	justify-content: center;
	gap: 5vh;
	background-color: ${(props) =>
		props.$backgroundColor
			? props.$backgroundColor
			: "var(--primaryBackground)"};
	color: ${(props) => (props.$textColor ? props.$textColor : "var(--white)")};
	padding: var(--headerH) var(--sitePadding) var(--headerH);
`;

export default Project;
