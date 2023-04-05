import styled from "styled-components";
import { motion } from "framer-motion";

//Framer Motion Variants
import {
	deviceMotionVariants,
	deviceMotionChildVariants,
} from "@constants/FramerConstants";

export default function DeviceFrame({
	children,
	deviceType,
	background,
}: Props) {
	return (
		<Frame {...deviceMotionVariants}>
			<Content
				$bgColor={background}
				type={deviceType}
				{...deviceMotionChildVariants}
			>
				{children}
			</Content>
		</Frame>
	);
}

type Props = {
	children: React.ReactNode;
	deviceType?: "landscape" | "portrait" | "logo";
	background?: string;
	elementIndex?: number;
};

type FrameProps = {
	type?: string;
	$bgColor?: string;
};

const Frame = styled(motion.div)`
	background-color: var(--primaryBackground);
	padding: 0.5rem;
	position: relative;
	z-index: 2;
`;
const Content = styled(motion.div)<FrameProps>`
	width: 100%;
	height: 100%;
	background-color: ${(props) =>
		props.$bgColor ? props.$bgColor : "var(--primaryBackground)"};
	position: relative;
	clip-path: inset(0 0% 0 0 round 1rem);
	overflow: clip;
	${(props) => {
		switch (props.type) {
			case "landscape":
				return `
					aspect-ratio: 1360/768;
					width: 100%;
                `;
			case "portrait":
				return `
					aspect-ratio: 900 / 1670;
					width:auto;
					height:auto;
					@media screen and (min-width: 768px) {
						width:100%;
						margin:auto;
					}
                `;
			case "logo":
				return `
					aspect-ratio: 2/1;
					width: 100%;
				`;
		}
	}}
`;
