import Link from "next/link";
import styled from "styled-components";

//Components
import Logo from "./Logo";
import Drips from "./visuals/Drips";

const Header = () => {
	return (
		<Container>
			<TopBar />
			<Logo />
			<HireMe>
				<Drips />
				<Link href="">Hire Me</Link>
			</HireMe>
		</Container>
	);
};

const HireMe = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-transform: uppercase;
	font-weight: 700;
`;
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	position: fixed;
	top: 8px;
	left: 0;
	right: 0;
	padding: 0 2rem;
	z-index: 5;
	height: 6rem;
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
