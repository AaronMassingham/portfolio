import React from "react";

import ImageBlock from "@components/components/projects/blocks/ImageBlock";
import ColorsBlock from "@components/components/projects/blocks/ColorsBlock";
import TextBlock from "@components/components/projects/blocks/TextBlock";
interface Block {
	id: number;
	component: string;
	url?: string;
	content?: string;
	colors?: Array<String>;
}

const Components: { [key: string]: React.ComponentType<any> } = {
	image: ImageBlock,
	colors: ColorsBlock,
	text: TextBlock,
};

const renderBlock = (block: Block): JSX.Element => {
	if (typeof Components[block.component] !== "undefined") {
		return React.createElement(Components[block.component], {
			key: block.id,
			block: block,
		});
	}
	return React.createElement(
		() => <div>The component {block.component} has not been created yet.</div>,
		{ key: block.id }
	);
};

export default renderBlock;
