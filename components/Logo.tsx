import styled from "styled-components";
import { motion } from "framer-motion";

const transition = {
	staggerChildren: 0.25,
};

const variants = {
	hidden: {
		opacity: 0,
		transition: transition,
	},
	visible: {
		opacity: 1,
		transition: transition,
	},
};
const childVariants = {
	hidden: {
		opacity: 0,
		pathLength: 0,
		transition: {
			ease: "easeInOut",
			duration: 0.25,
		},
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		transition: {
			ease: "easeInOut",
			duration: 0.25,
		},
	},
};

const Logo = () => {
	return (
		<Container variants={variants} initial="hidden" animate="visible">
			<Svg viewBox="0 0 60 60">
				<circle cx="30" cy="30" r="30" />
				<motion.path
					variants={childVariants}
					d="M53.7,17.8H11.9c-1,0-2,0.6-2.4,1.6L3.6,34.8"
				/>
				<motion.polyline
					variants={childVariants}
					points="56.6,31.7 12.3,31.7 14.3,25.9 16.8,31.7"
				/>
				<motion.path
					variants={childVariants}
					d="M27.9,56.7l-7.7-17.5c-0.4-0.9-1.3-1.5-2.3-1.5h-5.7c-1,0-2,0.6-2.3,1.6l-2.2,5.4"
				/>
			</Svg>
		</Container>
	);
};

const Container = styled(motion.div)`
	height: 4rem;
	border-radius: 100%;
	background-color: var(--primaryBackground);
`;

const Svg = styled.svg`
	height: 100%;
	circle {
		fill: none;
	}
	path,
	polyline {
		fill: none;
		stroke: var(--white);
		stroke-width: 2px;
		stroke-linecap: round;
		stroke-miterlimit: 10;
	}
`;

export default Logo;
