import GradientDefs from "./GradientDefs";
import { motion } from "framer-motion";
import styled from "styled-components";

type MotionProps = {
	animate?: Partial<unknown>;
	transition?: Partial<unknown>;
};

type Props = {
	children: React.ReactNode;
	defs: React.ReactNode;
	height: string;
	width: string;
} & MotionProps;

const SvgWrapper = ({ children, defs, height, width, animate, transition }: Props) => {
	return (
		<Container
			animate={animate}
			transition={transition}
			width={height}
			height={width}
			viewBox="0 0 200 200"
		>
			<defs>
				<GradientDefs />
				{defs}
			</defs>
			{children}
			{/* <rect clipPath="url(#triangleClip)" width="100%" height="100%" fill="url(#gradient)" /> */}
		</Container>
	);
};

const Container = styled(motion.svg)`
	defs > * {
		transform-origin: center center;
	}
`;

export default SvgWrapper;
