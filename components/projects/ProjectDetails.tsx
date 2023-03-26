import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

//Components
import Modal from "@components/Modal";
import TextMarquee from "@components/ListMarquee";
import DefaultButton from "@components/DefaultButton";

//Framer Motion Variants
import { fadeInUpMotionVariants } from "@constants/FramerConstants";

const ProjectDetails = ({
	testimonial,
	testimonialAuthor,
	projectTitle,
	services,
	link,
	color,
	background,
}: Props) => {
	const [modalToggle, setModalToggle] = useState(false);

	return (
		<>
			<Container>
				<Content>
					<HeadingStyle
						{...fadeInUpMotionVariants}
						viewport={{ margin: "0% 0% -80% 0%" }}
						$textColor={color}
					>
						<h2>
							{link ? (
								<a
									href={link}
									target="_blank"
									rel="noreferrer"
									aria-label="Visit website (opens in a new tab)"
								>
									{projectTitle}
								</a>
							) : (
								projectTitle
							)}
						</h2>
					</HeadingStyle>
					<List {...fadeInUpMotionVariants}>
						{testimonial && (
							<DefaultButton
								onClick={() => setModalToggle((current) => !current)}
								buttonText="Testimonial"
							/>
						)}
						<TextMarquee content={services} />
					</List>
				</Content>
			</Container>
			<AnimatePresence mode="wait">
				{modalToggle && (
					<Modal
						children2={
							<DefaultButton
								onClick={() => setModalToggle((current) => !current)}
								buttonText="Close"
							/>
						}
						backgroundColor={background}
						setModalToggle={setModalToggle}
					>
						<div>{testimonial}</div>
						<Author>{testimonialAuthor}</Author>
					</Modal>
				)}
			</AnimatePresence>
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
	background?: string;
};

type ContentProps = {
	$textColor?: string;
};

const Author = styled.div`
	color: var(--green);
	font-size: var(--fs-sm);
`;
const Container = styled.div`
	position: relative;
	height: 100%;
	pointer-events: none;
`;

const HeadingStyle = styled(motion.div)<ContentProps>`
		position: absolute;
		top: 0;
		left: 0;
		width: 3rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		writing-mode: vertical-rl;
		@media screen and (min-width: 768px) {
			margin-bottom: 3rem;
		}

		& h2 {
				color: ${(props) => (props.$textColor ? props.$textColor : "var(--white)")};
				font-size:var(--fs-md)
			}
		}

		@media screen and (min-width: 768px) {
			width: 4rem;
		}

`;

const Content = styled.div`
	> * {
		pointer-events: visible;
	}
	& button {
		color: var(--white);
	}
`;

const List = styled(motion.div)`
	position: absolute;
	bottom: 0;
	right: 0;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export default ProjectDetails;
