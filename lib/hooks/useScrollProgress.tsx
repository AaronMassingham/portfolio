import { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";

export const useScrollProgress = () => {
	const [scrollYProgress, setScrollYProgress] = useState(0);

	useEffect(() => {
		const scrollListener = () => {
			const scrollY = window.scrollY;
			const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
			const progress = scrollY / documentHeight;
			setScrollYProgress(progress);
		};

		window.addEventListener("scroll", scrollListener);
		scrollListener();

		return () => {
			window.removeEventListener("scroll", scrollListener);
		};
	}, []);

	return scrollYProgress;
};
