import styled from "styled-components";

type Props = {
	status: boolean;
};

interface IContainer {
	$status: boolean;
}

const Availability = ({ status }: Props) => {
	return (
		<Container $status={status}>
			<div />
			{status ? "Available" : "unavailable"}
		</Container>
	);
};

const Container = styled.div<IContainer>`
	background: var(--grey800);
	width: max-content;
	height: 1.25rem;
	padding: 0 0.5rem 0 2px;
	display: flex;
	align-items: center;
	gap: 0.25rem;
	text-transform: uppercase;
	border-radius: 30px;
	font-size: 10px;
	${(props) =>
		props.$status
			? `
                color:var(--green500);
                & div:before {
                    background-color: var(--green500);
                }
            `
			: `
                color:var(--red500);
                & div:before {
                    background-color: var(--red500);
                }
            `};

	& div {
		height: 1rem;
		width: auto;
		display: grid;
		place-items: center center;
		aspect-ratio: 1;
		background: var(--grey900);
		border-radius: 100%;
		position: relative;
		&:before {
			content: "";
			width: 0.5rem;
			height: 0.5rem;
			border-radius: 100%;
			animation: opacity 1s linear 0s infinite alternate;
			@keyframes;
		}
	}
	@keyframes opacity {
		from {
			opacity: 0.5;
		}
		to {
			opacity: 1;
		}
	}
	@media only screen and (max-width: 500px) {
		transform: scale(0.8) translateX(-5px);
		transform-origin: 0;
	}
`;

export default Availability;
