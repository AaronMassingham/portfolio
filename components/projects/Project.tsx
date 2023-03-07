import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

//Components
import BlockQuote from "../blocks/BlockQuote";

//Hooks
import { useContainerDimensions } from "@components/lib/useContainerDimensions";

const Project = ({
	children,
	staticChildren,
	numberOfProjectBlocks,
	itemNumber,
	itemsTotal,
}: Props) => {
	//Check
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
			stiffness: 50,
			damping: 15,
			restDelta: 0.5,
		}
	);
	const xR = useSpring(
		useTransform(
			scrollYProgress,
			rightCurtain === firstPanelCurtainRight ? [0, 0.2] : [0.8, 1],
			rightCurtain
		),
		{
			stiffness: 50,
			damping: 15,
			restDelta: 0.5,
		}
	);

	let setContainerHeight;
	if (itemNumber === 0) {
		setContainerHeight = numberOfProjectBlocks * 100 + 100;
	} else if (itemNumber === itemsTotal) {
		setContainerHeight = numberOfProjectBlocks * 100 + 100;
	} else {
		setContainerHeight = numberOfProjectBlocks * 100;
	}

	return (
		<Container height={setContainerHeight} ref={scrollRef}>
			<Sticky
				style={{ x: xL }}
				hasOverflowCurtain={
					checkIndexIsFirst || checkIndexIsLast ? true : undefined
				}
				overflowLast={checkIndexIsLast ? true : undefined}
			>
				{/* <Border isFirst={checkIndexIsFirst ? true : false} /> */}

				{children}
			</Sticky>
			<Static
				style={{ x: xR }}
				hasOverflowCurtain={
					checkIndexIsFirst || checkIndexIsLast ? true : undefined
				}
				overflowLast={checkIndexIsLast ? true : undefined}
			>
				<StaticContent>{staticChildren}</StaticContent>
			</Static>
			{checkIndexIsFirst && (
				<SectionTitle>
					<BlockQuote title="Projects">
						I find visual solutions, then build them using current web
						technologies.
					</BlockQuote>
				</SectionTitle>
			)}

			{checkIndexIsLast && (
				<SectionTitle>
					<BlockQuote title="Not bad, eh?"></BlockQuote>
				</SectionTitle>
			)}
		</Container>
	);
};

// type BorderProps = {
// 	isFirst: boolean;
// };
type Props = {
	children: React.ReactNode;
	itemNumber?: number;
	itemsTotal?: number;
	numberOfProjectBlocks: number;
	staticChildren: React.ReactNode;
};

type ContainerProps = {
	height: number;
};
type CurtainProps = {
	hasOverflowCurtain?: boolean;
	overflowLast?: boolean;
};

// const Border = styled.div<BorderProps>`
// 	height: ${(props) =>
// 		props.isFirst ? "calc(100vh - var(--headerH))" : "100%"};
// 	transform: translateY(${(props) => (props.isFirst ? "var(--headerH)" : "")});
// 	position: absolute;
// 	top: 0;
// 	right: -2px;
// 	width: 100%;
// 	pointer-events: none;
// 	overflow: clip;
// 	width: 4px;
// 	border-radius: 4px;
// 	background-color: var(--darkestGrey);
// `;

// const BorderLeft = styled(Border)`
// 	left: -2px;
// 	right: unset;
// 	height: 100%;
// 	overflow: clip;
// 	background-color: unset;
// 	> div {
// 		height: ${(props) =>
// 			props.isFirst ? "calc(100vh - (var(--headerH) + 5px))" : "100%"};
// 		width: 100%;
// 		position: sticky;
// 		top: 0;
// 		border-radius: 4px;
// 		background-color: var(--darkestGrey);
// 	}
// `;

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
		top: calc(var(--headerH) - 4px);
		height: calc(100vh - var(--headerH));
		width: 100%;
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

const Container = styled.section<ContainerProps>`
	height: ${(props) => (props.height ? props.height + "vh" : "auto")};
	width: 100%;
	display: flex;
	flex-direction: row;
	position: relative;
	z-index: 4;
`;

const Static = styled(motion.div)<CurtainProps>`
	position: relative;
	z-index: 2;
	height: 100%;
	background-color: var(--darkGrey);
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	outline: 1px solid;
	@media screen and (max-width: 768px) {
		position: absolute;
		width: 100%;
		bottom: 0;
		top: 0;
	}

	@media screen and (min-width: 768px) {
		width: 50%;
	}

	${(props) =>
		props.hasOverflowCurtain &&
		css`
			&:before {
				content: " ";
				position: absolute;
				top: -200vh;
				left: 0;
				background: var(--darkGrey);
				width: 100%;
				height: 200vh;
			}
		`}

	${(props) =>
		props.overflowLast &&
		css`
			&:before {
				top: unset;
				bottom: -200vh;
			}
		`}
`;

const Sticky = styled(motion.div)<CurtainProps>`
	width: 100%;
	height: 100vh;
	position: sticky;
	top: 0;
	z-index: 3;
	padding: var(--sitePadding);
	padding-top: calc(var(--headerH) + var(--sitePadding));
	outline: 1px solid;
	@media screen and (max-width: 768px) {
	}
	@media screen and (min-width: 768px) {
		width: calc(50% + var(--borderWidth));
		background-color: var(--darkGrey);
	}

	${(props) =>
		props.hasOverflowCurtain &&
		css`
			&:before {
				content: " ";
				position: absolute;
				top: -200vh;
				left: 0;
				background: var(--darkGrey);
				width: 100%;
				height: 200vh;
			}
		`}
	${(props) =>
		props.overflowLast &&
		css`
			&:before {
				top: unset;
				bottom: -200vh;
			}
		`}
`;

const Content = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 0 var(--sitePadding);
`;

const StaticContent = styled(Content)`
	flex-direction: column;
	justify-content: center;
	padding: 0 var(--sitePadding);
	gap: 5vh;
`;

export default Project;
