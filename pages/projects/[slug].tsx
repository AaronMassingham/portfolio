import { GetStaticProps, GetStaticPaths } from "next";
// import { useRouter } from "next/router";
import path from "path";
import fs from "fs/promises";
import Project from "@components/projects/Project";
import ProjectBlocks from "@components/projects/ProjectBlocks";
import ProjectDetails from "@components/projects/ProjectDetails";

import { PROJECTS } from "@constants/ProjectsContent";

const data = PROJECTS;

const Page = ({ projectItem }: any) => {
	return (
		<Project
			staticChildren={<ProjectBlocks data={projectItem.details} />}
			background={projectItem.background}
		>
			<ProjectDetails
				link={projectItem.link}
				index={projectItem.id}
				testimonial={projectItem.testimonial}
				testimonialAuthor={projectItem.testimonialAuthor}
				projectTitle={projectItem.projectTitle}
				services={projectItem.services}
				background={projectItem.background}
			/>
		</Project>
	);
};

export async function getStaticPaths() {
	const paths = data.map((projectItem) => ({
		params: { slug: projectItem.slug },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
	const projectItem = data.find((item) => item.slug === params.slug);

	return {
		props: {
			projectItem,
		},
	};
}

// async function getData() {
// 	const filePath = path.join(process.cwd(), "json", "projects.json");
// 	const fileData = await fs.readFile(filePath);
// 	const data = JSON.parse(fileData.toString());

// 	return data;
// }

// export const getStaticProps: GetStaticProps = async (context) => {
// 	const itemSlug = context.params?.slug;
// 	const data = await getData();
// 	const hasItem = data.projects.find((item: any) => itemSlug === item.slug);

// 	if (!hasItem) {
// 		return {
// 			props: { hasError: true },
// 		};
// 	}

// 	return {
// 		props: {
// 			projectItem: hasItem,
// 		},
// 	};
// };

// export const getStaticPaths: GetStaticPaths = async () => {
// 	const data = await getData();
// 	const pathsWithParams = data.projects.map((item: any) => ({ params: { slug: item.slug } }));

// 	return {
// 		paths: pathsWithParams,
// 		fallback: false,
// 	};
// };

export default Page;
