import React, { useRef } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import styled from "styled-components";

//Constants
import { experienceScrollAnimation } from "@constants/FramerVariants";

//RenderComponents
import SectionContent from "@components/panels/SectionContentContainer";
import ScrollProgress from "@components/ScrollProgress";
import { EmploymentHistory, Intro } from "@components/panels/Index";

//Types
import { PanelComponents, SectionProps } from "@typescriptTypes/ExperiencePanelProps";

const sectionComponents: PanelComponents = {
	EmploymentHistory,
	Intro,
};

const ScrollSnapPanels = ({ sections }: SectionProps) => {
	const scrollRef = useRef(null);

	const useScrollYProgressRefs = () => {
		return sections.map(() => useRef());
	};
	const scrollYProgressRefs = useScrollYProgressRefs();

	console.log(scrollYProgressRefs);

	const scrollYProgressArray = sections.map((_, index) => {
		const { scrollYProgress } = useScroll({
			container: scrollYProgressRefs[index].current,
		});
		return scrollYProgress;
	});

	return (
		<AnimatePresence>
			<Container key="contentContainer" ref={scrollRef} {...experienceScrollAnimation}>
				{sections.map((section, index) => (
					<SectionContent
						key={`panel-${index}`}
						index={index}
						title={section.title}
						sections={section.panels}
						scrollYProgressRefs={scrollYProgressRefs}
						sectionComponents={sectionComponents}
					/>
				))}
			</Container>
			<ScrollProgressContainer key="scrollProgressContainer">
				{sections.map((section, index) => (
					<ScrollProgress
						key={`scroll-progress-${index}`}
						index={index}
						text={section.title}
						progress={scrollYProgressArray[index]}
					/>
				))}
			</ScrollProgressContainer>
		</AnimatePresence>
	);
};

const ScrollProgressContainer = styled.div`
	height: 2rem;
	width: 100%;
	padding: 0 7.5%;
	display: flex;
	flex-direction: row;
	position: fixed;
	z-index: 20;
	bottom: 2rem;
`;

const Container = styled(motion.div)`
	position: relative;
	z-index: 2;
	overflow: scroll;
	height: 100vh;
	width: 100%;
	scroll-snap-type: y mandatory;
	& > section {
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}
`;

export default ScrollSnapPanels;
