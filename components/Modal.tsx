import React, { useState } from "react";

const Modal = ({ children, setModalToggle }: Props) => {
	return (
		<div>
			<button onClick={() => setModalToggle(false)}>Close</button>
			<div>{children}</div>
		</div>
	);
};

type Props = {
	children: React.ReactNode;
	setModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

export default Modal;
