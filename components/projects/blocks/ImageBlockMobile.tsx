import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

//Components
import DeviceFrame from "@components/wrappers/DeviceFrame";

type Props = {
	block: {
		id: number;
		imageUrls: Array<string>;
	};
};

const ImageBlockMobile = ({ block }: Props) => {
	const numOfItems = block.imageUrls.length;

	return (
		<Container width={numOfItems}>
			{block.imageUrls.map((item, index) => (
				<DeviceFrame key={index} deviceType="portrait" elementIndex={index + 1}>
					<Image
						src={`/${item}`}
						alt="Background Image"
						placeholder="empty"
						quality={75}
						fill
					/>
				</DeviceFrame>
			))}
		</Container>
	);
};

type ContainerProps = {
	width: number;
};

const Container = styled(motion.div)<ContainerProps>`
	display: grid;
	width: 100%;
	padding: 2rem 0;
	gap: 3rem;

	grid-template-columns: repeat(1, 1fr);
	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export default ImageBlockMobile;
