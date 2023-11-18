import styled from "styled-components";
const DefaultButton = ({ onClick, buttonText, borderColor }: Props) => {
	return (
		<Button $color={borderColor} onClick={onClick}>
			{buttonText}
		</Button>
	);
};

type Props = {
	onClick: () => void;
	buttonText: string;
	borderColor?: string;
};

type SetColors = {
	$color?: string;
};

const Button = styled.button<SetColors>`
	color: ${(props) => (props.$color ? props.$color : "var(--white)")};
	border: 2px solid ${(props) => (props.$color ? props.$color : "unset")};
`;

export default DefaultButton;
