import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

import DeviceFrame from "@components/components/wrappers/DeviceFrame";

const ImageBlockMobile = ({ block }: Props) => {
	return (
		<Container>
			{block.imageUrls.map((item, index) => (
				<DeviceFrame key={index} deviceType="portrait">
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

type Props = {
	block: {
		id: number;
		imageUrls: Array<string>;
	};
};

const Container = styled(motion.div)`
	display: grid;
	width: 100%;
	padding: 2rem 0;
	place-items: start;
	gap: 3rem;
	grid-template-columns: repeat(1, 1fr);
	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export default ImageBlockMobile;
