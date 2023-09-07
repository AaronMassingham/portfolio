import { motion } from "framer-motion";
import SvgWrapper from "./SvgWrapper";

const Rect = () => {
	return (
		<SvgWrapper
			animate={{ rotate: [0, 90, 80, 140, 0], y: [0, 20, 0], x: [0, 30, -30, 80, -30, 0] }}
			transition={{ rotate: { duration: 80, repeat: Infinity }, duration: 50, repeat: Infinity }}
			width="400px"
			height="400px"
			defs={
				<clipPath id="rectClip">
					<motion.rect
						animate={{ rotate: [0, 10, 0] }}
						transition={{ duration: 10, repeat: Infinity }}
						width="140"
						height="140"
						x="30"
						y="30"
					></motion.rect>
				</clipPath>
			}
		>
			<rect clipPath="url(#rectClip)" fill="url(#gradient)" width="100%" height="100%" />
		</SvgWrapper>
	);
};

export default Rect;
