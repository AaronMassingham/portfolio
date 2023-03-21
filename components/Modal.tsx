import styled from "styled-components";
import { motion } from "framer-motion";
const Modal = ({ children, setModalToggle }: Props) => {
	const transition = {
		duration: 0.5,
		ease: "easeInOut",
	};

	const variants = {
		initial: {
			scaleY: 0,
			originY: "bottom",
			transition: { ...transition, when: "afterChildren" },
		},
		animate: {
			scaleY: 1,
			transition: { ...transition, when: "beforeChildren" },
		},
	};
	const childVariants = {
		initial: { opacity: 0, y: 30, transition: transition },
		animate: { opacity: 1, y: 0, transition: transition },
	};

	return (
		<ModalContainer
			variants={variants}
			initial="initial"
			animate="animate"
			exit="initial"
		>
			<motion.div variants={childVariants}>
				<button onClick={() => setModalToggle(false)}>Close</button>
				<div>{children}</div>
			</motion.div>
		</ModalContainer>
	);
};

type Props = {
	children: React.ReactNode;
	setModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalContainer = styled(motion.div)`
	position: absolute;
	z-index: 20;
	background-color: var(--primaryBackground);
	color: var(--white);
	padding: var(--headerH) 2rem 0 2rem;
	overscroll-behavior: none;
	overflow: clip;
	top: 0;
	left: 0;
	bottom: -1px;
	right: 0;
	padding: var(--headerH) 2rem 2rem 2rem;

	& > div {
		position: relative;

		height: 100%;
		border-radius: 1rem;
		padding: 2rem 0;
		& > div {
			max-width: 1200px;
			height: 100%;
			margin: auto;
			overflow: scroll;
			font-size: var(--fs-lg);
			padding-bottom: 150px;
		}
		&:before {
			position: absolute;
			content: "";
			bottom: 2rem;
			left: 0;
			width: 100%;
			height: 200px;
			background: transparent;
			background: var(--gradient);
			pointer-events: none;
		}
	}
	& button {
		position: absolute;
		bottom: 0;
		left: 0;
		background-color: var(--primaryBackground);
		color: var(--white);
		border: 0;
		text-transform: uppercase;
		border-radius: 100px;
		height: 2rem;
		padding: 0 1rem;
		font-size: inherit;
		font-weight: 400;
	}
`;

export default Modal;
