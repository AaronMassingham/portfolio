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
	viewport: { amount: 0.99 },
};

export const HeroFadeOnScrollAnimation: MotionProps = {
	initial: "hidden",
	whileInView: "visible",
	viewport: { amount: 1, margin: "-15% 0% 0% 0%" },
	transition: { duration: 1 },
	variants: {
		visible: { opacity: 1 },
		hidden: { opacity: 0.1 },
	},
};

// Default Transition
const defaultTransitionValues = {
	duration: 0.75,
	ease: "easeInOut",
};

//Simple default Variants
export const fadeInMotionVariants: MotionProps = {
	initial: "hidden",
	whileInView: "visible",
	variants: {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	},
	transition: defaultTransitionValues,
};

export const fadeInUpMotionVariants: MotionProps = {
	initial: "hidden",
	whileInView: "visible",
	variants: {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0 },
	},
	transition: defaultTransitionValues,
};

//ListMarquee
export const listMarqueeVariants = {
	initial: "hidden",
	animate: "visible",
	transition: {
		staggerChildren: 20,
	},
};

export const listMarqueeChildVariants = {
	variants: {
		visible: {
			x: ["100%", "-100%"],
			transition: {
				x: {
					repeat: Infinity,
					repeatType: "loop",
					duration: 40,
					ease: "linear",
				},
			},
		},
	},
};

//Loading Container
export const loadingContainerVariants: MotionProps = {
	variants: {
		initial: { opacity: 1 },
		visible: {
			opacity: [1, 0],
			transitionEnd: {
				display: "none",
			},
		},
	},
	transition: {
		duration: 0.25,
		delay: 1.25,
	},
	initial: "initial",
	animate: "visible",
};

//Device Variants

export const deviceMotionVariants: MotionProps = {
	initial: "hidden",
	whileInView: "visible",
	variants: {
		hidden: { opacity: 0, clipPath: "inset(0 80% 0 0 round 1.5rem)" },
		visible: { opacity: 1, clipPath: "inset(0 0% 0 0 round 1.5rem)" },
	},
	viewport: {
		margin: "0% 0% -10% 0%",
	},
	transition: { duration: 1, ease: "easeInOut", delayChildren: 0.5 },
};

export const deviceMotionChildVariants: MotionProps = {
	initial: "hidden",
	whileInView: "visible",
	variants: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
		},
	},
	viewport: {
		margin: "0% 0% -10% 0%",
	},
	transition: { duration: 0.75, ease: "easeInOut", delay: 1 },
};
