import styled from "styled-components";
import { motion } from "framer-motion";

const PinkBorder = ({ align }: Props) => {
	return (
		<BorderBottom
			alignment={align}
			initial={{ opacity: 0, scaleX: 0 }}
			whileInView={{ opacity: 1, scaleX: 1 }}
			transition={{ duration: 0.5, ease: "easeInOut" }}
			viewport={{ margin: "-5% 0% -5% 0%" }}
		/>
	);
};

type Props = {
	align: "top" | "bottom";
};

interface BorderProps {
	alignment: string;
}

export default PinkBorder;

const BorderBottom = styled(motion.div)<BorderProps>`
	position: absolute;
	width: 100%;
	height: 2px;
	background-color: var(--pink);

	${(props) => {
		switch (props.alignment) {
			case "top":
				return `
					top: 2px;
                `;
			case "bottom":
				return `
					bottom: 2px;
                `;
		}
	}}
`;
