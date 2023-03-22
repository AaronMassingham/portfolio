import dynamic from "next/dynamic";

//Dynamic Components
const DynamicFooter = dynamic(() => import("@components/Footer"));

import Header from "@components/Header";

const Layout = ({ children }: Props) => {
	return (
		<>
			<Header />
			{children}
			<DynamicFooter />
		</>
	);
};

type Props = {
	children: React.ReactNode;
};

export default Layout;
