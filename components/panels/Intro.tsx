//Types
import { IntroProps } from "@typescriptTypes/ExperiencePanelProps";

const Intro = ({ title, text }: IntroProps) => {
	return (
		<div>
			<div>Intro</div>
			<h3>prop1: {title}</h3>
			<div>prop2: {text}</div>
		</div>
	);
};

export default Intro;
