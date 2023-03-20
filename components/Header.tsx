import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

//Components
import Logo from "@components/Logo";
import Social from "@components/Social";

const Header = () => {
	return (
		<Container
			initial={{ y: -200 }}
			animate={{ y: 0 }}
			transition={{ duration: 1 }}
		>
			<Logo />
			<Social />
			<HireMe>
				<Link href="">Hire Me</Link>
			</HireMe>
		</Container>
	);
};

const Container = styled(motion.div)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 2rem var(--sitePadding);
	height: var(--headerH);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 11;

	@media screen and (min-width: 768px) {
		padding: 2rem;
	}
`;

const HireMe = styled.button`
	position: relative;
	text-transform: uppercase;
	font-weight: 400;
	font-size: inherit;
	top: 0;
	width: auto;
	padding: 0 1rem;
	color: var(--green);
	height: 2rem;
	border-radius: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--primaryBackground);
	border: 0;
	margin-left: 1rem;
	box-shadow: var(--shadow);
`;

export default Header;
