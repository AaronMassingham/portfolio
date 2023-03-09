import styled from "styled-components";

const Logo = () => {
	return (
		<Container>
			<Svg viewBox="0 0 60 60">
				<circle cx="30" cy="30" r="30" />
				<path d="M53.7,17.8H11.9c-1,0-2,0.6-2.4,1.6L3.6,34.8" />
				<polyline points="56.6,31.7 12.3,31.7 14.3,25.9 16.8,31.7 	" />
				<path d="M27.9,56.7l-7.7-17.5c-0.4-0.9-1.3-1.5-2.3-1.5h-5.7c-1,0-2,0.6-2.3,1.6l-2.2,5.4" />
			</Svg>
		</Container>
	);
};

const Container = styled.div`
	height: 4rem;
	border-radius: 100%;
	background-color: var(--primaryBackground);
	box-shadow: var(--shadow);
	border: 2px solid var(--pink);
`;

const Svg = styled.svg`
	height: 100%;
	display: block;
	position: relative;
	z-index: 1;
	circle {
		fill: none;
	}
	path,
	polyline {
		fill: none;
		stroke: var(--pink);

		stroke-width: 1px;
		stroke-linecap: round;
		stroke-miterlimit: 10;
	}
`;

export default Logo;
