import styled from "styled-components";
import { motion } from "framer-motion";

const ScrollPrompt = () => {
	const dotAnimation = {
		animate: {
			y: [2, 42],
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

const Container = styled.div`
	width: 10px;
	border-radius: 10px;
	background-color: var(--green);
	height: 50px;
	padding: 1px;
`;

const Dot = styled(motion.div)`
	background-color: var(--primaryBackground);
	width: 4px;
	aspect-ratio: 1/1;
	border-radius: 100%;
	margin: auto;
`;

export default ScrollPrompt;
