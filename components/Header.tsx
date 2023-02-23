import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";

//Components
import Logo from "./Logo";
import Drips from "./visuals/Drips";

const Header = () => {
	return (
		<Container>
			<Logo />
			<Strapline>
				Hey friendo <FontAwesomeIcon fontSize={8} icon={faHand} />
			</Strapline>
			<HireMe>
				<Link href="">Hire Me</Link>
				<DripContainer>
					<Drips />
				</DripContainer>
			</HireMe>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	border-radius: calc(2rem + 2px) calc(2rem + 2px) 0 0;
	z-index: 11;
	height: calc(var(--headerH) + var(--borderWidth));
	background-color: var(--primaryBackground);
	border: var(--border);
	border-bottom: 0;
`;

const Strapline = styled.div`
	text-transform: uppercase;
	font-weight: 300;
	font-size: 1rem;
	display: flex;
	position: absolute;
	justify-content: center;
	width: 100%;
	align-items: center;
	& svg {
		margin-left: 0.5rem;
		height: 1rem;
	}
`;

const DripContainer = styled.div`
	position: absolute;
	height: 50px;
	top: 100%;
	right: calc(50% - 25px);
	pointer-events: none;
`;
const HireMe = styled.div`
	text-transform: uppercase;
	font-weight: 300;
	height: calc(100% - var(--borderWidth));
	background-color: var(--darkGrey);
	position: relative;
	border-radius: 2rem;

	margin-right: calc(var(--borderWidth) / 2);
	top: 0;
	width: auto;
	padding: 0 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--primaryBackground);
`;

export default Header;
