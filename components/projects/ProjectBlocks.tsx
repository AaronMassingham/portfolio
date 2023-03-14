import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Components from "./blocks/components";

const ProjectBlocks = ({ data }: Props) => {
	const mappedData = data.map((block) => (
		<Container key={block.id}>{Components(block)}</Container>
	));
	return <>{mappedData}</>;
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

	@media screen and (max-width: 768px) {
		margin-left: auto;
		width: calc(100% - (var(--sitePadding) + 4rem));
	}
	@media screen and (min-width: 768px) {
		min-height: 70vh;
		max-width: 1200px;
	}
`;

export default ProjectBlocks;
