//Components
import Header from "@components/Header";
import Footer from "@components/Footer";

const Layout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

type Props = {
	children: React.ReactNode;
};

export default Layout;
