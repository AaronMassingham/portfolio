export type Props = {
	index: number;
	title: string;
	sections: SectionProps;
	scrollYProgressRefs: Array<React.RefObject<any>>;
	sectionComponents: PanelComponents;
};

export type SectionProps = {
	sections: Array<{
		title: string;
		panels: Array<{}>;
	}>;
};
export type PanelComponents = {
	[key: string]: React.ComponentType<any>;
};

export type EmploymentHistoryProps = {
	title: string;
	text: string;
	date: string;
};

export type IntroProps = {
	title: string;
	text: string;
};
export type Test3Props = {
	title: string;
	text: string;
};
