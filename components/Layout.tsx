import dynamic from "next/dynamic";

//Components
import LoadContainer from "./wrappers/LoadContainer";
import Logo from "./Logo";

//DynamicComponents
const DynamicFooter = dynamic(() => import("@components/Footer"));
const DynamicHeader = dynamic(() => import("@components/Header"));

const Layout = ({ children }: Props) => {
	return (
		<>
			<LoadContainer>
				<Logo />
				Stick with me...
			</LoadContainer>
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
