import Image from "next/image";
import styled from "styled-components";

//Components
import DeviceFrame from "@components/wrappers/DeviceFrame";

const ImageBlockMobile = ({ block }: Props) => {
	const numOfItems = block.imageUrls.length;

	const RenderImageOrVideo = block.imageUrls.map((item, index) => (
		<DeviceFrame key={item} deviceType="portrait" elementIndex={index + 1}>
			{item.includes("mp4") ? (
				<video autoPlay muted loop style={{ width: "100%", height: "auto" }}>
					<source src={`/${item}`} type="video/mp4" />
					<track
						src="captions_es.vtt"
						kind="captions"
						srcLang="en"
						label="spanish_captions"
					/>
				</video>
			) : (
				<Image
					src={`/${item}`}
					alt="Background Image"
					placeholder="empty"
					quality={75}
					fill
				/>
			)}
		</DeviceFrame>
	));

	return <Container width={numOfItems}>{RenderImageOrVideo}</Container>;
};

type Props = {
	block: {
		id: number;
		imageUrls: Array<string>;
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
	@media screen and (min-width: 1200px) {
		padding: var(--sitePadding);
	}
`;

export default ImageBlockMobile;
