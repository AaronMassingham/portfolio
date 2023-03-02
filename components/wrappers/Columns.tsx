import styled from "styled-components";

const Columns = ({ children }: Props) => {
	return <Container>{children}</Container>;
};

type Props = {
	children: React.ReactNode;
};

const Container = styled.div`
	h3 {
		padding: 0 0 3rem 0;
	}
	& > div {
		column-count: 1;
		column-gap: 5rem;
		width: 100%;
		& p {
			text-align: justify;
			text-justify: inter-word;
		}
		& p:first-of-type {
			margin-top: 0;
		}

		@media screen and (min-width: 768px) {
			column-count: 2;
			& h3 {
				column-span: all;
			}
		}
		@media screen and (min-width: 1200px) {
			column-count: 3;
		}
	}
`;

export default Columns;
