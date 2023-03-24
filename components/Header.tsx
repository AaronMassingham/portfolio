import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

//Components
import Logo from "@components/Logo";
import Social from "@components/Social";

const Header = () => {
	return (
		<Container
			initial={{ y: -30, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 1, delay: 1.75, ease: "easeInOut" }}
		>
			<Logo />
			<Social />
			<HireMe>
				<Link scroll={false} href="hire">
					Hire Me
				</Link>
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
	color: var(--green);
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 1rem;
`;

export default Header;
