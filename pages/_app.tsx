import "../styles/globals.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

//Fonts
import { contentFont } from "@utils/Fonts";

//Components
import Layout from "@components/Layout";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={contentFont.className}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	);
}
