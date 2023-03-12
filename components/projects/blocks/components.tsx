import React from "react";

import ImageBlockDesktop from "@components/components/projects/blocks/ImageBlockDesktop";
import ImageBlockMobile from "@components/components/projects/blocks/ImageBlockMobile";
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
	imageMobile: ImageBlockMobile,
	imageDesktop: ImageBlockDesktop,
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
		() => (
			<div>The component "{block.component}" has not been created yet.</div>
		),
		{ key: block.id }
	);
};

export default renderBlock;
