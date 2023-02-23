import styled from "styled-components";

const ContentWrapper = ({ children }: Props) => {
	return <Container>{children}</Container>;
};

type Props = {
	children: React.ReactNode;
};

const Container = styled.div`
	padding: var(--sitePadding);
`;

export default ContentWrapper;
