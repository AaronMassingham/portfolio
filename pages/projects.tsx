import React, { useEffect } from "react";
import Head from "next/head";

//Contexts
import { useAnimationContext } from "@contexts/AnimationContext";

const Projects = () => {
	const { setAnimation } = useAnimationContext();
	useEffect(() => {
		setAnimation("projects");
	}, [setAnimation]);
	return (
		<>
			<Head>
				<title>Aaron Massingham | Online Portfolio 2023</title>
				<meta name="description" content="I help create frontend experiences." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</>
	);
};

export default Projects;
