//Components
import Header from "@components/Header";
import AnimationContainer from "./AnimationContainer";

const Layout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<AnimationContainer />
			{children}
		</>
	);
};

interface Props {
	children?: React.ReactNode;
}

export default Layout;
