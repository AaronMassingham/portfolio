import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";

//Components
import TextMarquee from "@components/ListMarquee";
import DefaultButton from "@components/DefaultButton";

//Framer Motion Variants
import { fadeInUpMotionVariants } from "@constants/FramerConstants";

//Dynamic Components
const DynamicModal = dynamic(() => import("@components/Modal"), {
	ssr: false,
});

const ProjectDetails = ({
	testimonial,
	testimonialAuthor,
	projectTitle,
	services,
	link,
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
								borderColor={background}
							/>
						)}
						<TextMarquee borderColor={background} content={services} />
					</List>
				</Content>
			</Container>
			<AnimatePresence mode="wait">
				{modalToggle && (
					<DynamicModal
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
					</DynamicModal>
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
	background?: string;
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

const HeadingStyle = styled(motion.div)`
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
				color: var(--primaryBackground);
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
`;

const List = styled(motion.div)`
	position: absolute;
	bottom: 0;
	right: 0;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	& > div {
		margin-left: auto;
	}
`;

export default ProjectDetails;
