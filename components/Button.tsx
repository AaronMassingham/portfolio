import React from "react";
import styled from "styled-components";
import Link from "next/link";

import ConditonalWrapper from "./ConditionalWrapper";

export type DefaultButtonType = {
	text: string | React.ReactNode;
	icon?: React.ReactNode;
	isLoading?: boolean;

	linksTo?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const DefaultButton = ({ text, icon, isLoading, linksTo, onClick }: DefaultButtonType) => {
	return (
		<ConditonalWrapper
			condition={linksTo ? true : false}
			wrapper={(children) =>
				linksTo ? <Link href={linksTo}>{children}</Link> : <React.Fragment />
			}
		>
			<Container tabIndex={linksTo ? -1 : 0} disabled={isLoading} onClick={onClick}>
				{text}
				{icon && <span>{icon}</span>}
			</Container>
		</ConditonalWrapper>
	);
};

const Container = styled.button`
	background-color: var(--grey800);
	color: white;
	padding: 0.75rem 1rem;
	font-size: inherit;
	border-radius: 100px;
	display: flex;
	align-items: center;
	gap: 0.75rem;
	cursor: pointer;
	transition: all 0.2s ease;
	& span {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
	}
	& svg {
		width: 0.5rem;
		height: 1rem;
		fill: var(--grey100);
		transition: all 0.2s ease;
		transform: translateX(0) translateY(0);
	}
	&:hover {
		background-color: var(--grey700);
		& svg {
			transform: translateX(3px) translateY(0);
			fill: var(--turquoise500);
		}
	}
`;

export default DefaultButton;
