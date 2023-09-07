import styled from "styled-components";
//Types
import { PanelComponents } from "@typescriptTypes/ExperiencePanelProps";

type Props = {
	index: number;
	title: string;
	sections: Array<any>;
	scrollYProgressRefs: Array<React.RefObject<any>>;
	sectionComponents: PanelComponents;
};

const SectionContent = ({
	index,
	title,
	sections,
	scrollYProgressRefs,
	sectionComponents,
}: Props) => {
	return (
		<Container id={title} key={index} ref={scrollYProgressRefs[index]}>
			<div>
				<h2>{title}</h2>
			</div>
			{/* <div /> */}

			{sections.map((sectionData, sectionIndex) => {
				const SectionComponent = sectionComponents[sectionData.sectionName];
				if (SectionComponent) {
					return (
						<SectionComponent
							key={`section-${index}-subsection-${sectionIndex}`}
							{...sectionData.props}
						/>
					);
				}
				return null;
			})}
		</Container>
	);
};

export default SectionContent;

const Container = styled.section`
	padding: 0 7.5%;
	height: 100vh;
	overflow: scroll;
	padding-top: 25vh;
	& > div:not(div:first-of-type) {
		height: 100vh;
	}
	& > div:first-of-type {
		position: sticky;
		top: 0;

		& h2 {
			text-transform: uppercase;
			font-weight: 800;
			line-height: clamp(55px, 8vw, 100px);

			word-wrap: balance;
			@media only screen and (max-width: 378px) {
				font-size: clamp(35px, 5vw, 65px);
			}
			@media only screen and (min-width: 379px) {
				font-size: clamp(35px, 5vw, 65px);
			}
		}
	}
	&::-webkit-scrollbar {
		display: none;
	}
`;
