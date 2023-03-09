import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import styled from "styled-components";
import { ShrikhandFont } from "@components/utils/FancyFont";

import { useContainerDimensions } from "@components/lib/useContainerDimensions";

interface ContentProps {
	content: string[];
}

const BigRibbon = ({ content }: ContentProps) => {
	const containerRef = useRef(null);
	const { width } = useContainerDimensions(containerRef);

	const calculatedDuration = width / 100;
	console.log(calculatedDuration);

	const mappedData = content.map((item, index) => (
		<Text className={`${ShrikhandFont.className} strokedLightBg`} key={index}>
			{item}
		</Text>
	));

	return (
		<Container>
			<LoopContainer
				animate={{ x: [0, -width] }}
				transition={{
					duration: calculatedDuration,
					repeat: Infinity,
					ease: "linear",
				}}
			>
				<Content ref={containerRef}>{mappedData}</Content>
				<ContentAlt offset={width} aria-hidden="true">
					{mappedData}
				</ContentAlt>
			</LoopContainer>
		</Container>
	);
};

type ContentAltProps = {
	offset: number;
};

//variants={variants} animate="animate"

const Container = styled.div`
	width: 100vw;
	right: 0;
	height: 300px;
	position: absolute;
	bottom: 0;
	overflow: hidden;
`;
const LoopContainer = styled(motion.div)`
	width: 100%;
	position: relative;
	font-size: 300px;
	display: flex;
`;

const Text = styled.div`
	padding: 0 5rem;
	opacity: 0.1;
	display: inline;
	text-transform: uppercase;
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
