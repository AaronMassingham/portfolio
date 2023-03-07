const ImageBlock = ({ block }: Props) => {
	return <div>{block.imageUrl}</div>;
};

type Props = {
	block: {
		id: number;
		imageUrl?: string;
	};
};

export default ImageBlock;
