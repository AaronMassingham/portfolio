import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styled from "styled-components";

//Fonts
import { ShrikhandFont } from "@utils/Fonts";

//Hooks
import { useContainerDimensions } from "@lib/useContainerDimensions";

//Framer Motion Variants
import { bigRibbonVariants } from "@constants/FramerConstants";

const BigRibbon = ({ content }: ContentProps) => {
	const containerRef = useRef(null);

	const ref = useRef(null);
	const isInView = useInView(ref);

	const { width } = useContainerDimensions(containerRef);

	//Calculate duration of marquee based on it's overall width
	const calculatedDuration = width / 100;

	const calculatedTransitionValues = {
		duration: calculatedDuration,
		repeat: Infinity,
		ease: "linear",
	};

	var newArrayFromContent = `${content} ${content}`;

	const variants = {
		hidden: {
			x: 0,
		},
		visible: {
			x: [0, -width],
			transition: calculatedTransitionValues,
		},
	};

	return (
		<Container {...bigRibbonVariants} ref={ref}>
			<LoopContainer
				variants={variants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
			>
				<Content ref={containerRef}>
					<Text className={`${ShrikhandFont.className} strokedLightBg`}>
						{newArrayFromContent}
					</Text>
				</Content>
				<ContentAlt offset={width} aria-hidden="true">
					<Text className={`${ShrikhandFont.className} strokedLightBg`}>
						{newArrayFromContent}
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
	right: 0;
	position: absolute;
	bottom: 0;
	height: 150px;

	overflow: hidden;
	@media screen and (min-width: 768px) {
		height: 250px;
	}
`;
const LoopContainer = styled(motion.div)`
	width: auto;
	position: relative;
	font-size: 175px;
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

const Content = styled.div`
	height: 150px;
	width: max-content;
	white-space: nowrap;
	line-height: 1;
	@media screen and (min-width: 768px) {
		height: 250px;
	}
`;
const ContentAlt = styled(Content)<ContentAltProps>`
	width: 100%;
	position: absolute;
	right: ${(props) => (props.offset ? `-${props.offset}px` : "")};
`;

export default BigRibbon;
