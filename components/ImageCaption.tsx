import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ImageCaption = ({ text }: Props) => {
	return (
		<Container
			initial={{ opacity: 0, y: -50 }}
			whileInView={{ opacity: 0.5, y: 0 }}
			transition={{ duration: 1, delay: 1 }}
		>
			{text}
		</Container>
	);
};

type Props = {
	text?: string;
};

const Container = styled(motion.div)`
	font-size: 0.8rem;
	padding-top: 1rem;
	display: block;
	padding-right: 1rem;
	text-align: right;
`;

export default ImageCaption;
