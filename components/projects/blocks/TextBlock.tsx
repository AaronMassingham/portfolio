const TextBlock = ({ block }: Props) => {
	return <div>{block.content}</div>;
};

type Props = {
	block: {
		id: number;
		content?: string;
	};
};

export default TextBlock;
