import React, { useEffect } from "react";
import Head from "next/head";

//Components
import Hero from "@components/Hero";
import DefaultButton from "@components/Button";
import Arrow from "@components/icons/Arrow";

//Contexts
import { useAnimationContext } from "@contexts/AnimationContext";

const Index = () => {
	const { setAnimation } = useAnimationContext();

	useEffect(() => {
		setAnimation("home");
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
				<h1>
					Designer &amp;
					<br />
					frontend
					<br />
					dev.
				</h1>
				<DefaultButton linksTo="/projects" text="Latest Projects" icon={<Arrow />} />
			</Hero>
		</>
	);
};

export default Index;
