import dynamic from "next/dynamic";
import React, { useState } from "react";

//Components
import LoadContainer from "./wrappers/LoadContainer";
import Logo from "./Logo";

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

	return (
		<>
			<LoadContainer getLoadContainerLoaded={getLoadContainerLoaded}>
				<Logo />
				Stick with me...
			</LoadContainer>
			{LoadContainerLoaded ? (
				<>
					<DynamicHeader />
					{children}
					<DynamicFooter />
				</>
			) : null}
		</>
	);
};

type Props = {
	children: React.ReactNode;
};

export default Layout;
