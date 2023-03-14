import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PinkBorder from "../motion-elements/PinkBorder";

const Project = ({
	children,
	staticChildren,
	numberOfProjectBlocks,
	itemNumber,
	itemsTotal,
}: Props) => {
	const checkIndexIsFirst = itemNumber === 0;
	const checkIndexIsLast = itemNumber === itemsTotal;

	//Padding is adjusted for projects with less than 2 panels
	const ProjectHasLessThan2Panels = numberOfProjectBlocks < 2 ? true : false;

	const viewportOptions = { margin: "0% 0% -50% 0%" };
	const transitionOptions = {
		duration: 0.5,
		ease: "easeOut",
		when: "beforeChildren",
	};
	const variants = {
		hidden: {
			opacity: checkIndexIsLast ? 1 : 0,
		},
		animate: {
			opacity: 1,
		},
	};

	return (
		<Container
			variants={variants}
			initial="hidden"
			whileInView="animate"
			viewport={viewportOptions}
			transition={transitionOptions}
		>
			{checkIndexIsFirst && <OverFlowPanel />}
			<Sticky>{children}</Sticky>
			<Static>
				<StaticContent $setPadding={ProjectHasLessThan2Panels}>
					{staticChildren}
				</StaticContent>
			</Static>
			<PinkBorder align="bottom" />
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

type ContentProps = {
	$setPadding: boolean;
};

export default Project;

const OverFlowPanel = styled(motion.div)`
	height: 100vh;
	background: var(--primaryBackground);
	position: absolute;
	width: 100%;
	top: -100vh;
	pointer-events: none;
`;

const Container = styled(motion.section)`
	height: auto;
	width: 100%;
	display: grid;

	position: relative;
	z-index: 4;
	background: var(--primaryBackground);
	& > * {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}
`;

const Sticky = styled(motion.div)`
	width: 100%;
	height: 100vh;
	position: sticky;
	top: 0;
	z-index: 3;
	padding: var(--headerH) var(--sitePadding) 2rem;
	@media screen and (min-width: 768px) {
		padding: var(--headerH) calc(var(--sitePadding) / 3)
			calc(var(--sitePadding) / 3);
	}
`;

const Static = styled(motion.div)`
	z-index: 2;
	height: auto;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	top: 0;
`;

const StaticContent = styled(motion.div)<ContentProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	gap: 5vh;
	padding: ${(props) =>
		props.$setPadding
			? "0 var(--sitePadding) 150px"
			: "150px var(--sitePadding)"};
`;
