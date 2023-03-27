import styled from "styled-components";
import Image from "next/image";

function PerspectiveAnimation() {
	return (
		<Container>
			<PerspectiveContainer>
				<Child>
					<div>
						<Image
							priority
							src="/test/base.svg"
							fill
							alt="Follow us on Twitter"
						/>
					</div>
					<div>
						<Image
							priority
							src="/test/containers.svg"
							fill
							alt="Follow us on Twitter"
						/>
					</div>
					<div>
						<Image
							priority
							src="/test/elements.svg"
							fill
							alt="Follow us on Twitter"
						/>
					</div>
				</Child>
			</PerspectiveContainer>
		</Container>
	);
}

const Child = styled.div`
	transform: rotateY(0deg);
	background: #111111;
	border-radius: 1rem;
	height: 100%;
	transition: 2s ease;
	&:hover {
		transform: rotateY(30deg);
	}

	& div {
		position: absolute;
		height: 100%;
		width: 100%;
		transition: 2s ease;
	}

	& > div:nth-child(1) {
		transform: translateX(0) translateZ(1rem);
	}
	& > div:nth-child(2) {
		transform: translateX(0) translateZ(2rem);
	}
	& > div:nth-child(3) {
		transform: translateX(0) translateZ(3rem);
	}

	&:hover div:nth-child(1) {
		transform: translateX(1rem) translateZ(0rem);
	}
	&:hover div:nth-child(2) {
		transform: translateX(3rem) translateZ(1rem);
	}
	&:hover div:nth-child(3) {
		transform: translateX(5rem) translateZ(2rem);
	}
`;
const PerspectiveContainer = styled.div`
	perspective: 1000px;
	width: 300px;
	aspect-ratio: 11/20;
	color: red;
	margin: auto;
`;

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background: black;
	margin: 10rem auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default PerspectiveAnimation;
