import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

//Components
import Hero from "@components/components/Hero";
import Project from "@components/components/projects/Project";
import ProjectDetails from "@components/components/projects/ProjectDetails";
import ProjectBlocks from "@components/components/projects/ProjectBlocks";
import Table from "@components/components/Table";
import BlockQuote from "@components/components/blocks/BlockQuote";
import BigRibbon from "@components/components/BigRibbon";
import Heading from "@components/components/Heading";

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
		projectTitle: "Wayne Anthony",
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
	bio: {
		title: "Me",
		content:
			"<p>I&apos;m a strong believer in the power of collaboration and I strive to create an environment that encourages open dialogue and creative problem solving. I&apos;m eager to work with a variety of people to develop ideas and bring them to life.</p><p>I have a taste for animation on the web and I&apos;m learning to bring more vibrant user experiences to the table.</p>",
	},
	socialMedia: [
		{
			platform: "Facebook",
			url: "#",
			fontawesomeIcon: "faFacebookF",
		},
		{
			platform: "Instagram",
			url: "#",
			fontawesomeIcon: "faInstagram",
		},
		{
			platform: "Dribbble",
			url: "#",
			fontawesomeIcon: "faDribbble",
		},
	],
	design: [
		{
			title: "Software",
			list: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
		},
		{
			title: "Competencies",
			list: ["Branding", "Wireframing", "UI Design", "Web Design", "Graphics"],
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
		{
			title: "Libraries",
			list: ["React Js", "Framer Motion", "GSAP", "Chakra UI"],
		},
		{ title: "Styling", list: ["CSS Modules", "Styled-components"] },
		{ title: "Frameworks", list: ["Next Js", "Gatsby Js"] },
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

			<SectionTitle>
				<BlockQuote
					title={<Heading headingLevel="h2" children="Projects" />}
					children="I find visual solutions, then build them using current web
					technologies."
				/>
			</SectionTitle>

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

			<SectionTitleExtended>
				<BlockQuote
					title={
						<Heading headingLevel="h2" children="A decade of experience" />
					}
					children="But I'm not through yet."
				/>
			</SectionTitleExtended>

			<AboutContainer>
				<div className="marqeeContainer">
					<BigRibbon content="About" />
				</div>
				<div className="stack">
					<Heading headingLevel="h3" children={aboutMe.bio.title} />
					<div dangerouslySetInnerHTML={{ __html: aboutMe.bio.content }} />
					<Heading headingLevel="h4" children="Designer" children2={<span />} />
					<Grid>
						{aboutMe.design.map((item, index) => (
							<Table key={index} data={item} />
						))}
					</Grid>
					<Heading headingLevel="h4" children="Developer" />
					<Grid>
						{aboutMe.developer.map((item, index) => (
							<Table key={index} data={item} />
						))}
					</Grid>
				</div>
			</AboutContainer>
		</>
	);
};

const AboutContainer = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	min-height: calc(200vh + 300px);

	& h3 {
		padding-top: 2rem;
	}
	& h4 {
		padding-top: 5rem;
	}

	& .stack {
		padding: var(--sitePadding);
		max-width: 1200px;
		align-self: center;
		padding-bottom: 200px;
		@media screen and (min-width: 768px) {
			padding-bottom: 400px;
		}
	}

	& .marqeeContainer {
		height: calc(100vh - var(--headerH));
		position: sticky;
		top: var(--headerH);
		pointer-events: none;
		width: 100%;
	}
`;

const Grid = styled.div`
	display: grid;
	place-items: start;

	grid-row-gap: 0;
	grid-column-gap: 2rem;
	grid-template-columns: 100%;

	@media screen and (min-width: 768px) {
		grid-column-gap: 2rem;
		grid-template-columns: repeat(
			auto-fit,
			minmax(min(100%/1, max(100%/3)), 1fr)
		);
	}
`;

const SectionTitle = styled.section`
	z-index: 1;
	width: 100%;
	height: 200vh;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	margin: 0 0 -200vh 0;

	& > div {
		position: sticky;
		top: calc(var(--headerH) - 4px);
		height: calc(100vh - var(--headerH));
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	& div > * {
		margin: 0 auto;
		text-align: center;
		padding: 1rem 0;
	}
`;

const SectionTitleExtended = styled(SectionTitle)`
	margin: -100vh 0 -100vh 0;
`;

export default Home;
