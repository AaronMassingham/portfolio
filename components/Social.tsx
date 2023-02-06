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
	padding: 0 0 2rem 0;
	margin: 0;
	width: 1rem;
	height: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	& > li {
		& svg {
			max-height: 1rem;
		}
		&:first-of-type {
			padding-top: 0;
		}
	}
	svg {
		mix-blend-mode: difference;
	}
`;

export default Social;
