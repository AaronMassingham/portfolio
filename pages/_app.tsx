import "../styles/globals.css";
import type { AppProps } from "next/app";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

//Fonts
import { contentFont } from "@utils/Fonts";

//Components
import Layout from "@components/Layout";
//import Footer from "@components/Footer";

const DynamicFooter = dynamic(() => import("@components/Footer"), {
	loading: () => <p>Loading...</p>,
});

export default function App({ Component, pageProps, router }: AppProps) {
	return (
		<>
			<div className={contentFont.className}>
				<Layout>
					<AnimatePresence
						mode="wait"
						onExitComplete={() => window.scrollTo(0, 0)}
					>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.25 }}
							key={router.route}
						>
							<Component {...pageProps} />
							<DynamicFooter />
						</motion.div>
					</AnimatePresence>
				</Layout>
			</div>
		</>
	);
}
