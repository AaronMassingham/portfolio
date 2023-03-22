import styled from "styled-components";

const AboutContainer = ({ children }: Props) => {
	return <Container>{children}</Container>;
};

type Props = {
	children: React.ReactNode;
};

export default AboutContainer;

const Container = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;

	& h3 {
		padding: 0 0 1rem 0 !important;
	}
	& h4 {
		padding: 3rem 0 0 0;
	}
`;
