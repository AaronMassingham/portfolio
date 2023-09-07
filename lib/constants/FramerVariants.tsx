import { MotionProps } from "framer-motion";

export const headerAnimation: MotionProps = {
	initial: { opacity: 0, y: -100 },
	animate: { opacity: 1, y: 0 },
	transition: {
		delay: 0.15,
		duration: 0.5,
	},
};

export const navBtnTopAnimation = {
	close: {
		rotate: 45,
		y: 0,
		transition: { rotate: { delay: 0.2 } },
	},
	burger: {
		y: 6,
		transition: { y: { delay: 0.2 } },
	},
};

export const navBtnBtmAnimation = {
	close: {
		rotate: -45,
		y: 0,
		transition: { rotate: { delay: 0.2 } },
	},
	burger: {
		y: -6,
		transition: { y: { delay: 0.2 } },
	},
};

export const experienceScrollAnimation: MotionProps = {
	initial: { pointerEvents: "none" },
	exit: { pointerEvents: "none" },
	whileInView: { pointerEvents: "auto", backgroundColor: "rgba(0,0,0,.7)" },
	transition: { backgroundColor: { duration: 2 } },
	viewport: { amount: 1 },
};

export const HeroFadeOnScrollAnimation: MotionProps = {
	initial: "hidden",
	whileInView: "visible",
	viewport: { amount: 1, margin: "-15% 0 0 0" },
	transition: { duration: 1 },
	variants: {
		visible: { opacity: 1 },
		hidden: { opacity: 0.1 },
	},
};
