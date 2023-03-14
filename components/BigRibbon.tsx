import React, { useRef } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

//Fonts
import { ShrikhandFont } from "@utils/Fonts";

//Hooks
import { useContainerDimensions } from "@lib/useContainerDimensions";

//Framer Variants
import {
	ribbonVariants,
	ribbonChildVariants,
} from "@constants/FramerConstants";

const BigRibbon = ({ content }: ContentProps) => {
	const containerRef = useRef(null);
	const { width } = useContainerDimensions(containerRef);

	//Calculate duration of marquee based on it's overall width
	const calculatedDuration = width / 100;

	const viewportOptions = {
		margin: "0% 10% 0% 10%",
	};

	const calculatedTransitionValues = {
		duration: calculatedDuration,
		repeat: Infinity,
		ease: "linear",
	};

	var newArrayFromContent = `${content} ${content}`.split("");
	const mappedLetters = newArrayFromContent.map((item, index) => (
		<Letter variants={ribbonChildVariants} key={index}>
			{item}
		</Letter>
	));

	return (
		<Container
			variants={ribbonVariants}
			initial="hidden"
			whileInView="animate"
			viewport={viewportOptions}
		>
			<LoopContainer
				animate={{ x: [0, -width] }}
				transition={calculatedTransitionValues}
			>
				<Content ref={containerRef}>
					<Text className={`${ShrikhandFont.className} strokedLightBg`}>
						{mappedLetters}
					</Text>
				</Content>
				<ContentAlt offset={width} aria-hidden="true">
					<Text className={`${ShrikhandFont.className} strokedLightBg`}>
						{mappedLetters}
					</Text>
				</ContentAlt>
			</LoopContainer>
		</Container>
	);
};

type ContentProps = {
	content: string;
};

type ContentAltProps = {
	offset: number;
};

const Container = styled(motion.div)`
	width: 100vw;
	right: 0;
	height: 150px;
	position: absolute;
	bottom: 0;
	overflow: hidden;
	@media screen and (min-width: 768px) {
		height: 300px;
	}
`;
const LoopContainer = styled(motion.div)`
	width: auto;
	position: relative;
	font-size: 150px;
	display: flex;
	@media screen and (min-width: 768px) {
		font-size: 300px;
	}
`;

const Text = styled.div`
	opacity: 0.1;
	display: inline;
	text-transform: uppercase;
	padding: 0 2rem;
	display: flex;
	flex-direction: row;
`;

const Letter = styled(motion.span)`
	overflow: visible;
	white-space: pre;
`;

const Content = styled.div`
	height: 300px;
	width: max-content;
	white-space: nowrap;
	line-height: 1;
`;
const ContentAlt = styled(Content)<ContentAltProps>`
	width: 100%;
	position: absolute;
	right: ${(props) => (props.offset ? `-${props.offset}px` : "")};
`;

export default BigRibbon;
