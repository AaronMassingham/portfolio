import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faInstagram,
	faDribbble,
} from "@fortawesome/free-brands-svg-icons";

import styled from "styled-components";

const Social = () => {
	return (
		<Container>
			<li>
				<a href="#" target="_blank" rel="noopener" aria-label="Facebook">
					<FontAwesomeIcon icon={faFacebookF} />
				</a>
			</li>
			<li>
				<a href="#" target="_blank" rel="noopener" aria-label="Instagram">
					<FontAwesomeIcon icon={faInstagram} />
				</a>
			</li>
			<li>
				<a href="#" target="_blank" rel="noopener" aria-label="Dribbble">
					<FontAwesomeIcon icon={faDribbble} />
				</a>
			</li>
		</Container>
	);
};

const Container = styled.ul`
	list-style: none;
	justify-self:flex-end;
	margin: 0;
	width: auto;
	height: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	gap: .5rem;
	margin-left: auto;
	
	& > li {
		width: 2rem;
		height: 2rem;
		box-shadow: var(--shadow);
		background:var(--primaryBackground);
		border-radius: 100%;
		& a {
			width: 100%;
			height: 100%;

			display: grid;
			place-items: center;
		}
		& svg {
			color: white;
			height: 1rem;
		}
`;

export default Social;
