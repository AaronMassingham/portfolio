import { motion } from "framer-motion";
import styled from "styled-components";

const Drip = () => {
	const randomisedDelay = Math.random() * 5;
	console.log(randomisedDelay);

	const variants = {
		animate: {
			y: [-10, 0, -10],
			transition: {
				duration: 4,
				ease: "easeInOut",
				repeat: Infinity,
				delay: randomisedDelay,
			},
		},
	};

	const childVariants = {
		animate: {
			y: [0, 50],
			scale: [1, 0],
			transition: {
				duration: 1,
				ease: "easeInOut",
				repeat: Infinity,
				delay: randomisedDelay + 2,
				repeatDelay: 3,
			},
		},
	};
	return (
		<Main variants={variants} animate="animate">
			<Drop variants={childVariants} animate="animate" />
		</Main>
	);
};

const Main = styled(motion.div)`
	width: 7px;
	height: 17px;
	background: var(--darkestGrey);
	transform-origin: top;
	position: relative;
	&:before {
		content: " ";
		width: 100%;
		height: 7px;
		aspect-ration: 1/1;
		background: var(--darkestGrey);
		border-radius: 100%;
		position: absolute;
		left: 0;
		bottom: -3.5px;
	}
`;
const Drop = styled(motion.div)`
	width: 100%;
	height: 7px;
	aspect-ration: 1/1;
	background: var(--darkestGrey);
	border-radius: 100%;
	position: absolute;
	left: 0;
	bottom: -3.5px;
`;

export default Drip;
