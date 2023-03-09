import Link from "next/link";
import styled from "styled-components";

//Components
import Logo from "./Logo";
import Social from "./Social";
import Drips from "./_bin/visuals/Drips";

const Header = () => {
	return (
		<Container>
			<Logo />

			<Social />
			<HireMe>
				<Link href="">Hire Me</Link>
				{/* <DripContainer>
					<Drips color="var(--pink)" />
				</DripContainer> */}
			</HireMe>
		</Container>
	);
};

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

// const DripContainer = styled.div`
// 	position: absolute;
// 	height: 50px;
// 	top: 100%;
// 	right: calc(50% - 25px);
// 	pointer-events: none;
// 	margin-top: -0.5px;
// `;

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
`;

export default Header;
