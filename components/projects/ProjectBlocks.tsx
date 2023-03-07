import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Components from "./blocks/components";

const ProjectBlocks = ({ data }: Props) => {
	return (
		<>
			{data.map((block) => (
				<Container
					key={block.id}
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{
						opacity: 0.05,
						scale: 1,
					}}
					viewport={{ amount: 0.5 }}
					transition={{
						duration: 1,
						ease: [0.25, 0.85, 0.19, 1],
					}}
				>
					{Components(block)}
				</Container>
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
	min-height: 70vh;
	background-color: var(--primaryBackground);

	width: 80%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3rem;
`;

export default ProjectBlocks;
