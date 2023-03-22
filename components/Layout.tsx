import dynamic from "next/dynamic";

//Dynamic Components
const DynamicHeader = dynamic(() => import("@components/Header"));
const DynamicFooter = dynamic(() => import("@components/Footer"));

const Layout = ({ children }: Props) => {
	return (
		<>
			<DynamicHeader />
			{children}
			<DynamicFooter />
		</>
	);
};

type Props = {
	children: React.ReactNode;
};

export default Layout;
