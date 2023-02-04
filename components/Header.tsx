import Link from "next/link";
import styled from "styled-components";

//Components
import Logo from "./Logo";

const Header = () => {
	return (
		<Container>
			<TopBar />
			<Logo />
			<Link href="">Hire Me</Link>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 8px;
	left: 0;
	right: 0;
	padding: 3rem 2rem 1rem 2rem;
`;
const TopBar = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	height: 8px;
	background: var(--darkestGrey);
	&:before {
		position: absolute;
		width: 100%;
		height: 50px;
		top: -50px;
		background: red;
		left: 0;
		content: "";
	}
`;

export default Header;
