import dynamic from "next/dynamic";
import React, { useState, useRef } from "react";

//Components
import LoadContainer from "./wrappers/LoadContainer";
import Logo from "./Logo";

import Footer from "@components/Footer";

//DynamicComponents
const DynamicFooter = dynamic(() => import("@components/Footer"), {
	ssr: false,
});
const DynamicHeader = dynamic(() => import("@components/Header"), {
	ssr: false,
});

const Layout = ({ children }: Props) => {
	const [LoadContainerLoaded, setLoadContainerLoaded] = useState(false);

	const getLoadContainerLoaded = (LoaderHasLoaded: any) => {
		setLoadContainerLoaded(LoaderHasLoaded);
	};

	const ref = useRef<HTMLDivElement | null>(null);

	return (
		<>
			<LoadContainer getLoadContainerLoaded={getLoadContainerLoaded}>
				<Logo />
				Stick with me...
			</LoadContainer>
			{LoadContainerLoaded ? (
				<>
					<DynamicHeader iconMenuRefs={ref} />
					{children}
					<Footer ref={ref} />
				</>
			) : null}
		</>
	);
};

type Props = {
	children: React.ReactNode;
};

export default Layout;
