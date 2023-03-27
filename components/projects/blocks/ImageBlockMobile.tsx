import Image from "next/image";
import styled from "styled-components";

//Components
import DeviceFrame from "@components/wrappers/DeviceFrame";
import ImageCaption from "@components/ImageCaption";

const ImageBlockMobile = ({ block }: Props) => {
	const numOfItems = block.imageUrls.length;

	const RenderImageOrVideo = block.imageUrls.map((block, index) => (
		<div key={index}>
			<DeviceFrame deviceType="portrait" elementIndex={index + 1}>
				{block.path.includes("mp4") ? (
					<video autoPlay muted loop>
						<source src={`/${block.path}`} type="video/mp4" />
					</video>
				) : (
					<Image
						src={`/${block.path}`}
						alt={block.caption}
						placeholder="empty"
						quality={100}
						fill
						sizes="
						50vw,
						(min-width: 768px) 33vw"
					/>
				)}
			</DeviceFrame>
			<ImageCaption text={block.caption} />
		</div>
	));

	return <Container width={numOfItems}>{RenderImageOrVideo}</Container>;
};

type Props = {
	block: {
		id: number;
		imageUrls: Array<{
			caption: string;
			path: string;
		}>;
	};
};

type ContainerProps = {
	width: number;
};

const Container = styled.div<ContainerProps>`
	display: grid;
	width: 100%;
	padding: 2rem 0;
	gap: 3rem;
	max-width: 1200px;
	margin: auto;
	grid-template-columns: repeat(1, 1fr);
	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}
	& video {
		width: 100%;
		height: auto;
	}
`;

export default ImageBlockMobile;
