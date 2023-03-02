import styled from "styled-components";

const Table = ({ data }: Props) => {
	return (
		<Container>
			<h4>{data.title}</h4>
			<ul>
				{data.list.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</Container>
	);
};

type Props = {
	data: {
		title: string;
		list: Array<String>;
	};
};

const Container = styled.div`
	width: 100%;
	height: 100%;
	@media screen and (max-width: 768px) {
		border-bottom: var(--border);
	}
	& h4 {
		font-size: 1rem;
		text-transform: uppercase;
		font-weight: bold;
		padding: 1rem 0 1rem 0;
		@media screen and (min-width: 768px) {
			border-bottom: var(--border);
			padding: 2rem 0 1rem 0;
		}
	}
	& ul {
		padding-bottom: 1rem;

		@media screen and (min-width: 768px) {
			padding-top: 1rem;
		}
	}
	& li {
		display: block;
		padding: 0.25rem 1rem 0.25rem 0;
		position: relative;
		font-size: 0.8rem;
	}
`;

export default Table;
