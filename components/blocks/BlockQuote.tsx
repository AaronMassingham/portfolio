import { ShrikhandFont } from "@components/utils/FancyFont";
import { ReactNode } from "react";
import styled from "styled-components";
import Heading from "../Heading";

const BlockQuote = ({ children, title, headingLevel }: Props) => {
	return (
		<Container>
			<Heading headingLevel={headingLevel}>{title}</Heading>
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
	title?: string;
	headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default BlockQuote;
