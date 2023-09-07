import { createContext, useState, useContext, ReactNode } from "react";

interface AnimationContextType {
	currentAnimation: string;
	setAnimation: (page: string) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

type Props = {
	children: ReactNode;
};

export const AnimationProvider = ({ children }: Props) => {
	const [currentAnimation, setCurrentAnimation] = useState("home");

	const setAnimation = (page: string) => {
		setCurrentAnimation(page);
	};

	return (
		<AnimationContext.Provider value={{ currentAnimation, setAnimation }}>
			{children}
		</AnimationContext.Provider>
	);
};

export const useAnimationContext = (): AnimationContextType => {
	const context = useContext(AnimationContext);
	if (context === undefined) {
		throw new Error("usePageContext must be used within a PageProvider");
	}
	return context;
};
