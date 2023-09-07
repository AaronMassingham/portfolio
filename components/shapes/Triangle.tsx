import { motion } from "framer-motion";

//Components
import SvgWrapper from "./SvgWrapper";

const Triangle = () => {
	return (
		<SvgWrapper
			width="400px"
			height="400px"
			defs={
				<clipPath id="triangleClip">
					<motion.polygon
						animate={{ rotate: [0, 10, 0] }}
						transition={{ duration: 10, repeat: Infinity }}
						points="100,6.2 18.8,146.9 181.2,146.9"
					></motion.polygon>
				</clipPath>
			}
		>
			<rect clipPath="url(#triangleClip)" width="100%" height="100%" fill="url(#gradient)" />
		</SvgWrapper>
	);
};

export default Triangle;
