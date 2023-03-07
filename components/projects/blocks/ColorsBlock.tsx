const ColorsBlock = ({ block }: Props) => {
	return (
		<ul>
			{block.colors.map((color, index) => (
				<li key={index} style={{ backgroundColor: `${color}` }}>
					{color}
				</li>
			))}
		</ul>
	);
};

type Props = {
	block: {
		id: number;
		colors: Array<String>;
	};
};

export default ColorsBlock;
