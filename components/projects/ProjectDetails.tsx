import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//Components
import Modal from "@components/Modal";
import TextMarquee from "@components/TextMarquee";

//Framer Motion Variants
import {
	fadeInSlideUpVariants,
	defaultTransition,
} from "@constants/FramerConstants";

const ProjectDetails = ({
	testimonial,
	testimonialAuthor,
	projectTitle,
	services,
	link,
	color,
}: Props) => {
	const [modalToggle, setModalToggle] = useState(false);

	const viewportOptions = { margin: "-50% 0% 0% 0%" };

	return (
		<>
			<Container>
				<Content>
					<HeadingStyle $textColor={color}>
						<h3>
							{link ? (
								<a
									href={link}
									target="_blank"
									rel="noreferrer"
									aria-label="Vist website (opens in a new tab)"
								>
									{projectTitle}
								</a>
							) : (
								projectTitle
							)}
						</h3>
					</HeadingStyle>
					<List
						variants={fadeInSlideUpVariants}
						initial="hidden"
						whileInView="animate"
						transition={defaultTransition}
						viewport={viewportOptions}
					>
						<button onClick={() => setModalToggle(true)}>Testimonial</button>
						<TextMarquee content={services} />
					</List>
				</Content>
			</Container>
			{modalToggle && (
				<Modal setModalToggle={setModalToggle}>
					<div>{testimonial}</div>
					<div>{testimonialAuthor}</div>
				</Modal>
			)}
		</>
	);
};

type Props = {
	index: number;
	projectTitle: string;
	testimonial: string;
	testimonialAuthor: string;
	services: Array<string>;
	link: string;
	color?: string;
};

type ContentProps = {
	$textColor?: string;
};

const Container = styled(motion.div)`
	width: 100%;
	height: 100%;
	height: -webkit-fill-available;
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	flex-direction: column;
	position: relative;
`;

const HeadingStyle = styled(motion.div)<ContentProps>`
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		position: absolute;
		writing-mode: vertical-rl;
		text-orientation: mixed;
		top: 0;
		left: 0;
		width: 4rem;
		place-items: center;
		@media screen and (min-width: 768px) {
			margin-bottom: 3rem;
		}

		& h3 {color: ${(props) =>
			props.$textColor ? props.$textColor : "var(--white)"};}
		}

`;

const Content = styled(motion.div)`
	& button {
		background-color: var(--primaryBackground);
		color: var(--pink);
		//border: 2px solid var(--pink);
		border: 0;
		text-transform: uppercase;
		border-radius: 100px;
		height: 2rem;
		padding: 0 1rem;
		font-size: inherit;
		font-weight: 300;
	}
`;

const List = styled(motion.div)`
	position: absolute;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	bottom: 0;
	right: 0;
`;

export default ProjectDetails;
