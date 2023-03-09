import styled from "styled-components";
import { motion } from "framer-motion";

//Components
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	);
};

const Main = styled(motion.div)``;

interface Props {
	children?: React.ReactNode;
}

export default Layout;
