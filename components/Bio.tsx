import styled from "styled-components";
import { motion } from "framer-motion";

const Bio = ({ data }: Props) => {
	return (
		<Container>
			<Content className="stack" dangerouslySetInnerHTML={{ __html: data }} />
		</Container>
	);
};

type Props = {
	data: string;
};

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
`;
const SideBar = styled.div``;
const Content = styled.div``;

export default Bio;
