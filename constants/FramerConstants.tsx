import { MotionProps } from "framer-motion";

// Default Transition
const defaultTransitionValues = {
	duration: 0.75,
	ease: "easeInOut",
};

export const header: MotionProps = {
	initial: "hidden",
	whileInView: "visible",

	variants: {
		hidden: {
			pathLength: 0,
		},
		visible: {
			pathLength: 1,
		},
	},

	transition: defaultTransitionValues,
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
		hidden: { opacity: 0.1, y: 30 },
		visible: { opacity: 1, y: 0 },
	},
	transition: defaultTransitionValues,
};

//Heading component variants
export const headingVariants = {
	variants: {
		hidden: { y: "-2rem", opacity: 0 },
		animate: { y: 0, opacity: 1 },
	},
	transition: defaultTransitionValues,
};
export const headingChildVariants = {
	variants: {
		hidden: {
			y: "2rem",
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
		},
	},
	viewport: {
		margin: "0px 0px 100px 0px",
	},
	transition: defaultTransitionValues,
};

//BigRibbon
export const bigRibbonVariants = {
	initial: "hidden",
	whileInView: "visible",
	variants: {
		hidden: {
			opacity: 0,
			y: 100,
		},
		visible: {
			opacity: 1,
			y: 0,
		},
	},
	viewport: {
		margin: "0px 0px 50px 0px",
	},
	transition: { delay: 1.75, duration: 1, ease: "easeInOut" },
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

//Persistent Rotation Variants

export const rotate360Variants: MotionProps = {
	initial: "hidden",
	whileInView: ["rotate", "immediateAnimations"],
	variants: {
		hidden: {
			opacity: 0,
			scale: 0.9,
		},
		rotate: {
			rotate: -360,
			transition: {
				duration: 60,
				repeat: Infinity,
				ease: "linear",
			},
		},
		immediateAnimations: {
			opacity: 1,
			scale: 1,
			transition: { delay: 1.25, duration: 1, ease: "easeInOut" },
		},
	},
	viewport: {
		margin: "20% 0% 20% 0%",
	},
};

//Device Variants

export const deviceMotionVariants: MotionProps = {
	initial: "hidden",
	whileInView: "visible",
	variants: {
		hidden: { opacity: 0, clipPath: "inset(0 80% 0 0 round 1rem)" },
		visible: { opacity: 1, clipPath: "inset(0 0% 0 0 round 1rem)" },
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
		hidden: { opacity: 0, clipPath: "inset(0 80% 0 0 round .75rem)" },
		visible: {
			opacity: 1,
			clipPath: "inset(0 0% 0 0 round .5rem)",
		},
	},
	viewport: {
		margin: "0% 0% -10% 0%",
	},
	transition: defaultTransitionValues,
};

// onViewportEnter: () => console.log("enter"),
// onViewportLeave: () => console.log("leave"),
