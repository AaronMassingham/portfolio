import styled from "styled-components";
import { motion, LayoutGroup } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

type Props = {
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
	links: Array<{
		id: number;
		text: string;
		url: string;
	}>;
};

const Nav = ({ onClick, links }: Props) => {
	const router = useRouter();

	const [activeHoverIndex, setActiveHoverIndex] = useState<null | number>(null);
	return (
		<Container>
			<LayoutGroup>
				<motion.ul onHoverEnd={() => setActiveHoverIndex(null)}>
					{links.map((link, i) => {
						const isHoverActive = i === activeHoverIndex;

						return (
							<motion.li key={i} onHoverStart={() => setActiveHoverIndex(i)}>
								<Link
									className={router.route == link.url ? "active" : ""}
									href={link.url}
									onClick={onClick}
									scroll={false}
								>
									{isHoverActive && <HoverIndicator $index={i} layoutId="hover-indicator" />}
									{link.text}
								</Link>
							</motion.li>
						);
					})}
				</motion.ul>
			</LayoutGroup>
		</Container>
	);
};

type HoverIndicatorProps = {
	$index: number;
};

const HoverIndicator = styled(motion.span)<HoverIndicatorProps>`

		content: "";
		position: absolute;
		height: 1px;
		width: 100%;
		bottom: -0.5rem;
	
		pointer-events: none;
		background:
		${(props) =>
			props.$index % 2 !== 0
				? `
			linear-gradient(90deg, var(--turquoise500) 0%, var(--orange500) 100%);
			`
				: `
			linear-gradient(90deg, var(--orange500) 0%, var(--turquoise500) 100%);
			`};

}
`;
const Container = styled.nav`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	& ul {
		list-style: none;
		font-size: 1.8rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		& li {
			transition: color 1s ease;
			color: var(--grey500);
			position: relative;
			&:hover,
			.active {
				color: var(--grey200);
				cursor: none;
			}
		}
		@media screen and (min-width: 768px) {
			font-size: inherit;
			flex-direction: row;
		}
	}
`;

export default Nav;
