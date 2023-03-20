import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import BlockQuote from "@components/BlockQuote";
import Heading from "@components/Heading";
import Social from "./Social";

//Framer Animations
import {
	headingVariants,
	headingChildVariants,
} from "@constants/FramerConstants";

//Fonts
import { ShrikhandFont } from "@utils/Fonts";

const Footer = () => {
	const numberOfLayers = 10;
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

					<Details>
						<div>
							<motion.a
								{...headingChildVariants}
								href="mailto:hello@arnm.co.uk"
							>
								hello<span>@</span>arnm.co.uk
							</motion.a>
							<div>
								<a href="tel:07920443496">07920 44 34 56</a>
								<Social />
							</div>
						</div>
						<Copy className={`${ShrikhandFont.className}`}>{textEffect}</Copy>
					</Details>
				</Content>
			</Container>
		</>
	);
};

export default Footer;

const Copy = styled.div`
	position: absolute;
	font-size: 100px;
	font-weight: 900;
	bottom: 2rem;
	left: 0;
	height: 100px;
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
	padding: 0 2rem;
	max-width: 1200px;
	margin: auto;
	position: relative;
	& > @media screen and (min-width: 768px) {
		padding: 0 var(--sitePadding);
	}
`;

const Content = styled.div`
	& > div {
		display: flex;
		height: 50vh;
		align-items: start;
		flex-direction: column;
		& h2 {
			margin-left: -5px;
		}
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

	& > div {
		& > a {
			font-size: clamp(5rem, 2vw + 1rem, 7rem);
			font-weight: 800;
			text-transform: uppercase;
			margin-left: -5px;
			position: relative;
			isolation: isolate;

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
			justify-content: flex-start;
			align-items: center;
			gap: 2rem;
			padding-top: 2rem;
		}
	}
`;
