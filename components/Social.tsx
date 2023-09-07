import styled from "styled-components";
import Github from "@components/icons/social/Github";
import Linkedin from "@components/icons/social/Linkedin";

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
				</a>
			</li>
		</Container>
	);
};

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
		}
	}
`;

export default Social;
