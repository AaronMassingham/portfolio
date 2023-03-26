import styled from "styled-components";

//Components
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
		imageUrl: string;
		title: string;
		content: string;
		colors: Array<String>;
	}>;
};

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	@media screen and (max-width: 768px) {
		margin-left: auto;
		justify-content: flex-start;
		padding-left: 5rem;
	}
	@media screen and (min-width: 768px) {
		max-width: 1200px;
		justify-content: center;
	}
`;

export default ProjectBlocks;
