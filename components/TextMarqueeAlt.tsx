import styled from "styled-components";
import { motion } from "framer-motion";
import { ShrikhandFont } from "@components/utils/FancyFont";

interface ContentProps {
	content: string[];
}

const TextMarquee = ({ content }: ContentProps) => {
	const marqueeVariants = {
		animate: {
			transition: {
				staggerChildren: 75,
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
					duration: 150,
					ease: "linear",
				},
			},
		},
	};

	const mappedData = content.map((item, index) => (
		<Text className={`${ShrikhandFont.className} strokedLightBg`} key={index}>
			{item}
		</Text>
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
	padding: 0 5rem;
	opacity: 0.2;
`;

const Marquee = styled(motion.div)`
	position: absolute;
	bottom: 0;
	left: 0;
	height: 25vh;
	width: 100%;
	text-transform: uppercase;
	margin: 0 auto;
	display: flex;
	align-items: center;
	overflow-x: clip;
	overflow-y: visible;
`;
const Track = styled(motion.div)`
	position: absolute;
	right: -100%;
	white-space: nowrap;
	display: flex;
	justify-content: center;
	font-size: 18vw;
	line-height: 1;
`;

export default TextMarquee;
