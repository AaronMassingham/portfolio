import styled from "styled-components";
import { motion } from "framer-motion";

//Framer Motion Variants
import { fadeInVariants } from "@constants/FramerConstants";

const Table = ({ data }: Props) => {
	const viewportOptions = { margin: "-20% 0% -350px 0%" };
	const transitionOptions = {
		duration: 0.5,
		when: "beforeChildren",
	};

	return (
		<Container
			variants={fadeInVariants}
			initial="hidden"
			whileInView="animate"
			viewport={viewportOptions}
			transition={transitionOptions}
		>
			<motion.h5>
				<span>{data.title}</span>
			</motion.h5>
			<ul>
				{data.list.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</Container>
	);
};

type Props = {
	data: {
		title: string;
		list: Array<String>;
	};
};

const Container = styled(motion.div)`
	width: 100%;
	height: 100%;
	@media screen and (max-width: 768px) {
	}
	& h5 {
		font-size: 1rem;
		text-transform: uppercase;
		font-weight: bold;
		padding: 3rem 0 1rem 0;
		color: var(--pink);
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		@media screen and (min-width: 768px) {
			padding: 2rem 0 1rem 0;
			//border-bottom: 2px solid var(--pink);
		}
		&:after {
			content: " ";
			height: 2px;
			width: 100%;
			top: 0;
			left: 0;
			background: var(--pink);
			border-radius: 2px;
		}
		& span {
			width: max-content;
			white-space: nowrap;
			position: relative;
			text-transform: uppercase;
			font-weight: 400;
			top: 0;
			width: auto;
			padding: 0 1rem;
			color: var(--pink);
			height: 2rem;
			border-radius: 4rem;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: var(--primaryBackground);
			border: 2px solid var(--pink);
		}
	}
	& ul {
		padding: 1rem;
		text-transform: uppercase;
	}
	& li {
		display: inline;
		padding: 0.25rem 1rem 0.25rem 0;
		position: relative;
		font-size: 0.8rem;
		@media screen and (min-width: 768px) {
			display: inline;
		}
	}
`;

export default Table;
