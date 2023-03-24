import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const ModalButton = ({ modalState, setModalToggle }: Props) => {
	const test = {
		open: {
			y: 0,
		},
		closed: {
			y: "-100%",
		},
	};

	return (
		<Button
			aria-pressed={modalState}
			layout
			onClick={() => setModalToggle((modalState) => !modalState)}
		>
			<AnimatePresence mode="wait">
				<motion.div
					variants={test}
					animate={modalState ? "open" : "closed"}
					aria-hidden={!modalState}
				>
					Close
				</motion.div>

				<motion.div
					variants={test}
					animate={modalState ? "open" : "closed"}
					aria-hidden={modalState}
				>
					Testimonial
				</motion.div>
			</AnimatePresence>
		</Button>
	);
};

type Props = {
	modalState?: boolean;
	setModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const Button = styled(motion.button)`
	position: absolute;
	z-index: 1000;
	bottom: 0;
	overflow: clip;
	& > div {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export default ModalButton;
