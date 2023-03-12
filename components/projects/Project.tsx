import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll } from "framer-motion";

//Components
import BlockQuote from "../BlockQuote";

const Project = ({
	children,
	staticChildren,
	numberOfProjectBlocks,
	itemNumber,
	itemsTotal,
}: Props) => {
	//Check
	const checkIndexIsFirst = itemNumber === 0;
	// const checkIndexIsLast = itemNumber === itemsTotal;

	let setContainerHeight;
	if (itemNumber === 0) {
		setContainerHeight = numberOfProjectBlocks * 100 + 100;
	} else if (itemNumber === itemsTotal) {
		setContainerHeight = numberOfProjectBlocks * 100 + 100;
	} else {
		setContainerHeight = numberOfProjectBlocks * 100;
	}

	const viewportOptions = { margin: "100% 0% -100% 0%" };
	const transitionOptions = {
		duration: 0.5,
		when: "beforeChildren",
	};
	const variants = {
		hidden: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
	};
	const childVariants = {
		hidden: {
			opacity: 0,
			x: -30,
		},
		animate: {
			opacity: 1,
			x: 0,
		},
	};

	return (
		<Container
			variants={variants}
			initial="hidden"
			whileInView="animate"
			viewport={viewportOptions}
			transition={transitionOptions}
			height={setContainerHeight}
		>
			<OverFlowPanel />
			<Sticky variants={childVariants} transition={transitionOptions}>
				{children}
			</Sticky>
			<Static>
				<StaticContent>{staticChildren}</StaticContent>
			</Static>
			<BorderBottom
				initial={{ opacity: 0, scaleX: 0 }}
				whileInView={{ opacity: 1, scaleX: 1 }}
				transition={{ duration: 1, ease: "easeInOut" }}
				viewport={{ margin: "-5% 0% -5% 0%" }}
			/>
		</Container>
	);
};

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

const BorderBottom = styled(motion.div)`
	position: absolute;
	bottom: -1px;
	width: 100%;
	height: 2px;
	background-color: var(--pink);
`;
const OverFlowPanel = styled(motion.div)`
	height: 100vh;
	background: var(--primaryBackground);
	position: absolute;
	width: 100%;
	top: -100vh;
	pointer-events: none;
`;

const Container = styled(motion.section)<ContainerProps>`
	height: ${(props) => (props.height ? props.height + "vh" : "auto")};
	width: 100%;
	display: flex;
	flex-direction: row;
	position: relative;
	z-index: 4;
	background: var(--primaryBackground);
`;

const Sticky = styled(motion.div)`
	width: 100%;
	height: 100vh;
	position: sticky;
	top: 0;
	z-index: 3;

	padding: calc(var(--headerH) + 2rem) var(--sitePadding) 2rem
		var(--sitePadding);

	// pointer-events: none;
	// & > * {
	// 	pointer-events: initial;
	// }
	// @media screen and (min-width: 768px) {
	// 	width: 50%;
	// 	padding: calc(var(--headerH) + 2rem) var(--sitePadding) 4rem
	// 		var(--sitePadding);
	// }
`;

const Static = styled(motion.div)`
	position: absolute;
	z-index: 2;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	bottom: 0;
	top: 0;
	// @media screen and (max-width: 768px) {
	// 	position: absolute;
	// 	width: 100%;
	// 	bottom: 0;
	// 	top: 0;
	// }

	// @media screen and (min-width: 768px) {
	// 	width: 50%;
	// }
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
