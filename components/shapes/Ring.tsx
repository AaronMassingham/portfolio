import { motion } from "framer-motion";

//Components
import SvgWrapper from "./SvgWrapper";

const Ring = () => {
	return (
		<SvgWrapper
			animate={{ rotate: [0, 90, 80, 140, 0], y: [0, 20, 0], x: [0, 30, -30, 80, -30, 0] }}
			transition={{ rotate: { duration: 80, repeat: Infinity }, duration: 50, repeat: Infinity }}
			width="400px"
			height="400px"
			defs={
				<clipPath id="ringClip">
					<motion.path d="M100,15c-46.9,0-85,38.1-85,85s38.1,85,85,85s85-38.1,85-85S146.9,15,100,15z M100,163.3c-35,0-63.3-28.4-63.3-63.3S65,36.7,100,36.7c35,0,63.3,28.4,63.3,63.3S135,163.3,100,163.3z" />
				</clipPath>
			}
		>
			<rect clipPath="url(#ringClip)" fill="url(#gradient)" width="100%" height="100%" />
		</SvgWrapper>
	);
};

export default Ring;
