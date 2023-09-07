<<<<<<< Updated upstream
import Link from "next/link";
=======
import { useState } from "react";
>>>>>>> Stashed changes
import styled from "styled-components";

//Constants
import { ROUTES } from "@constants/PublicRoutes";
import { headerAnimation } from "@constants/FramerVariants";

//Components
<<<<<<< Updated upstream
import Logo from "./Logo";
import Social from "./Social";

const Header = () => {
	return (
		<Container>
			<Logo />
			<Social />
			<HireMe>
				<Link href="">Hire Me</Link>
			</HireMe>
=======
import Nav from "@components/Nav";
import Availability from "@components/Availability";
import Social from "@components/Social";
import DefaultButton from "@components/Button";
import NavButton from "@components/NavButton";

const Header = () => {
	const [navToggle, setNavtoggle] = useState(false);
	return (
		<Container {...headerAnimation}>
			<Logo>
				Aaron Massingham
				<span>
					<Availability status={true} />
				</span>
			</Logo>
			<NavButton toggle={navToggle} onClick={() => setNavtoggle(!navToggle)} />

			<Navigation $navToggle={navToggle}>
				<Nav links={ROUTES} />
			</Navigation>

			<Other $navToggle={navToggle}>
				<Social />
				<DefaultButton text="CV" />
			</Other>
>>>>>>> Stashed changes
		</Container>
	);
};

<<<<<<< Updated upstream
const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 2rem calc(var(--sitePadding) / 3);
	height: var(--headerH);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 11;
`;

const HireMe = styled.div`
	position: relative;
	text-transform: uppercase;
	font-weight: 400;
	top: 0;
	width: auto;
	padding: 0 1rem;
	color: var(--pink);
	height: 2rem;
	border-radius: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--primaryBackground);
	border: 2px solid var(--pink);
	margin-left: 1rem;
	box-shadow: var(--shadow);
=======
type NavProps = {
	$navToggle: boolean;
};

const Logo = styled.div`
	flex-direction: column;
	justify-content: center;
	gap: 0.5rem;
	position: relative;
	z-index: 10;
	flex: 0.25;
	font-weight: 600;
	& span {
		position: absolute;
		left: 0;
		bottom: -1.25rem;
		font-weight: 400;
	}
	@media only screen and (min-width: 768px) {
		font-size: 1.25rem;
	}
`;
const Navigation = styled.div<NavProps>`
	justify-content: center;
	@media only screen and (min-width: 768px) {
		align-self: flex-end;
		margin-top: -2rem;
		flex: 0.5;
	}
	@media only screen and (max-width: 768px) {
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		padding-top: 15svh;
		padding-bottom: 20svh;
		height: 100svh;
		background-color: var(--grey900);
		opacity: ${({ $navToggle }) => ($navToggle ? 1 : 0)};
		pointer-events: ${({ $navToggle }) => (!$navToggle ? "none" : "all")};
	}
`;
const Other = styled.div<NavProps>`
	align-items: center;
	justify-content: center;
	position: relative;
	display: flex;
	gap: 1.5rem;
	& > button {
		font-weight: 800;
	}
	@media only screen and (min-width: 768px) {
		align-self: flex-end;
		flex: 0.25;
		justify-content: flex-end;
	}
	@media only screen and (max-width: 768px) {
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
		padding: 7.5% 7.5%;
		flex: 1;
		background-color: var(--grey900);
		border-top: 1px solid var(--grey800);
		opacity: ${({ $navToggle }) => ($navToggle ? 1 : 0)};
		pointer-events: ${({ $navToggle }) => (!$navToggle ? "none" : "all")};
		& > * {
			min-height: 3rem;
			align-items: center;
		}
	}
`;

const Container = styled(motion.header)`
	padding: 7.5% 7.5%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	position: fixed;
	z-index: 5;
	width: 100%;
	& > div {
		display: flex;
	}
	@media only screen and (min-width: 1024px) {
		padding: 4rem;
		& > div {
			min-height: 3rem;
		}
	}
	@media only screen and (min-width: 1200px) {
		flex-direction: row;
	}
>>>>>>> Stashed changes
`;

export default Header;
