import styled from "styled-components";
import { motion } from "framer-motion";

const DeviceFrame = ({ image, orientation }: Props) => {
	console.log(orientation);
	return (
		<Frame>
			<FrameDetails />
			<Content>{image}</Content>
		</Frame>
	);
};

type Props = {
	image: string;
	orientation: string;
};

const Frame = styled(motion.div)`
	position: relative;
	width: 100%;
	height: auto;
	background: black;
	margin: auto;
	border-radius: 2rem;
	aspect-ratio: 7 / 12;
	max-width: 275px;
	padding: 1.75rem 0.75rem 0.75rem 0.75rem;
	-webkit-box-shadow: 0px 7px 15px -4px rgba(0, 0, 0, 0.1);
	box-shadow: 0px 7px 15px -4px rgba(0, 0, 0, 0.1);
	@media (min-width: 1200px) {
		max-width: 300px;
	}
`;
const Content = styled(motion.div)`
	border-radius: 1.25rem;
	width: 100%;
	height: 100%;
	border: 1px solid #ccc;
	background: #ccc;
`;

const FrameDetails = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 1.75rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	&:before,
	:after {
		height: 5px;
		width: 5px;
		content: " ";
		background: #ccc;
		border-radius: 1rem;
	}
	&:after {
		width: 75px;
	}
`;

export default DeviceFrame;
