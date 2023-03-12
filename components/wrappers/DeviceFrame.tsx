import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

const DeviceFrame = ({ children, deviceType }: Props) => {
	return (
		<Frame
			deviceType={deviceType}
			initial={{ opacity: 0 }}
			whileInView={{
				opacity: 1,
			}}
			viewport={{ margin: "0% 0% -30% 0%" }}
			transition={{
				duration: 1,
				ease: [0.25, 0.85, 0.19, 1],
			}}
		>
			<Content>{children}</Content>
		</Frame>
	);
};

type Props = {
	children: React.ReactNode;
	deviceType?: "landscape" | "portrait";
};

const Frame = styled(motion.div)<Props>`
	position: relative;
	height: auto;
	background-color: var(--primaryBackground);
	border-radius: 2rem;
	padding: 0.75rem;
	box-shadow: var(--shadow);

	${(props) => {
		switch (props.deviceType) {
			case "landscape":
				return `
					aspect-ratio: 1360/768;
					width: 100%;
                `;
			case "portrait":
				return `
					aspect-ratio: 7 / 13;
					width: min(350px, 100%);
                `;
		}
	}}
`;
const Content = styled(motion.div)`
	border-radius: 1.25rem;
	width: 100%;
	height: 100%;
	background-color: var(--darkestGrey);
	position: relative;
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
		border: 1px solid var(--pink);
		border-radius: 1rem;
	}
	&:after {
		width: 75px;
	}
`;

export default DeviceFrame;
