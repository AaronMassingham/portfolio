import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//Fonts
import { ShrikhandFont } from "@components/utils/FancyFont";

//Components
import Modal from "@components/components/Modal";
import TextMarquee from "../TextMarquee";
import Heading from "../Heading";

const ProjectDetails = ({
	testimonial,
	testimonialAuthor,
	projectTitle,
	services,
	link,
	index,
}: Props) => {
	const [modalToggle, setModalToggle] = useState(false);

	return (
		<>
			<Container>
				<Content>
					<Heading headingLevel="h3">
						<Number className={`${ShrikhandFont.className} strokedLightBg`}>
							0{index}
						</Number>
						<a
							href={link}
							target="_blank"
							rel="noreferrer"
							aria-label="Vist Graft Haus website (opens in a new tab)"
						>
							{projectTitle}
						</a>
					</Heading>

					<List>
						<button onClick={() => setModalToggle(true)}>testimonial</button>
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
};

const Number = styled.span`
	width: 100%;
	bottom: 0;
	left: 0;
	line-height: 0.7;
	font-size: 3rem;
	opacity: 0.1;
	pointer-events: none;
	padding-right: 1rem;
	@media screen and (min-width: 768px) {
		padding-right: 2rem;
		font-size: inherit;
	}
`;

const Container = styled(motion.div)`
	width: 100%;
	height: 100%;
	height: -webkit-fill-available;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-direction: column;
	position: relative;
`;

const Content = styled(motion.div)`
	& h3 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	& button {
		background-color: var(--primaryBackground);
		color: var(--pink);
		border: 2px solid var(--pink);
		text-transform: uppercase;
		border-radius: 100px;
		height: 2rem;
		padding: 0 1rem;
		font-size: inherit;
		font-weight: 300;
	}
`;

const List = styled.div`
	position: absolute;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	bottom: 0;
	right: 0;
`;

export default ProjectDetails;
