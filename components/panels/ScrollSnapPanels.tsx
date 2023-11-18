import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

//Constants
import { experienceScrollAnimation } from "@constants/FramerVariants";

//Components
import Panel from "@components/panels/Panel";

//Types
import { SectionProps } from "@typescriptTypes/ExperiencePanelProps2";

const ScrollSnapPanels = ({ sections }: SectionProps) => {
	const calculatedWidth = 100 / sections.length;
	return (
		<AnimatePresence>
			<Container {...experienceScrollAnimation}>
				{sections.map((section, index) => (
					<Panel
						key={index}
						title={section.title}
						panels={section.panels}
						offset={calculatedWidth * index}
						width={calculatedWidth}
					/>
				))}
			</Container>
		</AnimatePresence>
	);
};

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
