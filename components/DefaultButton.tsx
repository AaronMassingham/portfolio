const DefaultButton = ({ onClick, buttonText }: Props) => {
	return <button onClick={onClick}>{buttonText}</button>;
};

type Props = {
	onClick: () => void;
	buttonText: string;
};

export default DefaultButton;
