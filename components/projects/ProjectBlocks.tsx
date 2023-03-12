import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Components from "./blocks/components";

const ProjectBlocks = ({ data }: Props) => {
	return (
		<>
			{data.map((block) => (
				<Container key={block.id}>{Components(block)}</Container>
			))}
		</>
	);
};

type Props = {
	data: Array<{
		id: number;
		component: string;
		imageUrl?: string;
		content?: string;
		colors?: Array<String>;
	}>;
};

const Container = styled(motion.div)`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: clip;
	@media screen and (min-width: 768px) {
		width: 80%;
		min-height: 70vh;
	}
`;

export default ProjectBlocks;
