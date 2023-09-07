type ConditonalWrapperProps = {
	children: React.ReactElement;
	condition: boolean;
	wrapper: (children: React.ReactElement) => JSX.Element;
};
const ConditonalWrapper = ({ condition, wrapper, children }: ConditonalWrapperProps) =>
	condition ? wrapper(children) : children;

export default ConditonalWrapper;
