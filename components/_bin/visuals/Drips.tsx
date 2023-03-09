import { motion } from "framer-motion";
import styled from "styled-components";

//Components
import Drip from "./Drip";

const Drips = ({ color }: Props) => {
	return (
		<Container>
			<Corner color={color} />
			<Drip color={color} />
			<Spacer color={color} />
			<Drip color={color} />
			<Spacer color={color} />
			<Drip color={color} />
			<Corner color={color} />
		</Container>
	);
};

type Props = {
	color?: string;
};

const Corner = styled(motion.div)<Props>`
	width: 7px;
	height: 7px;
	background: ${(props) => (props.color ? props.color : "var(--darkestGrey)")};
	&:first-of-type {
		clip-path: path("M7,7c0-3.9-3.1-7-7-7h0l7,0V7L7,7z");
	}
	&:last-of-type {
		clip-path: path("M0,7c0-3.9,3.1-7,7-7h0L0,0V7L0,7z");
	}
`;
const Container = styled(motion.div)`
	height: 50px;
	width: auto;
	overflow: hidden;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	position: relative;
	pointer-events: none;
`;

const Spacer = styled(motion.div)<Props>`
	width: 7px;
	height: 14px;
	background: ${(props) => (props.color ? props.color : "var(--darkestGrey)")};
	position: relative;
	clip-path: path("M0,0v7c0,0,0-0.1,0-0.1c0-4.5,7-4.5,7,0C7,6.9,7,7,7,7V0H0z");
`;

export default Drips;
