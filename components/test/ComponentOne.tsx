const ComponentOne = ({ block }: Props) => {
	return (
		<div style={{ height: "500px" }}>ComponentOne - data id {block.id}</div>
	);
};

type Props = {
	block: {
		id: number;
	};
};

export default ComponentOne;
