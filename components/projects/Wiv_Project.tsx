import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { useScrollDirection } from "react-use-scroll-direction";

//Components
import BlockQuote from "../blocks/BlockQuote";

const Project = ({
	children,
	staticChildren,
	height,
	itemNumber,
	itemsTotal,
}: Props) => {
	const {
		isScrolling,
		isScrollingX,
		isScrollingY,
		isScrollingUp,
		isScrollingDown,
		isScrollingLeft,
		isScrollingRight,
		scrollDirection,
	} = useScrollDirection();

	//Set refs for panel direction
	const leftPanel = useRef(null);
	const rightPanel = useRef(null);

	//Set ref for useInView
	const containerRef = useRef(null);

	//Check the item is FIRST from the data array
	const checkIndexIsFirst = itemNumber === 0;
	//Check the item is LAST from the data array
	const checkIndexIsLast = itemNumber === itemsTotal;

	//Link
	const isInView = useInView(containerRef, {
		margin: checkIndexIsLast ? "-99% 0% 0% 0%" : "0% 0% -99% 0%",
		once: false,
	});

	//Variables for direction and order
	const xPosValue = 1000;

	const transition = {
		duration: 2,
		ease: [0.25, 0.85, 0.19, 1],
	};

	const leftPanelVariants = {
		hidden: { x: -xPosValue, transition: transition },
		forceInView: {
			x: 0,
		},
		enter: {
			x: 0,
			transition: transition,
		},
		exit: {
			x: [0, -xPosValue],
			transition: transition,
		},
	};

	const rightPanelVariants = {
		hidden: { x: xPosValue, transition: transition },
		forceInView: {
			x: 0,
		},
		enter: {
			x: 0,
			transition: transition,
		},
		exit: {
			x: [0, xPosValue],
			transition: transition,
		},
	};

	//Assign variant depending on location within data map
	let elementPosition;
	if (itemNumber === 0) {
		elementPosition = isInView ? "enter" : "hidden";
	} else if (itemNumber === itemsTotal) {
		elementPosition = isInView
			? isScrollingDown && "Down"
				? ""
				: "forceInView"
			: "exit";
	} else {
		elementPosition = "";
	}

	//isInView ? (isScrollingDown && "Down" ? "" : "forceInView") : "exit";

	let setContainerHeight;
	if (itemNumber === 0) {
		setContainerHeight = height * 100 + 200;
	} else if (itemNumber === itemsTotal) {
		setContainerHeight = height * 100 + 300;
	} else {
		setContainerHeight = height * 100 + 100;
	}

	return (
		<Container height={setContainerHeight} ref={containerRef}>
			<Sticky
				ref={leftPanel}
				variants={leftPanelVariants}
				initial={checkIndexIsFirst ? "hidden" : "forceInView"}
				animate={elementPosition}
			>
				<Border isFirst={checkIndexIsFirst ? true : false} />

				<Content>{children}</Content>
			</Sticky>
			<Static
				ref={rightPanel}
				variants={rightPanelVariants}
				initial={checkIndexIsFirst ? "hidden" : "forceInView"}
				animate={elementPosition}
			>
				<StaticContent>{staticChildren}</StaticContent>
				<BorderLeft isFirst={checkIndexIsFirst ? true : false}>
					<div />
				</BorderLeft>
			</Static>
			{checkIndexIsFirst && (
				<SectionTitle>
					<BlockQuote title="Works">
						I find visual solutions, then build them using current web
						technologies.
					</BlockQuote>
				</SectionTitle>
			)}

			{checkIndexIsLast && (
				<SectionTitle>
					<BlockQuote title="Who am I?">
						I've been doing this for over a decade.
					</BlockQuote>
				</SectionTitle>
			)}
		</Container>
	);
};

type BorderProps = {
	isFirst: boolean;
};
type Props = {
	children: React.ReactNode;
	height: number;
	itemNumber?: number;
	itemsTotal?: number;
	numberOfProjectBlocks?: number;
	staticChildren?: React.ReactNode;
};

const Border = styled.div<BorderProps>`
	height: ${(props) =>
		props.isFirst ? "calc(100vh - (var(--headerH) + 5px))" : "100%"};
	transform: translateY(
		${(props) => (props.isFirst ? "calc(var(--headerH) + 5px)" : "")}
	);
	position: absolute;
	top: 0;
	right: -2px;
	width: 100%;
	pointer-events: none;
	overflow: clip;
	width: 4px;
	border-radius: 4px;
	background-color: var(--darkestGrey);
`;

const BorderLeft = styled(Border)`
	left: -2px;
	right: unset;
	height: 100%;
	overflow: clip;
	background-color: unset;
	> div {
		height: ${(props) =>
			props.isFirst ? "calc(100vh - (var(--headerH) + 5px))" : "100%"};
		width: 100%;
		position: sticky;
		top: 0;
		border-radius: 4px;
		background-color: var(--darkestGrey);
	}
`;

const SectionTitle = styled.section`
	position: absolute;
	z-index: 1;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	& > div {
		position: sticky;
		top: 10vh;
		height: 90vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	& div > * {
		margin: 0 auto;
		text-align: center;
		padding: 1rem 0;
	}
`;

const Container = styled(motion.div)<Props>`
	height: ${(props) => (props.height ? props.height + "vh" : "auto")};
	width: 100%;
	display: flex;
	flex-direction: row;
	position: relative;
`;

const Static = styled(motion.div)`
	position: relative;
	z-index: 2;
	height: 100%;
	background-color: var(--primaryBackground);
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	@media screen and (max-width: 768px) {
		position: absolute;
		width: 100%;
		bottom: 0;
		top: 0;
	}

	@media screen and (min-width: 768px) {
		width: 50%;
	}
`;

const Content = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: var(--sitePadding);
`;

const StaticContent = styled(Content)`
	flex-direction: column;
	justify-content: flex-start;
	padding: 100vh var(--sitePadding);
	gap: 5vh;
`;

const Sticky = styled(motion.div)`
	width: 100%;
	height: 100vh;
	position: sticky;
	top: 0;
	z-index: 3;

	@media screen and (max-width: 768px) {
		padding-top: 5rem;
	}
	@media screen and (min-width: 768px) {
		width: calc(50% + var(--borderWidth));
		background-color: var(--primaryBackground);
	}
`;

export default Project;
