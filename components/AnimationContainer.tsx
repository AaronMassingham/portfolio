import { motion } from "framer-motion";
import styled from "styled-components";

import { useAnimationContext } from "@contexts/AnimationContext";
import Rect from "./shapes/Rect";
import Triangle from "./shapes/Triangle";
import Cresent from "./shapes/Cresent";
import Circle from "./shapes/Circle";
import Ring from "./shapes/Ring";

const AnimationContainer = () => {
	const { currentAnimation } = useAnimationContext();

	const test = {
		home: {
			rotate: 360,
		},
		contact: {
			x: 200,
			y: 200,
			rotate: 45,
		},
		experience: {
			y: 200,
			rotate: 25,
		},
		projects: {
			x: 200,
			y: -100,
			rotate: 180,
		},
	};
	return (
		<Container layout aria-hidden="true">
			<motion.div
				style={{ top: "-20%", left: "45%" }}
				variants={test}
				animate={currentAnimation}
				transition={{ duration: 2.5 }}
			>
				<Rect />
			</motion.div>
			<motion.div
				style={{ top: "40%", right: "15%" }}
				variants={test}
				animate={currentAnimation}
				transition={{ duration: 3 }}
			>
				<Cresent />
			</motion.div>
			<motion.div
				style={{ bottom: "10%", left: "15%" }}
				variants={test}
				animate={currentAnimation}
				transition={{ duration: 2.25 }}
			>
				<Ring />
			</motion.div>
			<motion.div
				style={{ top: 0, left: 0 }}
				variants={test}
				animate={currentAnimation}
				transition={{ duration: 1.5 }}
			>
				<Triangle />
			</motion.div>
			<motion.div
				style={{ top: "50%", right: "5%" }}
				variants={test}
				animate={currentAnimation}
				transition={{ duration: 3.5 }}
			>
				<Circle />
			</motion.div>
		</Container>
	);
};

const Container = styled(motion.div)`
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	pointer-events: none;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: visible;
	& > div {
		// width: 800px;
		// height: 800px;
		// border-radius: 100%;
		// filter: blur(80px);
		position: absolute;
	}
`;

export default AnimationContainer;
