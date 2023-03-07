const ComponentTwo = ({ block }: Props) => {
	return (
		<div style={{ height: "500px" }}>ComponentTwo - data id {block.id}</div>
	);
};

type Props = {
	block: {
		id: number;
	};
};

export default ComponentTwo;
