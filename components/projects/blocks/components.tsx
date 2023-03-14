import React from "react";

//Components
import ImageBlockDesktop from "@components/projects/blocks/ImageBlockDesktop";
import ImageBlockMobile from "@components/projects/blocks/ImageBlockMobile";
import ColorsBlock from "@components/projects/blocks/ColorsBlock";
import TextBlock from "@components/projects/blocks/TextBlock";

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
			<div>The component &quot;{block.component}&quot; doesn&quot;t exist!</div>
		),
		{ key: block.id }
	);
};

interface Block {
	id: number;
	component: string;
	url?: string;
	content?: string;
	colors?: Array<String>;
}

export default renderBlock;
