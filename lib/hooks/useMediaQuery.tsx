import { useEffect, useState } from "react";

function useMediaQuery(): boolean {
	const [screenWidth, setScreenWidth] = useState<number>(0);

	useEffect(() => {
		const updateScreen = () => setScreenWidth(window.innerWidth);
		updateScreen();
		window.addEventListener("resize", updateScreen);
		return () => window.removeEventListener("resize", updateScreen);
	}, []);

	const isMobile = screenWidth < 768;

	return isMobile;
}

export default useMediaQuery;
