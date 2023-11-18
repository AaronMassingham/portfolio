import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeInUpMotionVariants } from "@constants/FramerVariants";

const TextBlock = ({ block }: Props) => {
	//color={block.color} background={block.background}
	return (
		<Container {...fadeInUpMotionVariants} viewport={{ margin: "0% 0% 10% 0%" }}>
			{block.logo && (
				<ImageContainer>
					<Image
						src={`/${block.logo}`}
						alt="Background Image"
						placeholder="empty"
						quality={100}
						fill
					/>
				</ImageContainer>
			)}
			<Content className="stack">
				{block.title && <h3>{block.title}</h3>}
				{block.content && (
					<div className="stack" dangerouslySetInnerHTML={{ __html: `${block.content}` }} />
				)}
			</Content>
		</Container>
	);
};

type Props = {
	block: {
		id: number;
		title?: string;
		content?: string;
		logo: string;
	};
};

const Container = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	gap: 4rem;
	width: 100%;
	& h3 {
		padding-top: 3rem;
	}
	@media screen and (min-width: 1200px) {
		flex-direction: row;
		align-items: center;
	}
`;
const Content = styled.div`
	flex: 1;
`;
const ImageContainer = styled.div`
	position: relative;
	width: 120px;
	aspect-ratio: 1/1;
	@media screen and (min-width: 768px) {
		width: 150px;
	}
	@media screen and (min-width: 1200px) {
		width: 200px;
	}
`;

export default TextBlock;
