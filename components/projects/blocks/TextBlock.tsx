import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeInUpMotionVariants } from "@constants/FramerConstants";

const TextBlock = ({ block }: Props) => {
	//color={block.color} background={block.background}
	return (
		<Container>
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
			<Content
				{...fadeInUpMotionVariants}
				viewport={{ margin: "0% 0% 10% 0%" }}
				className="stack"
				dangerouslySetInnerHTML={{ __html: `${block.content}` }}
			/>
		</Container>
	);
};

type Props = {
	block: {
		id: number;
		content?: string;
		logo: string;
	};
};

const Container = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: space-around;
	gap: 4rem;

	@media screen and (max-width: 768px) {
		padding-right: 2rem;
	}
	@media screen and (min-width: 768px) {
		width: 100%;
	}
	@media screen and (min-width: 1200px) {
		flex-direction: row;
		align-items: flex-start;
		padding: var(--sitePadding);
	}
`;
const Content = styled(motion.div)`
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
