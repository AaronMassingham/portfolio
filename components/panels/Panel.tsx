import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import styled from "styled-components";

//RenderComponents
import ScrollProgress from "./ScrollProgress";
// import { EmploymentHistory, Intro } from "@components/panels/Index";

//Types
import { PanelProps, SectionItem } from "@typescriptTypes/ExperiencePanelProps2";

const Panel = ({ panels, title, offset, width }: SectionItem) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ container: ref });

	return (
		<>
			<Container ref={ref}>
				<div>
					<h2>{title}</h2>
				</div>
				<div />
				{panels.map((panel: PanelProps, index: number) => (
					<div key={`${panel.sectionName}-${index}`}>{panel.sectionName}</div>
				))}
			</Container>

			<ProgressContainer $width={width} $offset={offset}>
				<ScrollProgress index={1} text={title} progress={scrollYProgress} />
			</ProgressContainer>
		</>
	);
};

type Props = {
	$width?: number;
	$offset?: number;
};

const ProgressContainer = styled(motion.div)<Props>`
	position: fixed;
	bottom: 2rem;
	left: 0;
	right: 0;
	padding: 0 7.5%;
	pointer-events: none;
	& > div {
		pointer-events: auto;
		width: ${(props) => `${props.$width}%`};
		left: ${(props) => props.$offset}%;
	}
`;
const Container = styled.section`
	padding: 0 7.5%;
	height: 100vh;
	overflow: scroll;
	padding-top: 25vh;
	& > div:not(div:first-of-type) {
		height: 100vh;
	}
	& > div:first-of-type {
		position: sticky;
		top: 0;

		& h2 {
			text-transform: uppercase;
			font-weight: 800;
			line-height: clamp(55px, 8vw, 100px);

			word-wrap: balance;
			@media only screen and (max-width: 378px) {
				font-size: clamp(35px, 5vw, 65px);
			}
			@media only screen and (min-width: 379px) {
				font-size: clamp(35px, 5vw, 65px);
			}
		}
	}
	&::-webkit-scrollbar {
		display: none;
	}
`;

export default Panel;
