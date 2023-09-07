import { Source_Sans_Pro, Montserrat } from "@next/font/google";

export const TitleFont = Montserrat({
	subsets: ["latin"],
	weight: ["400", "600", "900"],
	display: "swap",
});
export const BodyFont = Source_Sans_Pro({
	subsets: ["latin"],
	weight: ["400"],
	display: "swap",
});
