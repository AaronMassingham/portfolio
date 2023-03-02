import styled from "styled-components";
import { motion } from "framer-motion";
import ImageBlock from "./blocks/ImageBlock";
import ColorsBlock from "./blocks/ColorsBlock";
import TextBlock from "./blocks/TextBlock";

const Components = {
	image: ImageBlock,
	colors: ColorsBlock,
	text: TextBlock,
};

const ProjectBlocks = ({ data }: Props) => {
	return (
		<>
			{data.map((item) => (
				<Container
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
					<div>Type - {item.component}</div>
					{item.colors && (
						<ul>
							{item.colors.map((color, index) => (
								<li key={index} style={{ backgroundColor: `${color}` }}>
									{color}
								</li>
							))}
						</ul>
					)}
					{item.content && <div>{item.content}</div>}
					{item.url && <div>{item.url}</div>}
				</Container>
			))}
		</>
	);
};

type Props = {
	data: Array<{
		component?: string;
		url?: string;
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
