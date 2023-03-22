import styled from "styled-components";
import { motion } from "framer-motion";

//Framer Motion Variants
import {
	listMarqueeVariants,
	listMarqueeChildVariants,
} from "@constants/FramerConstants";

const ListMarquee = ({ content }: ContentProps) => {
	const mappedData = content.map((item, index) => (
		<Text key={index}>{item}</Text>
	));

	return (
		<Marquee {...listMarqueeVariants}>
			<Track {...listMarqueeChildVariants}>{mappedData}</Track>
			<Track aria-hidden="true" {...listMarqueeChildVariants}>
				{mappedData}
			</Track>
		</Marquee>
	);
};

type ContentProps = {
	content: string[];
};

const Text = styled(motion.div)`
	padding: 0 1rem;
	opacity: 0.5;
	font-weight: 200;
`;

const Marquee = styled(motion.div)`
	position: relative;
	width: 230px;
	overflow: clip;
	background-color: var(--primaryBackground);
	color: var(--white);
	text-transform: uppercase;
	border-radius: 100px;
	height: 2rem;
	display: flex;
	align-items: center;
	font-size: 0.9rem;
	font-weight: 200;
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
