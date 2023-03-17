import styled from "styled-components";

const BlockQuote = ({ children, title, invertColor }: Props) => {
	return (
		<Container $invert={invertColor}>
			{title}
			<div>{children}</div>
		</Container>
	);
};

const Container = styled.div<ContainerProps>`
	max-width: 1200px;
	margin: auto;
	padding: 0 2rem 200px 2rem;
	@media screen and (min-width: 768px) {
		padding: 0 var(--sitePadding) 25vh var(--sitePadding);
	}

	& h2 {
		font-size: var(--fs-lg);
		color: ${(props) =>
			props.$invert ? "var(--primaryBackground)" : "var(--white)"};
	}
	& > div {
		padding-top: 1rem;
		width: clamp(200px, 400px, 100%);
		text-transform: uppercase;
		color: ${(props) =>
			props.$invert ? "var(--primaryBackground)" : "var(--white)"};
	}
`;

type Props = {
	children?: React.ReactNode;
	title?: React.ReactNode;
	invertColor?: boolean;
};

type ContainerProps = {
	$invert?: boolean;
};

export default BlockQuote;
