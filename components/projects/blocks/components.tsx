import React from "react";
import dynamic from "next/dynamic";
//Components
// import ImageBlockDesktop from "@components/projects/blocks/ImageBlockDesktop";
// import ImageBlockMobile from "@components/projects/blocks/ImageBlockMobile";
import LogoBlockComparison from "@components/projects/blocks/LogoBlockComparison";
import TextBlock from "@components/projects/blocks/TextBlock";

const DynamicImageBlockDesktop = dynamic(
	() => import("@components/projects/blocks/ImageBlockDesktop"),
	{
		ssr: false,
	}
);
const DynamicImageBlockMobile = dynamic(
	() => import("@components/projects/blocks/ImageBlockMobile"),
	{
		ssr: false,
	}
);

const Components: { [key: string]: React.ComponentType<any> } = {
	imageMobile: DynamicImageBlockMobile,
	imageDesktop: DynamicImageBlockDesktop,
	logoComparison: LogoBlockComparison,
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
