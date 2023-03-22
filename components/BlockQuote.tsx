import styled from "styled-components";

const BlockQuote = ({ children, title, invertColor }: Props) => {
	return (
		<Container className="stack" $invert={invertColor}>
			{title}
			<p>{children}</p>
		</Container>
	);
};

type Props = {
	children?: React.ReactNode;
	title?: React.ReactNode;
	invertColor?: boolean;
};

type ContainerProps = {
	$invert?: boolean;
};

const Container = styled.div<ContainerProps>`
	max-width: 1200px;
	width: 100%;
	min-height: 50vh;
	margin: 0 auto;
	padding: 0 2rem 200px 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media screen and (min-width: 768px) {
		padding: 0 var(--sitePadding);
	}
	& h2 {
		font-size: var(--fs-lg);
		color: ${(props) =>
			props.$invert ? "var(--primaryBackground)" : "var(--white)"};
	}
	& > p {
		width: clamp(200px, 1200px, 100%);
		color: ${(props) =>
			props.$invert ? "var(--primaryBackground)" : "var(--white)"};
	}
`;

export default BlockQuote;
