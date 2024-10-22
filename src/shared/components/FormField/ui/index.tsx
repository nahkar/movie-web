import { StyledFormFieldInput, StyledFormFieldWrapper } from './styled';

type Props = {
	type: string;
	placeholder?: string;
	value?: string;
	onChange: React.Dispatch<React.SetStateAction<string>>;
	loading?: boolean;
};
export const FormField = ({ type, placeholder, value, onChange, loading }: Props) => {
	return (
		<StyledFormFieldWrapper>
			<StyledFormFieldInput
				$loading={loading}
				type={type}
				value={value}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
				placeholder={placeholder}
			/>
		</StyledFormFieldWrapper>
	);
};
