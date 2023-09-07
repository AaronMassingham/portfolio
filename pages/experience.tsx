import React, { useEffect } from "react";
import Head from "next/head";

//Contexts
import { useAnimationContext } from "@contexts/AnimationContext";

//Content
import { EXPERIENCE_CONTENT } from "@constants/ExperienceContent";

//Components
import Hero from "@components/Hero";
import ScrollSnapPanels from "@components/panels/ScrollSnapPanels";
import ExperienceTitle from "@components/ExperienceTitle";

const Experience = () => {
	const { setAnimation } = useAnimationContext();

	useEffect(() => {
		setAnimation("experience");
	}, [setAnimation]);

	return (
		<>
			<Head>
				<title>Aaron Massingham | Online Portfolio 2023</title>
				<meta name="description" content="I help create frontend experiences." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero>
				<ExperienceTitle />
			</Hero>
			<ScrollSnapPanels sections={EXPERIENCE_CONTENT} />
		</>
	);
};

export default Experience;
