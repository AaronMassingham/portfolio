import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { loadingContainerVariants } from "@constants/FramerConstants";
const LoadContainer = ({ children, getLoadContainerLoaded }: Props) => {
	useEffect(() => {
		getLoadContainerLoaded(true);
	}, []);

	return (
		<Container {...loadingContainerVariants}>{children && children}</Container>
	);
};

type Props = {
	children?: React.ReactNode;
	getLoadContainerLoaded: React.Dispatch<React.SetStateAction<boolean>>;
};

export default LoadContainer;

const Container = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: var(--primaryBackground);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
	flex-direction: column;
	gap: 2rem;
	text-transform: uppercase;
	color: var(--green);
	& > div {
		height: 8rem;
	}
`;
