import { ReactNode } from "react";
import styled from "styled-components";

const BlockQuote = ({ children, title }: Props) => {
	return (
		<Container>
			<h2>{title}</h2>
			<div>{children}</div>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	& h2 {
		font-size: var(--fs-xl);
	}
	& > div {
		width: clamp(200px, 400px, 100%);
	}
`;

interface Props {
	children?: ReactNode;
	title?: string;
}

export default BlockQuote;
