import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";

//Hooks
import useMediaQuery from "@lib/useMediaQuery";

const Project = ({
	children,
	staticChildren,
	numberOfProjectBlocks,
	itemNumber,
	itemsTotal,
	color,
	background,
}: Props) => {
	const isMobile = useMediaQuery();

	const ref = useRef(null);
	const isInView = useInView(ref);

	const checkIndexIsFirst = itemNumber === 0;
	const checkIndexIsLast = itemNumber === itemsTotal;

	console.log(color);

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
			opacity: checkIndexIsFirst ? 1 : 1,
		},
		animate: {
			opacity: 1,
		},
	};

	return (
		<Container
			variants={variants}
			viewport={viewportOptions}
			transition={transitionOptions}
			initial="hidden"
			animate={isInView ? "animate" : "hidden"}
			ref={ref}
		>
			{/* {checkIndexIsFirst && (
				<>

					<OverFlowPanel
						initial={{ y: "100%" }}
						animate={{ y: isInView ? 0 : isMobile ? 0 : "100%" }}
						transition={{ duration: 1, ease: "easeInOut" }}
						$backgroundColor={background}
					>
						<SectionTitle>
							<BlockQuote
								invertColor
								title={<Heading headingLevel="h2">Projects</Heading>}
							>
								I find visual solutions, then build them using current web
								technologies.
							</BlockQuote>
						</SectionTitle>
					</OverFlowPanel>
				</>
			)} 
		*/}
			<Sticky>{children}</Sticky>
			<Static>
				<StaticContent
					$setPadding={ProjectHasLessThan2Panels}
					$textColor={color}
					$backgroundColor={background}
				>
					{staticChildren}
				</StaticContent>
			</Static>
			{/* <PinkBorder align="bottom" /> */}
		</Container>
	);
};

type Props = {
	children: React.ReactNode;
	itemNumber?: number;
	itemsTotal?: number;
	numberOfProjectBlocks: number;
	staticChildren: React.ReactNode;
	color: string;
	background: string;
};

type ContentProps = {
	$setPadding?: boolean;
	$textColor?: string;
	$backgroundColor?: string;
};

export default Project;

const SectionTitle = styled.section`
	z-index: 1;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	margin: 0 0 -100vh 0;

	& > div {
		position: sticky;
		top: calc(var(--headerH) - 4px);
		height: 50vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	& div > * {
		margin: 0 auto;
		text-align: center;
	}
`;

const OverFlowPanel = styled(motion.div)<ContentProps>`
	height: 100vh;
	background-color: ${(props) =>
		props.$backgroundColor
			? props.$backgroundColor
			: "var(--primaryBackground)"};
	position: absolute;
	width: 100%;
	top: calc(-100vh + 1px);
	pointer-events: none;
`;

const Container = styled(motion.section)`
	height: auto;
	width: 100%;
	display: grid;
	position: relative;
	z-index: 4;

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
		padding: var(--headerH) 2rem 2rem;
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
	background-color: ${(props) =>
		props.$backgroundColor
			? props.$backgroundColor
			: "var(--primaryBackground)"};
	color: ${(props) => (props.$textColor ? props.$textColor : "var(--white)")};
	padding: var(--headerH) var(--sitePadding) var(--headerH);
`;
