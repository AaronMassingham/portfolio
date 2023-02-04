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
	padding: 0;
	margin: 0;
	width: 1rem;
	& > li {
		padding-top: 1.5rem;
		& svg {
			max-height: 1rem;
		}
		&:first-of-type {
			padding-top: 0;
		}
	}
`;

export default Social;
