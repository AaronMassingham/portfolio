import type { AppProps } from "next/app";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import "../styles/globals.css";

//Fonts
import "@fontsource-variable/montserrat";

//Components
import Layout from "@components/Layout";

//Context
import { AnimationProvider } from "@contexts/AnimationContext";

export default function App({ Component, pageProps, router }: AppProps) {
	return (
		<AnimationProvider>
			<Layout>
				<AnimatePresence mode="wait" initial={false}>
					<Container
						key={router.route}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						<Component {...pageProps} />
					</Container>
				</AnimatePresence>
			</Layout>
		</AnimationProvider>
	);
}

const Container = styled(motion.div)`
	// height: 100vh;
	// height: 100svh;

	& > *:first-child {
		padding-top: 25svh;
	}
`;
