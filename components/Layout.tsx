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
	padding: calc(8rem + 8px) 2rem 0 2rem;
	height: 100dvh;
	height: 100vh;
`;
const Main = styled.div`
	padding: 0 2rem;
	@media only screen and (min-device-width: 768px) {
		padding: 0 4rem;
	}
	@media only screen and (min-device-width: 1200px) {
		padding: 0 8rem;
	}
`;

interface Props {
	children?: ReactNode;
}

export default Layout;
