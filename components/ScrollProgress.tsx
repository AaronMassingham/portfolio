import { motion } from "framer-motion";
import styled from "styled-components";

type Props = {
	progress: any;
	text?: string;
	index: number;
};

const ScrollProgress = ({ progress, text, index }: Props) => {
	return (
		<Container $index={index}>
			{text && (
				<a href={`#${text}`} className="text">
					{text}
				</a>
			)}
			<motion.div className="progress" style={{ scaleX: progress }} />
		</Container>
	);
};

type ContainerProps = {
	$index: number;
};

const Container = styled.div<ContainerProps>`
width: 100%;
height: 2rem;
position: relative;
display: flex;
flex-direction: column;
overflow-x: hidden;
}
	& .progress {
		height: 1px;
		width: 100%;
		background:
		${(props) =>
			props.$index % 2 !== 0
				? `
			linear-gradient(90deg, var(--turquoise500) 0%, var(--orange500) 100%);
			`
				: `
			linear-gradient(90deg, var(--orange500) 0%, var(--turquoise500) 100%);
			`};
		 
		transform-origin: 0 center;
	}
	& .text {

		width: 100%;
		text-align: center;

		height: 2rem;
	}
	&:before,
	&:after {
		position: absolute;
		width: 3px;
		height: 3px;
		background-color: var(--grey600);
		content: "";
		border-radius: 100%;
		top: .5rem;
	}
	&:after {
		right: -1.5px;
	}
	&:before {
		left: -1.5px;
	}
`;

export default ScrollProgress;
