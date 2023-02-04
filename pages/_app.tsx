import "@components/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";

//Components
import Layout from "@components/components/Layout";

export default function App({ Component, pageProps, router }: AppProps) {
	return (
		<Layout>
			<AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
				<motion.div key={router.route}>
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
		</Layout>
	);
}
