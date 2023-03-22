import styled from "styled-components";
import { motion } from "framer-motion";

//Framer Motion Variants
import { fadeInUpMotionVariants } from "@constants/FramerConstants";

const Table = ({ data }: Props) => {
	const viewportOptions = { margin: "-20% 0% -350px 0%" };

	return (
		<Container {...fadeInUpMotionVariants} viewport={viewportOptions}>
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
	& h5 {
		padding: 3rem 0 1rem 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		@media screen and (min-width: 768px) {
			padding: 2rem 0 1rem 0;
		}
		&:after {
			content: " ";
			height: 2px;
			width: 100%;
			background: var(--white);
			border-radius: 2px;
		}
		& span {
			white-space: nowrap;
			text-transform: uppercase;
			font-weight: 200;
			width: auto;
			padding: 0 1rem;
			height: 2rem;
			border-radius: 4rem;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 2px solid var(--white);
		}
	}
	& ul {
		padding: 1rem;
		& li {
			display: inline;
			padding: 0.25rem 1rem 0.25rem 0;
			position: relative;
			font-size: 0.8rem;
		}
	}
`;

export default Table;
