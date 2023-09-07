import { motion } from "framer-motion";
import styled from "styled-components";

const Copyright = () => {
	const currentYear = new Date().getFullYear();
	return (
		<Container initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}>
			<div>
				<span>Made by me</span> <span>&copy; {currentYear}</span> <span>Aaron Massingham</span>
			</div>
		</Container>
	);
};

const Container = styled(motion.div)`
	width: 100%;
	padding: 2% 7.5%;
	border-top: 1px solid var(--grey800);
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(3px);
	color: var(--grey700);
	& > div {
		font-size: 0.6rem;
		gap: 3rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: 3rem;
		@media only screen and (min-width: 768px) {
			justify-content: flex-end;
		}
	}
	@media only screen and (min-width: 1100px) {
		padding: 2% 4rem;
	}
`;

export default Copyright;
