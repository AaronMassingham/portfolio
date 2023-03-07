import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//Fonts
import { ShrikhandFont } from "@components/utils/FancyFont";

//Components
import Modal from "@components/components/Modal";
import TextMarquee from "../TextMarquee";

const ProjectDetails = ({
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
					<h3 className={`${ShrikhandFont.className} strokedDarkBg`}>
						{/* <Number className="strokedDarkBg">0{index}</Number> */}
						<a
							href={link}
							target="_blank"
							rel="noreferrer"
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

// const Number = styled.span`
// 	@media screen and (min-width: 768px) {
// 		position: absolute;
// 		width: 100%;
// 		bottom: 0;
// 		left: 0;
// 		line-height: 0.7;
// 		font-size: 25vw;
// 		opacity: 0.05;
// 		pointer-events: none;
// 		letter-spacing: -1rem;
// 		color: var(--darkGrey) !important;
// 	}
// `;

const Container = styled(motion.div)`
	width: 100%;
	height: -webkit-fill-available;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		position: relative;
		height: 100%;
	}
`;

const Content = styled(motion.div)`
	@media screen and (max-width: 768px) {
		display: flex;
		& > button {
			margin-left: auto;
		}
	}
`;

const List = styled.div`
	@media screen and (max-width: 768px) {
		position: absolute;
		bottom: 0;
	}
	@media screen and (min-width: 768px) {
		justify-content: center;
		align-items: center;
	}
`;

export default ProjectDetails;
