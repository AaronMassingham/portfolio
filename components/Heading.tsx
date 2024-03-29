import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styled from "styled-components";
import { headingChildVariants } from "@constants/FramerConstants";

const Heading = ({ headingLevel = "h1", children }: HeadingProps) => {
	const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
		React.createElement(headingLevel, props, children);

	const ref = useRef(null);
	const isInView = useInView(ref, {
		margin: "0px 0px -300px 0px",
	});

	return (
		<Container ref={ref}>
			<motion.span
				{...headingChildVariants}
				animate={isInView ? "visible" : "hidden"}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
			>
				<Heading>{children}</Heading>
			</motion.span>
		</Container>
	);
};

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	children2?: React.ReactNode;
}

export default Heading;

const Container = styled.div`
	display: inline-block;
	overflow: clip;
	& > span {
		display: inline-block;
	}
`;
