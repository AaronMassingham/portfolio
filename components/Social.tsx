import styled from "styled-components";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faInstagram,
	faDribbble,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const Social = () => {
	return (
		<Container>
			<li>
				<a
					href="https://www.linkedin.com/in/aaron-massingham-99511747/"
					target="_blank"
					rel="noreferrer"
					aria-label="LinkedIn"
				>
					<FontAwesomeIcon icon={faLinkedinIn} />
				</a>
			</li>
			<li>
				<a
					href="https://www.facebook.com/arnmMultimedia"
					target="_blank"
					rel="noreferrer"
					aria-label="Facebook"
				>
					<FontAwesomeIcon icon={faFacebookF} />
				</a>
			</li>
			<li>
				<a
					href="https://www.instagram.com/arnm_multimedia/"
					target="_blank"
					rel="noreferrer"
					aria-label="Instagram"
				>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
			</li>
		</Container>
	);
};

const Container = styled.ul`
	list-style: none;
	height: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	gap: .5rem;
	margin-left: auto;
	& > li {
		width: 2rem;
		height: 2rem;
		background:var(--primaryBackground);
		color:var(--white);
		border-radius: 100%;
		& a {
			width: 100%;
			height: 100%;

			display: grid;
			place-items: center;
		}
		& svg {
			height: 1rem;
			display:block
		}
`;

export default Social;
