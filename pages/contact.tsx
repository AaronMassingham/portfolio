import React, { useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";

//Components
import Hero from "@components/Hero";
import Social from "@components/Social";
import Copyright from "@components/Copyright";

//Contexts
import { useAnimationContext } from "@contexts/AnimationContext";

const Contact = () => {
	const { setAnimation } = useAnimationContext();
	useEffect(() => {
		setAnimation("contact");
	}, [setAnimation]);

	return (
		<>
			<Head>
				<title>Aaron Massingham | Online Portfolio 2023</title>
				<meta name="description" content="I help create frontend experiences." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero customHeight="100svh">
				<h1>
					Let&apos;s Work
					<br />
					Together.
				</h1>
				<Block>
					<h2>
						<a href="mailto:hello@arnm.co.uk">
							hello<span>@</span>arnm.co.uk
						</a>
					</h2>
					<div />
				</Block>
				<Block>
					<Social gap={1} />
					<div />
				</Block>
				<Absolute>
					<Copyright />
				</Absolute>
			</Hero>
		</>
	);
};

const Absolute = styled.div`
	position: fixed;
	width: 100%;
	right: 0;
	bottom: 0;
	overflow: clip;
`;
const Block = styled.div`
	position: relative;

	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 5%;
	@media screen and (min-width: 768px) {
		max-width: 50%;
	}
	& h2 {
		font-weight: 100;
		background: -webkit-linear-gradient(0deg, var(--orange500), var(--turquoise500));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	& > div {
		content: "";
		height: 1px;
		flex: 1;
		background: var(--grey700);
	}
`;

export default Contact;
