import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

//Fonts
import { ContentFont } from "@utils/Fonts";

const Modal = ({ children, children2, backgroundColor }: Props) => {
	useEffect(() => {
		document.documentElement.classList.add("noOverflow");
		return () => document.documentElement.classList.remove("noOverflow");
	}, []);

	const transition = {
		duration: 0.75,
		ease: "easeInOut",
	};

	const variants = {
		initial: {
			opacity: 0,
			originX: "left",
			transition: { ...transition, when: "afterChildren" },
		},
		animate: {
			opacity: 1,
			transition: { ...transition, when: "beforeChildren" },
		},
	};
	const childVariants = {
		initial: { opacity: 0, y: 30, transition: transition },
		animate: { opacity: 1, y: 0, transition: transition },
	};

	return (
		<>
			{createPortal(
				<ModalContainer
					className={ContentFont.className}
					variants={variants}
					initial="initial"
					animate="animate"
					exit="initial"
					$modalBackground={backgroundColor}
				>
					<motion.div variants={childVariants}>
						<div>{children}</div>
					</motion.div>
					{children2}
				</ModalContainer>,
				document.body
			)}
		</>
	);
};

type Props = {
	children: React.ReactNode;
	setModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
	backgroundColor?: string;
	children2: React.ReactNode;
};

type ModalContainerProps = {
	$modalBackground?: string;
};

const ModalContainer = styled(motion.div)<ModalContainerProps>`
	position: fixed;
	z-index: 5;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	pointer-events: visible;
	padding: var(--headerH) var(--sitePadding) 6rem;
	overflow: hidden;

	& > div {
		position: relative;
		color: var(--white);
		overflow: hidden;
		height: -webkit-fill-available;
		@media screen and (min-width: 768px) {
			max-width: 1200px;
			margin: auto;
		}
		&:before {
			position: absolute;
			content: "";
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100px;
			background: transparent;
			background: var(--gradient);
			pointer-events: none;
			border-radius: 0 0 1rem 1rem;
		}
		& > div {
			overflow: scroll;
			height: -webkit-fill-available;
			font-size: var(--fs-md);
			& > div {
				padding: 2rem 2rem 1rem 2rem;
				&:last-of-type {
					padding-bottom: 100px;
				}
			}
		}
	}

	& button {
		position: absolute;
		bottom: 2rem;
		left: 2rem;
		background-color: var(--primaryBackground);
		color: var(--white);
	}

	&:before {
		position: absolute;
		content: "";
		left: 0;
		top: 0;
		right: 0;
		height: calc(100% + 5px);
		pointer-events: none;
		border-radius: 0 0 1rem 1rem;
		background-color: var(--primaryBackground);
	}
`;

export default Modal;
