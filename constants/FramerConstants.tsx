//Heading component variants
export const headingVariants = {
	hidden: {
		y: "-2rem",
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
	},
};
export const headingChildVariants = {
	hidden: {
		y: "8rem",
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
	},
};

//BigRibbon
export const ribbonVariants = {
	hidden: {
		opacity: 0,
		y: -290,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			when: "beforeChildren",
			staggerChildren: 0.05,
		},
	},
};
export const ribbonChildVariants = {
	hidden: {
		opacity: 0,
		y: 290,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			ease: "easeOut",
		},
	},
};

//ListMarquee
export const listMarqueeVariants = {
	animate: {
		transition: {
			staggerChildren: 10,
		},
	},
};

export const listMarqueeChildVariants = {
	animate: {
		x: ["100%", "-100%"],
		transition: {
			x: {
				repeat: Infinity,
				repeatType: "loop",
				duration: 20,
				ease: "linear",
			},
		},
	},
};

//Simple default Variants
export const fadeInVariants = {
	hidden: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
};

export const fadeInSlideUpVariants = {
	hidden: {
		opacity: 0,
		y: 30,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
};

export const rotate360Variants = {
	animate: {
		rotate: -360,
		transition: {
			duration: 60,
			repeat: Infinity,
			ease: "linear",
		},
	},
};

//Transition
export const defaultTransition = {
	duration: 1,
	ease: "easeOut",
};
