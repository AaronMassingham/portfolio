import React, { useRef, forwardRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
//Components
import Heading from "@components/Heading";
import Social from "./Social";

//Fonts
import { ShrikhandFont } from "@utils/Fonts";

//Framer Consts
import { fadeInMotionVariants } from "@constants/FramerConstants";

const Footer = forwardRef<HTMLDivElement>(function Footer(props, ref) {
	const spacerRef = useRef(null);
	const isInView = useInView(spacerRef);

	const transition = {
		duration: 1,
		ease: "easeInOut",
	};

	const variants = {
		hidden: {
			y: -100,
			opacity: 0,
			transition: transition,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: transition,
		},
	};
	const { ...otherProps } = props;
	return (
		<>
			<Container
				{...otherProps}
				ref={ref}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1, delay: 2 }}
			>
				<div className="stack">
					<Heading headingLevel="h2">Reach Out</Heading>
					<motion.p {...fadeInMotionVariants}>
						I&apos;m all about working with interesting people on interesting
						projects. Long term or short term, if you think we&apos;d make a
						snug fit then get in touch.
					</motion.p>
				</div>
				<Spacer ref={spacerRef}>
					<Details
						variants={variants}
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
					>
						<div>
							<a
								href="&#109;ailto&#58;%68%6&#53;ll%6&#70;&#64;a&#114;&#110;m%2&#69;%6&#51;o&#46;uk"
								aria-label="Email Me"
							>
								hell&#111;<span>&#64;</span>arnm&#46;co&#46;&#117;k
							</a>
							<div>
								<Social />
							</div>
						</div>

						<Copy className={`${ShrikhandFont.className}`}>&copy;2023</Copy>
					</Details>
				</Spacer>
			</Container>
		</>
	);
});
const Container = styled(motion.section)`
	max-width: 1200px;
	margin: auto;
	position: relative;
	padding: 0 var(--sitePadding);
	& > div {
		display: flex;
		height: 50vh;
		height: 50dvh;
		align-items: start;
		flex-direction: column;
		&:first-of-type {
			justify-content: center;
		}
	}
	p {
		max-width: 500px;
	}
`;
const Spacer = styled.div`
	overflow: clip;
	clip-path: inset(0 -100vmax);
`;
const Copy = styled.div`
	position: absolute;
	font-size: var(--fs-lg);
	bottom: 0;
	left: 0;
	& span {
		position: absolute;
		left: 0;
		color: var(--green);
	}
	& span:nth-child(even) {
		color: var(--primaryBackground);
	}
`;

const Details = styled(motion.div)`
	gap: 2rem;
	padding-top: 4rem;
	background-color: var(--green);
	color: var(--primaryBackground);
	box-shadow: 0 0 0 100vmax var(--green);
	position: fixed;
	bottom: 0;
	height: 50vh;
	& > div {
		& > a {
			font-size: var(--fs-sm);
			font-weight: 900;
			text-transform: uppercase;
			position: relative;
			isolation: isolate;
			@media screen and (min-width: 768px) {
				font-size: var(--fs-xl);
			}
			& span {
				display: inline-block;
				color: var(--white);
				position: relative;
				top: -5px;
			}
			&:before {
				content: "";
				height: 2px;
				width: 100%;
				position: absolute;
				bottom: 0;

				border-radius: 2px;
				background-color: var(--primaryBackground);
				transition: transform 0.2s ease-in-out;

				z-index: -1;
				transform: translateY(5px);
			}
			&:hover:before {
				transform: translateY(0);
			}
		}
		& > div {
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			align-items: flex-start;
			gap: 2rem;
			padding-top: 2rem;

			div {
				margin: unset;
			}

			@media screen and (min-width: 768px) {
				flex-direction: row;
				align-items: center;
			}
		}
	}
`;

export default Footer;
