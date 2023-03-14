import styled from "styled-components";
import { motion } from "framer-motion";

import { simpleFadeIn } from "@constants/FramerConstants";

const DeviceFrame = ({ children, deviceType, elementIndex }: Props) => {
	const transitionOptions = {
		duration: 0.75,
		delay: elementIndex ? elementIndex / 5 : 0,
		ease: "easeOut",
	};
	const viewportOptions = { margin: "-10% 0% -10% 0%" };

	return (
		<Frame
			type={deviceType}
			variants={simpleFadeIn}
			initial="hidden"
			whileInView="animate"
			transition={transitionOptions}
			viewport={viewportOptions}
		>
			<Content>{children}</Content>
		</Frame>
	);
};

type Props = {
	children: React.ReactNode;
	deviceType?: "landscape" | "portrait";
	elementIndex?: number;
};

type FrameProps = {
	type?: string;
};

const Frame = styled(motion.div)<FrameProps>`
	position: relative;
	height: auto;
	background-color: var(--primaryBackground);
	border-radius: 1.5rem;
	padding: 0.5rem;
	box-shadow: var(--shadow);

	${(props) => {
		switch (props.type) {
			case "landscape":
				return `
					aspect-ratio: 1360/768;
					width: 100%;
                `;
			case "portrait":
				return `
					aspect-ratio: 7 / 13;
					width: min(350px, 100%);
					margin:auto;
					@media screen and (min-width: 768px) {
						width:100%;
					}
                `;
		}
	}}
`;
const Content = styled(motion.div)`
	border-radius: 1rem;
	width: 100%;
	height: 100%;
	background-color: var(--darkestGrey);
	position: relative;
`;

export default DeviceFrame;
