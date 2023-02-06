import styled from "styled-components";

const Logo = () => {
	return (
		<Container>
			<Svg viewBox="0 0 68 68">
				<circle cx="32" cy="33" r="29" />
				<path d="M3.7,44.8l9.1-23.6h50.1 M33,64.9L20.4,40.4h-7.3 M16.8,29.1l-1.9,5.6h49.8" />
			</Svg>
		</Container>
	);
};

const Svg = styled.svg`
	circle {
		fill: #0c0c0b;
	}
	path {
		fill: none;
		stroke: #f2f0ed;
		stroke-width: 2;
		stroke-linecap: round;
		stroke-miterlimit: 10;
	}
`;
const Container = styled.div`
	max-width: 5rem;
	width: 100%;
	height: 100%;
	padding-top: 0.5rem;
`;

export default Logo;
