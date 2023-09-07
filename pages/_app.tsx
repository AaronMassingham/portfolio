import "@components/styles/globals.css";
import type { AppProps } from "next/app";
<<<<<<< Updated upstream
import { AnimatePresence, motion } from "framer-motion";

//Fonts
import { contentFont } from "@components/utils/Fonts";

//Components
import Layout from "@components/components/Layout";

export default function App({ Component, pageProps, router }: AppProps) {
	return (
		<>
			<div className={contentFont.className}>
				<Layout>
					<AnimatePresence
						mode="wait"
						onExitComplete={() => window.scrollTo(0, 0)}
					>
						<motion.div key={router.route}>
							<Component {...pageProps} />
						</motion.div>
					</AnimatePresence>
				</Layout>
			</div>
		</>
=======
import styled from "styled-components";

//Fonts
import { TitleFont } from "@utils/Fonts";

//Components
import Layout from "@components/Layout";
import { AnimatePresence, motion } from "framer-motion";

import { AnimationProvider } from "@contexts/AnimationContext";

export default function App({ Component, pageProps, router }: AppProps) {
	return (
		<div className={TitleFont.className}>
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
		</div>
>>>>>>> Stashed changes
	);
}

const Container = styled(motion.div)`
	// height: 100vh;
	// height: 100svh;

	& > *:first-child {
		padding-top: 25svh;
	}
`;
