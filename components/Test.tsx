import React, { useRef } from "react";
import { useInView } from "framer-motion";

const Test = () => {
	const container = useRef(null);
	const ref = useRef(null);
	// const isInView = useInView({ root: container });
	return (
		<div ref={container} style={{ overflow: "scroll" }}>
			<div ref={ref} />
		</div>
	);
};

export default Test;
