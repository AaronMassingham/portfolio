import styled from "styled-components";

type Props = {
	children: React.ReactNode;
	customHeight?: string;
};
type ContainerProps = {
	$height?: string;
};

const Hero = ({ children, customHeight }: Props) => {
	return <Container $height={customHeight}>{children}</Container>;
};

const Container = styled.section<ContainerProps>`
	height: ${({ $height }) => ($height ? $height : "100svh")};
	position: relative;
	padding: 0 7.5%;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	gap: 5%;
	& h1 {
		text-transform: uppercase;
		font-weight: 800;
		line-height: clamp(55px, 8vw, 100px);

		word-wrap: balance;
		@media only screen and (max-width: 378px) {
			font-size: clamp(45px, 6vw, 110px);
		}
		@media only screen and (min-width: 379px) {
			font-size: clamp(50px, 8vw, 110px);
		}
	}
	@media only screen and (min-width: 1200px) {
		padding: 0 7.5%;
	}
`;

export default Hero;
