import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

//Fonts
import { ShrikhandFont } from "../utils/FancyFont";

//Components
import Hero from "@components/components/Hero";

import Project from "@components/components/projects/Project";
import ProjectDetails from "@components/components/projects/ProjectDetails";
import ProjectBlocks from "@components/components/projects/ProjectBlocks";

import StickyTitleBlock from "@components/components/StickyTitleBlock";
import Table from "@components/components/Table";
import Columns from "@components/components/wrappers/Columns";

const projects = [
	{
		id: 1,
		projectTitle: "Graft Haus",
		link: "https://www.grafthaus.co.uk",
		testimonial: "Aaron is pretty good",
		testimonialAuthor: "Tony",
		services: ["wireframing", "Web design", "Web development", "WordPress CMS"],
		tech: ["PHP", "Advanced Custom Fields"],
		details: [
			{
				id: 1,
				component: "colors",
				colors: ["red", "blue", "green"],
			},
			{
				id: 2,
				component: "image",
				imageUrl:
					"https://www.grafthaus.co.uk/wp-content/uploads/2021/05/Untitled-1.jpg",
			},
			{
				id: 3,
				component: "text",
				content: "This is how I did this bit",
			},
		],
	},
	{
		id: 2,
		projectTitle: "Vitfor",
		link: "https://www.vitfor.com",
		testimonial: "Aaron is pretty good",
		testimonialAuthor: "Tamsin",
		services: [
			"Brand modernisation",
			"wireframing",
			"App UI Design",
			"Web design",
		],
		tech: ["Next Js", "Chakra UI", "TypeScript", "Framer Motion"],
		details: [
			{
				id: 1,
				component: "colors",
				colors: ["orange", "pink", "cyan"],
			},
			{
				id: 2,
				component: "image",
				imageUrl:
					"https://www.grafthaus.co.uk/wp-content/uploads/2021/05/Untitled-2.jpg",
			},
			{
				id: 3,
				component: "text",
				content: "This is how I did this bit",
			},
		],
	},
	{
		id: 3,
		projectTitle: "Wayne Anthony's",
		link: "https://www.wayneanthonys.co.uk",
		testimonial: "Yeah ZEN MATE",
		testimonialAuthor: "Wayne",
		services: ["Web design", "Web development", "WordPress CMS"],
		tech: [
			"Gatsby Js",
			"SnipCart Js",
			"Framer Motion",
			"Advanced Custom Fields",
		],
		details: [
			{
				id: 1,
				component: "colors",
				colors: ["purple", "gray", "yellow"],
			},
			{
				id: 2,
				component: "image",
				imageUrl:
					"https://www.grafthaus.co.uk/wp-content/uploads/2021/05/Untitled-3.jpg",
			},
			{
				id: 3,
				component: "text",
				content: "This is how I did this bit",
			},
		],
	},
];

const aboutMe = {
	bio: "<p>I'm constantly learning new ways to express my creativity and exploring new tools to help me get there.</p><p>I'm a strong believer in the power of collaboration and I strive to create an environment that encourages open dialogue and creative problem solving. I'm eager to work with a variety of people to develop ideas and bring them to life.</p><p>I have a taste for animation on the web and I'm learning to bring more vibrant user experiences to the table.</p><p>In my spare time, I'm passionate about foraging and learning about fungi. I love being outdoors burying my soul in nature and discovering interesting species.</p><p>Ask me about fungi, I dare you.</p>",
	design: [
		{
			title: "Software",
			list: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
		},
		{
			title: "Competencies",
			list: [
				"Branding",
				"Wireframing",
				"UI Design",
				"Web Design",
				"Social Media Materials",
			],
		},
	],

	developer: [
		{
			title: "Software",
			list: ["VS Code", " Adobe Dreamweaver"],
		},
		{
			title: "Code",
			list: ["HTML5", "CSS3", "JavaScript", "SVG"],
		},

		{ title: "Libraries", list: ["Framer Motion", "GSAP", "Chakra UI"] },
		{ title: "How I style", list: ["CSS Modules", "Styled-components"] },
		{ title: "Frameworks", list: ["React Js", "Next Js", "Gatsby Js"] },
		{ title: "VC", list: ["GitHub"] },
	],
};

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Aaron Massingham | Online Portfolio 2023</title>
				<meta
					name="description"
					content="I help create frontend experiences."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />

			{projects.map((item, index) => (
				<Project
					key={item.id}
					itemNumber={index}
					itemsTotal={projects.length - 1}
					staticChildren={<ProjectBlocks data={item.details} />}
					numberOfProjectBlocks={item.details.length}
				>
					<ProjectDetails
						link={item.link}
						index={index + 1}
						testimonial={item.testimonial}
						testimonialAuthor={item.testimonialAuthor}
						projectTitle={item.projectTitle}
						services={item.services}
					/>
				</Project>
			))}

			<StickyTitleBlock title="Who">
				<Columns>
					<h3 className={ShrikhandFont.className}>
						10 years of learning has got me this far and I look forward to the
						journey ahead.
					</h3>
					<div
						className="stack"
						dangerouslySetInnerHTML={{ __html: aboutMe.bio }}
					/>
				</Columns>
			</StickyTitleBlock>
			<StickyTitleBlock title="Skills">
				<Flex>
					<div>
						<h3 className={ShrikhandFont.className}>Designer</h3>
						<Grid>
							{aboutMe.design.map((item, index) => (
								<Table key={index} data={item} />
							))}
						</Grid>
					</div>
					<div>
						<h3 className={ShrikhandFont.className}>Developer</h3>
						<Grid>
							{aboutMe.developer.map((item, index) => (
								<Table key={index} data={item} />
							))}
						</Grid>
					</div>
				</Flex>
			</StickyTitleBlock>
		</>
	);
};

type GridProps = {};

const Flex = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4rem;
	& h2 {
		column-span: all;
		padding-bottom: 1rem;
	}
	& > div {
		flex: 1;
	}
	@media screen and (min-width: 990px) {
		flex-direction: row;
	}
`;

const Grid = styled.div<GridProps>`
	display: grid;
	place-items: start;

	grid-row-gap: 0;
	grid-column-gap: 2rem;
	grid-template-columns: repeat(
		auto-fit,
		minmax(min(100%/2, max(100%/3)), 1fr)
	);
	@media screen and (min-width: 768px) {
		grid-column-gap: 2rem;
	}
`;

export default Home;
