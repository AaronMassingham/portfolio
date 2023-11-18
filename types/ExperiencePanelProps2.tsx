export type SectionProps = {
	sections: Array<SectionItem>;
};

export type SectionItem = {
	title: string;
	panels: Array<PanelProps>;
	offset?: number;
	width?: number;
};

export type PanelProps = {
	sectionName: string;
	sectionContent: Object;
};
