import styled from "styled-components";

//Components
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: Props) => {
	return (
		<>
			<Wrapper>
				<BorderTwo>
					<div className="topleft" />
					<div className="topright" />
					<div className="bottomleft" />
					<div className="bottomright" />
				</BorderTwo>

				<Border />
			</Wrapper>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	);
};

const Border = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 0;
	min-height: calc(100vh + 56px);
	pointer-events: none;
	border: var(--border);
	@media screen and (min-width: 500px) {
		min-height: 100vh;
	}
`;
const BorderTwo = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	min-height: calc(100vh + 56px);
	z-index: 1;
	pointer-events: none;
	border-radius: var(--borderWidth);
	border: var(--border);
	.bottomright,
	.bottomleft,
	.topright,
	.topleft {
		width: 30px;
		height: 30px;
		overflow: hidden;
		position: absolute;
		z-index: 0;
		background: var(--darkestGrey);
	}
	.bottomright {
		bottom: 0;
		right: 0;
		clip-path: path("M0,30c16.6,0,30-13.4,30-30v0v30H0L0,30z");
	}
	.bottomleft {
		bottom: 0;
		left: 0;
		clip-path: path("M30, 30C13.4, 30, 0, 16.6, 0, 0v0v30H30L30, 30z");
	}
	.topright {
		top: 0;
		right: 0;
	}
	.topleft {
		top: 0;
		left: 0;
	}
	@media screen and (min-width: 500px) {
		min-height: 100vh;
	}
`;
const Wrapper = styled.div`
	min-height: calc(100vh + 56px);
	padding: var(--borderWidth);
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	pointer-events: none;
	@media screen and (min-width: 500px) {
		min-height: 100vh;
	}
`;
const Main = styled.div``;

interface Props {
	children?: React.ReactNode;
}

export default Layout;
