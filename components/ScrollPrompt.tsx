import styled from "styled-components";
import { motion } from "framer-motion";

const ScrollPrompt = () => {
	const dotAnimation = {
		animate: {
			y: [2, 38],
		},
	};

	return (
		<Container>
			<Dot
				variants={dotAnimation}
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
	width: 10px;
	border-radius: 10px;
	border: 2px solid var(--primaryBackground);
	height: 50px;
	padding: 1px;
`;
const Dot = styled(motion.div)`
	background-color: var(--primaryBackground);
	width: 4px;
	aspect-ratio: 1/1;
	height: auto;
	border-radius: 100%;
	margin: auto;
`;

export default ScrollPrompt;
