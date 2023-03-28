import Favicon from "@components/Favicon";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<Favicon />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
