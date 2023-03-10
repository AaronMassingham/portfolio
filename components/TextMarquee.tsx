import styled from "styled-components";
import { motion } from "framer-motion";

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
			<Track variants={trackVariants} children={mappedData} />
			<Track
				aria-hidden="true"
				variants={trackVariants}
				children={mappedData}
			/>
		</Marquee>
	);
};

const Text = styled(motion.div)`
	padding: 0 1rem;
	opacity: 0.5;
`;

const Marquee = styled(motion.div)`
	position: relative;
	width: 250px;
	overflow: clip;
	background-color: var(--primaryBackground);
	color: var(--white);
	border: 2px solid var(--white);
	text-transform: uppercase;
	border-radius: 100px;
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

	@media screen and (min-width: 768px) {
		width: 300px;
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
