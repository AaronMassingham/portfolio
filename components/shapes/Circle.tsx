import { motion } from "framer-motion";

//Components
import SvgWrapper from "./SvgWrapper";

const Circle = () => {
	return (
		<SvgWrapper
			animate={{ rotate: [0, 90, 80, 140, 0], y: [0, 20, 0], x: [0, 30, -30, 80, -30, 0] }}
			transition={{ rotate: { duration: 80, repeat: Infinity }, duration: 50, repeat: Infinity }}
			width="400px"
			height="400px"
			defs={
				<clipPath id="circleClip">
					<motion.circle cx="100" cy="100" r="85"></motion.circle>
				</clipPath>
			}
		>
			<rect clipPath="url(#circleClip)" fill="url(#gradient)" width="100%" height="100%" />
		</SvgWrapper>
	);
};

export default Circle;
