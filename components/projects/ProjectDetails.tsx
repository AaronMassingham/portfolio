import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//Fonts
import { ShrikhandFont } from "@components/utils/FancyFont";

//Components
import Modal from "@components/components/Modal";
import TextMarquee from "../TextMarquee";

const ProjectDetails = ({
	index,
	testimonial,
	testimonialAuthor,
	projectTitle,
	services,
	link,
}: Props) => {
	const [modalToggle, setModalToggle] = useState(false);

	return (
		<>
			<Container>
				<Content>
					<h3>
						<Number className={ShrikhandFont.className}>0{index}</Number>
						<a
							href={link}
							target="_blank"
							rel="noopener"
							aria-label="Vist Graft Haus website (opens in a new tab)"
						>
							{projectTitle}
						</a>
					</h3>
					<button onClick={() => setModalToggle(true)}>testimonial</button>
				</Content>

				<List>
					<TextMarquee content={services} />
				</List>
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
	@media screen and (min-width: 768px) {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		line-height: 0.7;
		font-size: 25vw;
		opacity: 0.05;
		pointer-events: none;
		color: var(--primaryBackground) !important;
		text-shadow: 1px 1px 0 var(--darkGrey), 2px 2px 0px var(--darkGrey),
			3px 3px 0px var(--darkGrey), 4px 4px 0px var(--darkGrey),
			5px 5px 0px var(--darkGrey), 6px 6px 0px var(--darkGrey),
			7px 7px 0px var(--darkGrey), 8px 8px 0px var(--darkGrey),
			9px 9px 0px var(--darkGrey), 10px 10px 0px var(--darkGrey);
		-webkit-text-stroke: calc(var(--borderWidth)) var(--darkestGrey);
		letter-spacing: -1rem;
	}
`;

const Container = styled(motion.div)`
	@media screen and (max-width: 768px) {
		position: relative;
		width: 100%;
		height: 100%;
		padding: var(--sitePadding);
		padding-top: 2rem;
	}
`;

const Content = styled(motion.div)`
	& span {
		padding-right: 1rem;
		color: var(--darkGrey);
	}
	@media screen and (max-width: 768px) {
		display: flex;
		& > button {
			margin-left: auto;
		}
		& h3 {
		}
	}
	@media screen and (min-width: 768px) {
	}
`;

const List = styled.div`
	@media screen and (max-width: 768px) {
		position: absolute;
		bottom: 2rem;
	}
	@media screen and (min-width: 768px) {
		justify-content: center;
		align-items: center;
	}
`;

export default ProjectDetails;
