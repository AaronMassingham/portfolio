import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import useSWR from "swr";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

//Components
import Hero from "@components/Hero";
import ProjectDetails from "@components/projects/ProjectDetails";
import ProjectBlocks from "@components/projects/ProjectBlocks";
import Table from "@components/Table";
import BlockQuote from "@components/BlockQuote";
import BigRibbon from "@components/BigRibbon";
import Heading from "@components/Heading";
import Logo from "@components/Logo";

import {
	fadeInUpMotionVariants,
	loadingContainerVariants,
} from "@constants/FramerConstants";

const DynamicPortfolio = dynamic(() => import("@components/projects/Project"));
const DynamicAboutContainer = dynamic(
	() => import("@components/wrappers/AboutContainer")
);

const fetcher = (url: RequestInfo | URL) =>
	fetch(url).then((res) => res.json());

export default function NextPage() {
	const { data, error } = useSWR("/api/staticdata", fetcher);

	if (error) return <LoadContainer>S**t, something went wrong.</LoadContainer>;
	//Handle the loading state
	if (!data) return <LoadContainer>Loading...</LoadContainer>;

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
			<LoadContainer {...loadingContainerVariants}>
				<Logo />
				Loading...
			</LoadContainer>

			<Hero />

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
						color: string;
						background: string;
					},
					index: number
				) => (
					<DynamicPortfolio
						key={item.id}
						staticChildren={<ProjectBlocks data={item.details} />}
						color={item.color}
						background={item.background}
					>
						<ProjectDetails
							link={item.link}
							index={index + 1}
							testimonial={item.testimonial}
							testimonialAuthor={item.testimonialAuthor}
							projectTitle={item.projectTitle}
							services={item.services}
							color={item.color}
						/>
					</DynamicPortfolio>
				)
			)}

			<DynamicAboutContainer>
				<SectionTitle>
					<BlockQuote
						title={<Heading headingLevel="h2">A decade of experience</Heading>}
					>
						But I&apos;m not through yet.
					</BlockQuote>
				</SectionTitle>
				<Marquee>
					<BigRibbon content="About Me" />
				</Marquee>
				<AboutContent className="stack">
					<Heading headingLevel="h3">{data.aboutMe.bio.title}</Heading>
					<motion.div
						{...fadeInUpMotionVariants}
						viewport={{ margin: "0% 0% -500px 0%" }}
						className="stack"
						dangerouslySetInnerHTML={{ __html: data.aboutMe.bio.content }}
					/>
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
				</AboutContent>
			</DynamicAboutContainer>
		</>
	);
}

const LoadContainer = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: var(--primaryBackground);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
	flex-direction: column;
	gap: 2rem;
	text-transform: uppercase;
	color: var(--green);
	& > div {
		height: 8rem;
	}
`;

const SectionTitle = styled.div`
	z-index: 1;
	height: 200vh;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	margin: -100vh 0 0 0;
	& > div {
		position: sticky;
		top: 0;
		height: 100vh;
	}
`;

const Marquee = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	& > div {
		height: 100vh;
		position: sticky;
		top: 0;
		display: grid;
		place-items: end;
	}
`;

const AboutContent = styled.div`
	max-width: 1200px;
	align-self: center;
	padding: 0 2rem 200px 2rem;
	@media screen and (min-width: 768px) {
		padding: 0 var(--sitePadding) 300px var(--sitePadding);
	}

	& .stack {
		padding-bottom: 20vh;
		@media screen and (min-width: 768px) {
			columns: 2;
			column-gap: 2rem;
		}
	}

	& p {
		@media screen and (min-width: 768px) {
			display: inline;
		}
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
