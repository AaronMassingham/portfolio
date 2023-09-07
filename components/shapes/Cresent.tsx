import { motion } from "framer-motion";

//Components
import SvgWrapper from "./SvgWrapper";

const Cresent = () => {
	return (
		<SvgWrapper
			width="400px"
			height="400px"
			defs={
				<clipPath id="cresentClip">
					<motion.path
						animate={{ rotate: [0, 10, 0] }}
						transition={{ duration: 10, repeat: Infinity }}
						d="M100,185c-46.9,0-85-38.1-85-85s38.1-85,85-85"
					></motion.path>
				</clipPath>
			}
		>
			<rect clipPath="url(#cresentClip)" width="100%" height="100%" fill="url(#gradient)" />
		</SvgWrapper>
	);
};

export default Cresent;
