import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import useSWR from "swr";

//Components
import Hero from "@components/Hero";
import Project from "@components/projects/Project";
import ProjectDetails from "@components/projects/ProjectDetails";
import ProjectBlocks from "@components/projects/ProjectBlocks";
import Table from "@components/Table";
import BlockQuote from "@components/BlockQuote";
import BigRibbon from "@components/BigRibbon";
import Heading from "@components/Heading";

const fetcher = (url: RequestInfo | URL) =>
	fetch(url).then((res) => res.json());

export default function NextPage() {
	const { data, error } = useSWR("/api/staticdata", fetcher);

	if (error) return <div>Failed to load</div>;
	//Handle the loading state
	if (!data) return <div>Loading...</div>;

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
				<BlockQuote title={<Heading headingLevel="h2">Projects</Heading>}>
					I find visual solutions, then build them using current web
					technologies.
				</BlockQuote>
			</SectionTitle>

			{data.projects.map(
				(
					item: {
						id: number;
						details: Array<any>;
						link: string;
						testimonial: string;
						testimonialAuthor: string;
						projectTitle: string;
						services: string[];
					},
					index: number
				) => (
					<Project
						key={item.id}
						itemNumber={index}
						itemsTotal={data.projects.length - 1}
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
				)
			)}

			<SectionTitleExtended>
				<BlockQuote
					title={<Heading headingLevel="h2">A decade of experience</Heading>}
				>
					But I&apos;m not through yet.
				</BlockQuote>
			</SectionTitleExtended>

			<AboutContainer>
				<div className="marqeeContainer">
					<BigRibbon content="About" />
				</div>
				<div className="stack">
					<Heading headingLevel="h3">{data.aboutMe.bio.title}</Heading>
					<div dangerouslySetInnerHTML={{ __html: data.aboutMe.bio.content }} />
					<Heading headingLevel="h4">Designer</Heading>
					<Grid>
						{data.aboutMe.design.map(
							(item: { title: string; list: String[] }, index: number) => (
								<Table key={index} data={item} />
							)
						)}
					</Grid>
					<Heading headingLevel="h4">Developer</Heading>
					<Grid>
						{data.aboutMe.developer.map(
							(item: { title: string; list: String[] }, index: number) => (
								<Table key={index} data={item} />
							)
						)}
					</Grid>
				</div>
			</AboutContainer>
		</>
	);
}

const AboutContainer = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	min-height: calc(200vh + 300px);

	& h3 {
		padding: 0.25rem 0;
	}
	& h4 {
		padding: 0.25rem 0;
	}

	& .stack {
		max-width: 1200px;
		align-self: center;
		padding-bottom: 200px;

		@media screen and (max-width: 768px) {
			padding-left: var(--sitePadding);
			padding-right: var(--sitePadding);
		}
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
	margin: 0 0 -100vh 0;

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
	}
`;

const SectionTitleExtended = styled(SectionTitle)`
	margin: -100vh 0 -100vh 0;
`;
