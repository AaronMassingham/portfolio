import Image from "next/image";
import styled from "styled-components";

//Components
import DeviceFrame from "@components/wrappers/DeviceFrame";
import ImageCaption from "@components/ImageCaption";

const ImageBlockDesktop = ({ block }: Props) => {
	return (
		<Container>
			<DeviceFrame deviceType="landscape">
				<Image
					src={`/${block.imageUrl}`}
					alt={`${block.caption}`}
					placeholder="empty"
					quality={100}
					fill
					sizes="(max-width: 768px) 80vw,
					(max-width: 1200px) 75vw,
					100vw"
				/>
			</DeviceFrame>
			<ImageCaption text={block.caption} />
		</Container>
	);
};

type Props = {
	block: {
		id: number;
		imageUrl: string;
		caption?: string;
	};
};

const Container = styled.div`
	width: 100%;
	padding: 2rem 0;
	max-width: 1200px;
	margin: auto;
`;

export default ImageBlockDesktop;
