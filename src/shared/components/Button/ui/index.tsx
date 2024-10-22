import { ButtonVariant } from '../models/types';
import { StyledButton, StyledSubmit } from './styled';

type Props = {
	name: string;
	fullWidth?: boolean;
	type?: 'button' | 'submit';
	variant?: ButtonVariant;
	onClick: () => void;
	disabled?: boolean;
	loading?: boolean;
};
export const Button = ({
	name,
	onClick,
	fullWidth,
	disabled,
	loading,
	type = 'button',
	variant = 'default',
}: Props) => {
	if (type === 'submit') {
		return (
			<StyledSubmit
				$variant={variant}
				$isDisabled={disabled}
				value={loading ? 'Loading...' : name}
				type={type}
				onClick={onClick}
				$fullWidth={fullWidth}
				disabled={disabled}
			/>
		);
	}
	return (
		<StyledButton
			$variant={variant}
			$isDisabled={disabled}
			onClick={onClick}
			$fullWidth={fullWidth}
			disabled={disabled}
		>
			{loading ? 'Loading...' : name}
		</StyledButton>
	);
};
