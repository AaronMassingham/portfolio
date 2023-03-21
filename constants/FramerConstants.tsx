import { MotionProps } from "framer-motion";

//Default Variant Titles
const defaultMotionProps = {
	initial: "hidden",
	whileInView: "visible",
	exit: "hidden",
};

// Default Transition
const defaultTransitionValues = {
	duration: 1,
	ease: "easeOut",
};

export const header: MotionProps = {
	variants: {
		hidden: {
			pathLength: 0,
		},
		visible: {
			pathLength: 1,
		},
	},
	...defaultMotionProps,
	transition: defaultTransitionValues,
};

//Simple default Variants
export const fadeInMotionVariants: MotionProps = {
	variants: {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	},
	...defaultMotionProps,
	transition: defaultTransitionValues,
};

export const fadeInUpMotionVariants: MotionProps = {
	variants: {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0 },
	},
	...defaultMotionProps,
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
	variants: {
		hidden: {
			opacity: 0,
			y: 200,
			transition: {
				duration: 2,
			},
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 2,
			},
		},
	},
	viewport: {
		margin: "0px 0px 200px 0px",
	},
	...defaultMotionProps,
};

//ListMarquee
export const listMarqueeVariants = {
	transition: {
		staggerChildren: 20,
	},
	initial: "hidden",
	animate: "visible",
	exit: "hidden",
};

export const listMarqueeChildVariants = {
	variants: {
		visible: {
			x: ["-100%", "100%"],
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

//Persistent Rotation Variants

export const rotate360Variants: MotionProps = {
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
			transition: {
				duration: 1,
			},
		},
	},
	initial: "hidden",
	whileInView: ["rotate", "immediateAnimations"],
	exit: "hidden",
	viewport: {
		margin: "20% 0% 20% 0%",
	},
};

//Device Variants

export const deviceMotionVariants: MotionProps = {
	initial: "hidden",
	whileInView: "visible",
	exit: "hidden",
	variants: {
		hidden: { opacity: 0, clipPath: "inset(0 80% 0 0 round 1.5rem)" },
		visible: { opacity: 1, clipPath: "inset(0 0% 0 0 round 1.5rem)" },
	},
	viewport: {
		margin: "-10% 0% -10% 0%",
	},
	transition: { type: "spring", duration: 1, bounce: 0, delayChildren: 0.5 },
};

export const deviceMotionChildVariants: MotionProps = {
	initial: "hidden",
	whileInView: "visible",
	exit: "hidden",
	variants: {
		hidden: { opacity: 0, clipPath: "inset(0 80% 0 0 round 1.1rem)" },
		visible: {
			opacity: 1,
			clipPath: "inset(0 0% 0 0 round 1.1rem)",
		},
	},
	viewport: {
		margin: "-10% 0% -10% 0%",
	},
	transition: { type: "spring", duration: 1, bounce: 0 },
};

// onViewportEnter: () => console.log("enter"),
// onViewportLeave: () => console.log("leave"),
