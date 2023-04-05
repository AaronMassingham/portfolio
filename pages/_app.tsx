import "../styles/globals.css";
import type { AppProps } from "next/app";

//Fonts
import { ContentFont } from "@utils/Fonts";

//Components
import Layout from "@components/Layout";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={ContentFont.className}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	);
}
