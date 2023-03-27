import { Html, Head, Main, NextScript } from "next/document";

//Fonts
import { contentFont } from "@utils/Fonts";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className={contentFont.className}>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
