import React from "react";

const Heading = ({
	headingLevel = "h1",
	children,
	children2,
}: HeadingProps) => {
	const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
		React.createElement(headingLevel, props, children);

	return (
		<Heading>
			{children2} {children}
		</Heading>
	);
};

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	children2?: any;
}

export default Heading;
