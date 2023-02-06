import { ReactNode } from "react";
import styled from "styled-components";

//Components
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: Props) => {
	return (
		<Wrapper>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	min-height: 100dvh;
	min-height: 100vh;
	height: auto;
`;
const Main = styled.div`
	padding: 0 2rem;
	@media only screen and (min-width: 768px) {
		padding: 0 4rem;
	}
	@media only screen and (min-width: 1200px) {
		padding: 0 8rem;
	}
`;

interface Props {
	children?: ReactNode;
}

export default Layout;
