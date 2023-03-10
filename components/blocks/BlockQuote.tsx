import { ShrikhandFont } from "@components/utils/Fonts";
import { ReactNode } from "react";
import styled from "styled-components";
import Heading from "../Heading";

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
		width: clamp(200px, 400px, 100%);

		text-transform: uppercase;
	}
`;

interface Props {
	children?: ReactNode;
	title?: ReactNode;
}

export default BlockQuote;
