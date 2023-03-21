import "../styles/globals.css";
import type { AppProps } from "next/app";

//Fonts
import { contentFont } from "@utils/Fonts";

//Components
import Layout from "@components/Layout";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<div className={contentFont.className}>
				<Layout>
					<AnimatePresence mode="wait">
						<Component {...pageProps} />
					</AnimatePresence>
				</Layout>
			</div>
		</>
	);
}
