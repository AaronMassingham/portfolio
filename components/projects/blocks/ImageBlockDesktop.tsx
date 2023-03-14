import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

import DeviceFrame from "@components/wrappers/DeviceFrame";

const ImageBlockDesktop = ({ block }: Props) => {
	return (
		<Container>
			<DeviceFrame deviceType="landscape">
				<Image
					src={`/${block.imageUrl}`}
					alt="Background Image"
					placeholder="empty"
					quality={75}
					fill
				/>
			</DeviceFrame>
		</Container>
	);
};

type Props = {
	block: {
		id: number;
		imageUrl: string;
	};
};

const Container = styled(motion.div)`
	display: grid;
	width: 100%;
	padding: 2rem 0;
	place-items: start;
	gap: 1rem;
	grid-template-columns: 1fr;
`;

export default ImageBlockDesktop;
