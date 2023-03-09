import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import styled from "styled-components";
import { ShrikhandFont } from "@components/utils/FancyFont";

import { useContainerDimensions } from "@components/lib/useContainerDimensions";

interface ContentProps {
	content: string;
}

const BigRibbon = ({ content }: ContentProps) => {
	const containerRef = useRef(null);
	const { width } = useContainerDimensions(containerRef);

	const variants = {
		hidden: {
			opacity: 0,
			y: -290,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				when: "beforeChildren",
				staggerChildren: 0.05,
			},
		},
	};
	const childVariants = {
		hidden: {
			opacity: 0,
			y: 290,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				ease: "easeOut",
			},
		},
	};

	const calculatedDuration = width / 100;

	var array = `${content} ${content}`;

	var arrayNew = array.split("");

	const mappedData = arrayNew.map((item, index) => (
		<motion.div
			style={{
				overflow: "visible",
				whiteSpace: "pre",
			}}
			variants={childVariants}
			key={index}
		>
			{item}
		</motion.div>
	));

	console.log(mappedData);

	return (
		<Container
			variants={variants}
			initial="hidden"
			whileInView="animate"
			viewport={{ margin: "0% 10% 0% 10%" }}
		>
			<LoopContainer
				animate={{ x: [0, -width] }}
				transition={{
					duration: calculatedDuration,
					repeat: Infinity,
					ease: "linear",
				}}
			>
				<Content ref={containerRef}>
					<Text className={`${ShrikhandFont.className} strokedLightBg`}>
						{mappedData}
					</Text>
				</Content>
				<ContentAlt offset={width} aria-hidden="true">
					<Text className={`${ShrikhandFont.className} strokedLightBg`}>
						{mappedData}
					</Text>
				</ContentAlt>
			</LoopContainer>
		</Container>
	);
};

type ContentAltProps = {
	offset: number;
};

//variants={variants} animate="animate"

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
