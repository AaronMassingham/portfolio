import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Modal from "@components/components/Modal";

const PortfolioItem = ({
	children,
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
				<div>
					<span>#{index}</span>
					<h3>
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
					<ul>
						{services.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
				<div>{children}</div>
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
	children: React.ReactNode;
	index: number;
	projectTitle: string;
	testimonial: string;
	testimonialAuthor: string;
	services: Array<string>;
	link: string;
};

const Container = styled(motion.div)``;

export default PortfolioItem;
