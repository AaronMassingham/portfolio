import { motion } from "framer-motion";
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
import { Key } from "react";

const fetcher = (url: RequestInfo | URL) =>
	fetch(url).then((res) => res.json());

const Test: NextPage = () => {
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

			<StickyParent>
				<TestContainer
					initial={{ pointerEvents: "none" }}
					whileInView={{ pointerEvents: "auto" }}
					viewport={{ amount: 1 }}
				>
					<div style={{ background: "pink" }}>I Snap! 1</div>
					<div style={{ background: "orange" }}>I Snap! 2</div>
					<div style={{ background: "lightblue" }}>I Snap! 3</div>
				</TestContainer>
			</StickyParent>
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
					<Heading headingLevel="h4" children2={<span />}>
						I find visual solutions, then build them using current web
						technologies.
					</Heading>
					<Grid>
						{data.aboutMe.design.map(
							(item: { title: string; list: String[] }, index: Key) => (
								<Table key={index} data={item} />
							)
						)}
					</Grid>
					<Heading headingLevel="h4">Developer</Heading>
					<Grid>
						{data.aboutMe.developer.map(
							(item: { title: string; list: String[] }, index: Key) => (
								<Table key={index} data={item} />
							)
						)}
					</Grid>
				</div>
			</AboutContainer>
		</>
	);
};

const BigDiv = styled.div`
	height: 200vh;

	display: grid;
	place-items: center;
	& > div {
		height: 100%;
		width: 400px;
		outline: 1px dotted red;
	}
`;

const StickyParent = styled.div`
	height: 200vh;
	width: 100%;
`;

const TestContainer = styled(motion.div)`
	position: sticky;
	top: 0;
	width: 100%;
	height: 100vh;
	overflow: scroll;
	scroll-snap-type: y mandatory;
	&::-webkit-scrollbar {
		display: none;
	}
	& > div {
		scroll-snap-align: center;
		scroll-snap-stop: always;
		height: 100vh;
		color: black;
		display: grid;
		place-items: center;
	}
`;

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
	height: 100vh;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: flex-start;

	& > div {
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

const SectionTitleExtended = styled(SectionTitle)``;

export default Test;
