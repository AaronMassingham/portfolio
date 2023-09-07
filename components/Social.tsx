import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faInstagram,
	faDribbble,
} from "@fortawesome/free-brands-svg-icons";

import styled from "styled-components";
import Github from "@components/icons/social/Github";
import Linkedin from "@components/icons/social/Linkedin";

<<<<<<< Updated upstream
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
=======
type Props = {
	gap?: number;
};

const Social = ({ gap }: Props) => {
	return (
		<Container $gap={gap}>
			<li>
				<a
					href="https://github.com/AaronMassingham"
					target="_blank"
					rel="noreferrer"
					title="Visit Aaron's Github Profile (external URL)"
				>
					<Github />
				</a>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/aaron-massingham-99511747/"
					target="_blank"
					rel="noreferrer"
					title="Visit Aaron's LinkedIn Profile (external URL)"
				>
					<Linkedin />
>>>>>>> Stashed changes
				</a>
			</li>
		</Container>
	);
};

<<<<<<< Updated upstream
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
=======
interface StyledProps {
	$gap?: number;
}

const Container = styled.ul<StyledProps>`
	list-style: none;
	display: flex;
	gap: ${({ $gap }) => ($gap ? $gap : 1.5)}rem;
	& li {
		height: 1.25rem;
		width: 1.25rem;
		position: relative;
		z-index: 2;
		display: grid;
		place-items: center center;
		aspect-ratio: 1 / -1;
		& svg {
			fill: var(--grey100);
		}

		&:before {
			transition: all 0.5s ease;
			content: "";
			position: absolute;
			width: 2.25rem;
			height: 2.25rem;
			will-change: transform;
			border-radius: 100%;
			border: 1px solid var(--turquoise500);

			z-index: -1;
			transform: scale(0.3);
			opacity: 0;
		}
		&:hover {
			&:before {
				transition: all 0.5s ease;
				transform: scale(0.9);
				opacity: 1;
				transform-origin: center center;
			}
>>>>>>> Stashed changes
		}
	}
`;

export default Social;
