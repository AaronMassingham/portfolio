import styled from "styled-components";
import { motion } from "framer-motion";

const ScrollPrompt = () => {
	const variant = {
		animate: {
			y: [0, 42],
			opacity: [0, 1],
			scale: [0.8, 1],
		},
	};

	return (
		<Container>
			<Dot
				variants={variant}
				animate="animate"
				transition={{
					duration: 1,
					repeat: Infinity,
					ease: "easeInOut",
					repeatType: "mirror",
				}}
			/>
		</Container>
	);
};

const Container = styled(motion.div)`
	width: 8px;
	border-radius: 4px;
	background: var(--darkestGrey);
	height: 50px;
	padding: 2px;
`;
const Dot = styled(motion.div)`
	background: var(--primaryBackground);
	width: 100%;
	aspect-ratio: 1/1;
	height: auto;
	border-radius: 100%;
`;

export default ScrollPrompt;
