import type { NextPage } from "next";

import Components from "../components/projects/blocks/components";

const projects = [
	{
		id: 1,
		component: "componentone",
	},
	{
		id: 2,
		component: "componenttwo",
	},
];

const Test: NextPage = () => {
	return <>{projects.map((block) => Components(block))}</>;
};

export default Test;
