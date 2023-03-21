import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import Heading from "@components/Heading";
import Social from "./Social";

//Framer Animations
import { headingChildVariants } from "@constants/FramerConstants";

//Fonts
import { ShrikhandFont } from "@utils/Fonts";

const Footer = () => {
	const numberOfLayers = 6;
	let textEffect = [];
	for (let i = 0; i < numberOfLayers; i++) {
		textEffect.push(
			<span key={i} style={{ top: `-${i + i * 2}px` }}>
				&copy;2023
			</span>
		);
	}

	return (
		<>
			<Container>
				<Content>
					<div className="stack">
						<Heading headingLevel="h2">Reach Out</Heading>
						<p>
							I&apos;m all about working with interesting people on interesting
							projects. Long term or short term, if you think we&apos;d make a
							snug fit then get in touch.
						</p>
					</div>
					<Spacer>
						<Details>
							<div>
								<motion.a
									{...headingChildVariants}
									href="mailto:hello@arnm.co.uk"
								>
									hello<span>@</span>arnm.co.uk
								</motion.a>
								<div>
									<Social />
									<a href="tel:07920443496">07920 44 34 56</a>
								</div>
							</div>
							<Copy className={`${ShrikhandFont.className}`}>{textEffect}</Copy>
						</Details>
					</Spacer>
				</Content>
			</Container>
		</>
	);
};

export default Footer;

const Spacer = styled.div`
	overflow: clip;
	clip-path: inset(0 -100vmax);
`;
const Copy = styled.div`
	position: absolute;
	font-size: var(--fs-lg);
	font-weight: 900;
	bottom: 5rem;
	left: 0;
	width: 100%;
	& span {
		position: absolute;
		left: 0;

		color: var(--green);
	}
	& span:nth-child(even) {
		color: var(--primaryBackground);
	}
`;

const Container = styled.section`
	max-width: 1200px;
	margin: auto;
	position: relative;
	padding: 0 var(--sitePadding);
`;

const Content = styled.div`
	& > div {
		display: flex;
		height: 50vh;
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

const Details = styled.div`
	gap: 2rem;
	position: relative;
	justify-content: flex-center;
	padding-top: 2rem;
	background-color: var(--green);
	color: var(--primaryBackground);
	box-shadow: 0 0 0 100vmax var(--green);
	clip-path: inset(0 -100vmax);
	position: fixed;
	bottom: 0;
	height: 50vh;
	& > div {
		& > a {
			font-size: var(--fs-sm);
			font-weight: 800;
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
				top: -7px;
			}
			&:before {
				content: "";
				height: 2px;
				width: 100%;
				position: absolute;
				bottom: 0;
				left: 5px;
				border-radius: 2px;
				background-color: var(--primaryBackground);
				transition: transform 0.2s ease-in-out;
				transform-origin: bottom bottom;
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

			ul {
				margin: unset;
			}

			@media screen and (min-width: 768px) {
				flex-direction: row;
				align-items: center;
			}
		}
	}
`;
