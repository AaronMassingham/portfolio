//Types
import { EmploymentHistoryProps } from "@typescriptTypes/ExperiencePanelProps";

const EmploymentHistory = ({ title, text, date }: EmploymentHistoryProps) => {
	return (
		<div>
			<div>EmploymentHistory</div>
			<h3>{title}</h3>
			<div>{text}</div>
			<div>{date}</div>
		</div>
	);
};

export default EmploymentHistory;
