import Header from "@components/Header";
import LoadContainer from "./wrappers/LoadContainer";
import Logo from "./Logo";

const Layout = ({ children }: Props) => {
	return (
		<>
			<LoadContainer>
				<Logo />
				Stick with me...
			</LoadContainer>
			<Header />
			{children}
		</>
	);
};

type Props = {
	children: React.ReactNode;
};

export default Layout;
