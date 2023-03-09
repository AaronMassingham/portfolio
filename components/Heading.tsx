import React from "react";
import { motion } from "framer-motion";

const Heading = ({ headingLevel = "h1", children }: HeadingProps) => {
	const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
		React.createElement(headingLevel, props, <span>{children}</span>);

	return <Heading>{children}</Heading>;
};

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default Heading;
