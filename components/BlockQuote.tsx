import styled from "styled-components";

const BlockQuote = ({ children, title }: Props) => {
	return (
		<Container>
			{title}
			<div>{children}</div>
		</Container>
	);
};

const Container = styled.div`
	& h2 {
		font-size: var(--fs-lg);
	}
	& > div {
		padding-top: 1rem;
		width: clamp(200px, 400px, 100%);
		text-transform: uppercase;
	}
`;

interface Props {
	children?: React.ReactNode;
	title?: React.ReactNode;
}

export default BlockQuote;
