import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

//Components
import Drip from "./Drip";

const Drips = () => {
	return (
		<Container>
			<Corner />
			<Drip />
			<Spacer />
			<Drip />
			<Spacer />
			<Drip />
			<Corner />
		</Container>
	);
};

const Corner = styled(motion.div)`
	width: 7px;
	height: 7px;
	background: var(--darkestGrey);
	&:before,
	&:after {
		position: absolute;
		z-index: 4;
		background: var(--primaryBackground);
		width: 14px;
		height: 14px;
		content: "";
		top: 0;
		border-radius: 50%;
	}
	&:before {
		top: 0;
		left: -7px;
	}
	&:after {
		top: 0;
		right: -7px;
	}
`;
const Container = styled(motion.div)`
	height: 50px;
	width: auto;
	overflow: hidden;
	display: flex;
	flex-direction: row;
	position: relative;
`;

const Spacer = styled(motion.div)`
	width: 7px;
	height: 14px;
	background: var(--darkestGrey);
	position: relative;
	&:before {
		content: "";
		background: var(--primaryBackground);
		top: 3.5px;
		left: 0;
		width: 7px;
		height: 14px;
		position: absolute;
		border-radius: 7px;
	}
`;

export default Drips;
