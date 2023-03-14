import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styled from "styled-components";
import {
	headingVariants,
	headingChildVariants,
	defaultTransition,
} from "@constants/FramerConstants";

const Heading = ({ headingLevel = "h1", children }: HeadingProps) => {
	const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
		React.createElement(headingLevel, props, children);

	const ref = useRef(null);
	const isInView = useInView(ref);

	const variantViewportOptions = {
		margin: "-10% 0% -10% 0%",
	};

	return (
		<Container
			variants={headingVariants}
			initial="hidden"
			whileInView={isInView ? "animate" : "hidden"}
			viewport={variantViewportOptions}
			transition={defaultTransition}
			ref={ref}
		>
			<motion.span
				variants={headingChildVariants}
				animate={isInView ? "animate" : "hidden"}
				transition={defaultTransition}
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

const Container = styled(motion.span)`
	display:inline-block;
	overflow:clip;
	& span {
		height:100%;
		display:inline-block;
	}
}`;
