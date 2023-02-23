import { ShrikhandFont } from "@components/utils/FancyFont";
import { ReactNode } from "react";
import styled from "styled-components";

const BlockQuote = ({ children, title }: Props) => {
	return (
		<Container>
			<h2 className={ShrikhandFont.className}>{title}</h2>
			<div>{children}</div>
		</Container>
	);
};

const Container = styled.div`
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
