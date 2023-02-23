import styled from "styled-components";

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
				<Container style={{ border: "1px solid black", padding: "2rem" }}>
					<div>Type - {item.component}</div>
					{item.colors && (
						<ul>
							{item.colors.map((color) => (
								<li style={{ backgroundColor: `${color}` }}>{color}</li>
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

const Container = styled.div`
	min-height: 90vh;
`;

export default ProjectBlocks;
