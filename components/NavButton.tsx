import { motion } from "framer-motion";
import styled from "styled-components";

//Constants
import { navBtnBtmAnimation, navBtnTopAnimation } from "@constants/FramerVariants";

type Props = {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	toggle: boolean;
};

const NavButton = (props: Props) => {
	const { onClick, toggle } = props;

	return (
		<Container aria-label="Open navigation" onClick={onClick}>
			<motion.span
				initial="burger"
				animate={toggle ? "close" : "burger"}
				variants={navBtnTopAnimation}
			/>
			<motion.span animate={{ opacity: toggle ? 0 : 1 }} />
			<motion.span
				initial="burger"
				animate={toggle ? "close" : "burger"}
				variants={navBtnBtmAnimation}
			/>
		</Container>
	);
};

const Container = styled.button`
	position: absolute;
	right: 2rem;
	z-index: 5;
	height: 3rem;
	width: 3rem;
	padding: 0.5rem 0.75rem;
	display: grid;
	place-items: center;
	border: 1px solid var(--turquoise500);
	border-radius: 100%;
	cursor: pointer;
	& > span {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
		transform-origin: 50% 50%;
		display: block;
		height: 2px;
		width: 100%;
		border-radius: 5px;
		background-color: var(--grey100);
	}
	@media only screen and (min-width: 769px) {
		display: none;
	}
	&:before {
		content: "";
		position: absolute;
		width: 140%;
		height: 140%;
		border: 1px solid var(--grey100);
		border-radius: 100%;
		opacity: 0.15;
	}
`;

export default NavButton;
