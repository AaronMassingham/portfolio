const GradientDefs = () => {
	return (
		<>
			<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" style={{ stopColor: "var(--grey600)", stopOpacity: 1 }} />
				<stop offset="100%" style={{ stopColor: "var(--grey900)", stopOpacity: 1 }} />
			</linearGradient>
		</>
	);
};

export default GradientDefs;
