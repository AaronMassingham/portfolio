import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ContentProps {
	content: string[];
}

const TextMarquee = ({ content }: ContentProps) => {
	const marqueeVariants = {
		animate: {
			transition: {
				staggerChildren: 10,
			},
		},
	};

	let trackVariants = {
		animate: {
			x: ["100%", "-100%"],
			transition: {
				x: {
					repeat: Infinity,
					repeatType: "loop",
					duration: 20,
					ease: "linear",
				},
			},
		},
	};

	const mappedData = content.map((item, index) => (
		<Text key={index}>{item}</Text>
	));

	return (
		<Marquee variants={marqueeVariants} animate="animate">
			<Track variants={trackVariants}>{mappedData}</Track>
			<Track aria-hidden="true" variants={trackVariants}>
				{mappedData}
			</Track>
		</Marquee>
	);
};

const Text = styled(motion.div)`
	padding: 0 2rem;
`;

const Marquee = styled(motion.div)`
	position: relative;
	width: 300px;
	overflow: clip;
	background-color: var(--darkestGrey);
	color: var(--primaryBackground);

	text-transform: uppercase;
	border-radius: 100px;
	margin: 0 auto;
	height: 2rem;
	display: flex;
	align-items: center;
	&:before,
	&:after {
		pointer-events: none;
		top: 0;
		position: absolute;
		width: 2rem;
		height: 100%;
		z-index: 3;
		content: " ";
		@media (min-width: 768px) {
			width: 4rem;
		}
	}
	&:before {
		left: 0;
	}
	&:after {
		right: 0;
	}
`;
const Track = styled(motion.div)`
	position: absolute;
	right: -150px;
	white-space: nowrap;
	display: flex;
	justify-content: center;
`;

export default TextMarquee;
