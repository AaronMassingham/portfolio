<<<<<<< Updated upstream
import styled from "styled-components";
import { motion } from "framer-motion";

//Components
import Header from "./Header";
import Footer from "./Footer";
=======
import { motion } from "framer-motion";

//Components
import Header from "@components/Header";
import AnimationContainer from "./AnimationContainer";
>>>>>>> Stashed changes

const Layout = ({ children }: Props) => {
	return (
		<>
			<Header />
<<<<<<< Updated upstream
			<Main>{children}</Main>
			<Footer />
=======
			<AnimationContainer />
			{children}
>>>>>>> Stashed changes
		</>
	);
};

const Main = styled(motion.div)``;

interface Props {
	children?: React.ReactNode;
}

export default Layout;
