import styled from "styled-components";
import { motion } from "framer-motion";
import useMediaQuery from "@lib/useMediaQuery";

//Framer Motion Variants
import {
	deviceMotionVariants,
	deviceMotionChildVariants,
} from "@constants/FramerConstants";

export default function DeviceFrame({ children, deviceType }: Props) {
	const isMobile = useMediaQuery();
	return (
		<Frame type={deviceType} {...deviceMotionVariants}>
			<Content {...deviceMotionChildVariants}>{children}</Content>
		</Frame>
	);
}

type Props = {
	children: React.ReactNode;
	deviceType?: "landscape" | "portrait";
	elementIndex?: number;
};

type FrameProps = {
	type?: string;
};

const Frame = styled(motion.div)<FrameProps>`
	background-color: var(--primaryBackground);
	border-radius: 1.5rem;
	padding: 0.5rem;

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
					width:calc(100% - var(--sitePadding));
					
					@media screen and (min-width: 768px) {
						width:100%;
						max-width:350px;
						margin:auto;
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
	overflow: clip;
`;
