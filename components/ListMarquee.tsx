import styled from "styled-components";
import { motion } from "framer-motion";

//Framer Motion Variants
import {
	listMarqueeVariants,
	listMarqueeChildVariants,
} from "@constants/FramerConstants";

const ListMarquee = ({ content, borderColor }: ContentProps) => {
	const mappedData = content.map((item, index) => (
		<Text $color={borderColor} key={index}>
			{item}
		</Text>
	));

	return (
		<Marquee $color={borderColor} {...listMarqueeVariants}>
			<Track {...listMarqueeChildVariants}>{mappedData}</Track>
			<Track aria-hidden="true" {...listMarqueeChildVariants}>
				{mappedData}
			</Track>
		</Marquee>
	);
};

type ContentProps = {
	content: string[];
	borderColor?: string;
};

type SetColors = {
	$color?: string;
};

const Text = styled.div<SetColors>`
	padding: 0 1rem;
	font-weight: 200;
	color: ${(props) => (props.$color ? props.$color : "var(--white)")};
`;

const Marquee = styled(motion.div)<SetColors>`
	position: relative;
	width: 175px;
	overflow: clip;
	background-color: var(--primaryBackground);
	text-transform: uppercase;
	border-radius: 100px;
	height: 2rem;
	display: flex;
	align-items: center;
	font-size: 0.9rem;
	font-weight: 200;
	border: 2px solid ${(props) => (props.$color ? props.$color : "unset")};
	@media screen and (min-width: 400px) {
		width: 250px;
	}
	@media screen and (min-width: 768px) {
		width: 300px;
		font-size: initial;
	}
`;

const Track = styled(motion.div)`
	position: absolute;
	white-space: nowrap;
	display: flex;
	right: -250px;
	@media screen and (min-width: 768px) {
		right: -300px;
	}
`;

export default ListMarquee;
