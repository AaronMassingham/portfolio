import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

//Components
import BlockQuote from "../blocks/BlockQuote";

//Hooks
import useMediaQuery from "@components/lib/useMediaQuery";

const Project = ({
	children,
	staticChildren,
	height,
	itemNumber,
	itemsTotal,
}: Props) => {
	const checkIndexIsFirst = itemNumber === 0;
	const checkIndexIsLast = itemNumber === itemsTotal;

	const scrollRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: scrollRef,
	});

	const xPosValue = 1000;

	const firstPanelCurtainLeft = [-xPosValue, 0];
	const firstPanelCurtainRight = [xPosValue, 0];

	const lastPanelCurtainLeft = [0, -xPosValue];
	const lastPanelCurtainRight = [0, xPosValue];

	let leftCurtain;
	if (itemNumber === 0) {
		leftCurtain = firstPanelCurtainLeft;
	} else if (itemNumber === itemsTotal) {
		leftCurtain = lastPanelCurtainLeft;
	} else {
		leftCurtain = [0, 0];
	}

	let rightCurtain;
	if (itemNumber === 0) {
		rightCurtain = firstPanelCurtainRight;
	} else if (itemNumber === itemsTotal) {
		rightCurtain = lastPanelCurtainRight;
	} else {
		rightCurtain = [0, 0];
	}

	const xL = useSpring(
		useTransform(
			scrollYProgress,
			leftCurtain === firstPanelCurtainLeft ? [0, 0.2] : [0.8, 1],
			leftCurtain
		),
		{
			stiffness: 100,
			damping: 30,
			restDelta: 0.001,
		}
	);
	const xR = useSpring(
		useTransform(
			scrollYProgress,
			rightCurtain === firstPanelCurtainRight ? [0, 0.2] : [0.8, 1],
			rightCurtain
		),
		{
			stiffness: 100,
			damping: 30,
			restDelta: 0.001,
		}
	);

	return (
		<Container height={height} ref={scrollRef}>
			<Sticky style={{ x: xL }}>
				<Border isFirst={checkIndexIsFirst ? true : false} />

				<Content>{children}</Content>
			</Sticky>
			<Static style={{ x: xR }}>
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
	height?: number;
	itemNumber?: number;
	itemsTotal?: number;
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

const Container = styled.section<Props>`
	height: ${(props) => (props.height ? props.height + "px" : "auto")};
	width: 100%;
	display: flex;
	flex-direction: row;
	position: relative;
`;

const Static = styled(motion.div)<Props>`
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
	justify-content: space-between;
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
