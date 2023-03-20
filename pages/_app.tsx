import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

//Fonts
import { contentFont } from "@utils/Fonts";

//Components
import Layout from "@components/Layout";

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
	);
}

export function reportWebVitals(metric: any) {
	console.log(metric);
}

const Test = styled.section`
	height: 100vh;
	width: 100%;
	background: red;
	top: 0;
	left: 0;
	z-index: 30;
`;
